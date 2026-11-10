#!/usr/bin/env python3
"""Scrape Bellevue, WA job postings from Indeed search pages."""
from __future__ import annotations

import argparse
import csv
import json
import re
import time
from pathlib import Path
from urllib.parse import urlencode, urljoin
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

BASE = "https://www.indeed.com"
OUT_DEFAULT = Path("jobs.json")
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--location", default="Bellevue, WA")
    p.add_argument("--pages", type=int, default=1)
    p.add_argument("--out", type=Path, default=OUT_DEFAULT)
    p.add_argument("--grid", action="store_true",
                   help="keyword-grid mode: one page per search keyword, merged")
    return p.parse_args()


QUERIES = [
    "housekeeping", "food service", "dental assistant", "bank teller",
    "evening", "weekend", "night shift", "delivery", "grocery",
    "hotel", "janitor", "entry level", "home health", "call center",
    "teaching assistant",
]


def fetch(url: str) -> str | None:
    req = Request(url, headers=UA)
    try:
        return urlopen(req).read().decode("utf-8", "ignore")
    except Exception as e:
        print(f"[http] {e}")
        return None


def _text(node) -> str:
    return node.get_text(" ", strip=True) if node else ""


SALARY_RE = re.compile(r"\$\d[\d,]*(?:\.\d+)?\s*[-–]\s*\$?\d[\d,]*(?:\.\d+)?\s*(an hour|per hour|a year|a month)|\$\d[\d,]*(?:\.\d+)?\s*(an hour|per hour|a year|a month)", re.I)


def clean_salary(raw: str) -> str:
    """Flag implausible Indeed-modeled ranges (e.g. '$17.38 - $216.85 an hour')."""
    if not raw:
        return ""
    m = re.search(r"\$([\d,]+(?:\.\d+)?)\s*[-–]\s*\$([\d,]+(?:\.\d+)?)", raw)
    if m:
        lo = float(m.group(1).replace(",", ""))
        hi = float(m.group(2).replace(",", ""))
        if hi >= lo * 6 or hi > 80:
            return f"{raw} (Indeed estimate)"
    return raw


def extract_jobs(html: str) -> list[dict]:
    soup = BeautifulSoup(html, "html.parser")
    out = []
    for card in soup.select(".job_seen_beacon, [data-testid='serpJobCard']"):
        a = card.select_one("a[data-jk], a[href*='jk=']")
        if not a:
            continue
        jk = a.get("data-jk") or ""
        if not jk:
            m = re.search(r"jk=([A-Za-z0-9]+)", a.get("href", ""))
            if not m:
                continue
            jk = m.group(1)
        salary_el = card.find(attrs={"data-testid": "attributeTextSnippets"}) or card.find(string=SALARY_RE)
        salary = clean_salary(_text(salary_el))
        if not salary:
            m = SALARY_RE.search(card.get_text(" ", strip=True))
            if m:
                salary = clean_salary(m.group(0).strip())
        out.append(
            {
                "jk": jk,
                "title": _text(card.select_one("span.jcs-JobTitle, [id^=jobTitle-]")),
                "company": _text(card.select_one("[data-testid='company-name']")),
                "location": _text(card.select_one("[data-testid='text-location']")),
                "salary": salary,
                "kind": _text(card.find(attrs={"data-testid": "attribute_snippet_testid"})) or "",
                "url": urljoin(BASE, a["href"].split("#")[0]),
            }
        )
    return out


def has_next(html: str) -> bool:
    return bool(re.search(r'aria-label=["\']Next Page["\']', html))


def main() -> None:
    args = parse_args()
    out: dict[str, dict] = {}
    # resume from any prior CSV so a crashed run isn't lost
    csv_path0 = args.out.with_suffix(".csv")
    if csv_path0.exists() and csv_path0.stat().st_size > 0:
        import csv as _csv
        with csv_path0.open(newline="", encoding="utf-8") as f:
            for row in _csv.DictReader(f):
                if row.get("jk"):
                    out[row["jk"]] = row
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        targets = ([{"l": args.location, "start": str(n * 25)} for n in range(args.pages)]
                   if not args.grid else
                   [{"l": args.location, "q": q} for q in QUERIES])
        total = len(targets)
        for n, params in enumerate(targets, 1):
            url = f"{BASE}/jobs?{urlencode(params)}"
            label = params.get("q") or f"page {n}"
            got = []
            for attempt in (1, 2):
                ctx = browser.new_context(user_agent=UA["User-Agent"])
                page = ctx.new_page()
                try:
                    page.goto(url, wait_until="domcontentloaded", timeout=30_000)
                    page.wait_for_selector(".job_seen_beacon", timeout=15_000)
                    got = extract_jobs(page.content())
                except Exception as e:
                    print(f"[{n}/{total}] {label} try{attempt}: {type(e).__name__}")
                finally:
                    ctx.close()
                if got:
                    break
                time.sleep(6 if attempt == 1 else 12)
            print(f"[{n}/{total}] {label}: {len(got)}")
            for j in got:
                if j["jk"] and j["jk"] not in out:
                    j["query"] = label
                    out[j["jk"]] = j
            jobs = list(out.values())
            args.out.write_text(json.dumps(jobs, ensure_ascii=False, indent=2), encoding="utf-8")
            csv_path = args.out.with_suffix(".csv")
            fields = ["jk", "title", "company", "location", "salary", "kind", "query", "url"]
            with csv_path.open("w", newline="", encoding="utf-8") as f:
                w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
                w.writeheader()
                w.writerows(jobs)
            time.sleep(4)
        browser.close()
    jobs = list(out.values())
    args.out.write_text(json.dumps(jobs, ensure_ascii=False, indent=2), encoding="utf-8")
    csv_path = args.out.with_suffix(".csv")
    fields = ["jk", "title", "company", "location", "salary", "kind", "query", "url"]
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        w.writerows(jobs)
    print(f"saved {len(jobs)} jobs to {args.out} and {csv_path}")


if __name__ == "__main__":
    main()
