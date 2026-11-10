#!/usr/bin/env python3
"""Extra Bellevue-area job sources beyond Indeed: NEOGOV (City of Bellevue),
Craigslist Eastside. Merges into jobs_all.json."""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

HERE = Path("jobs_all.json")
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")


def load() -> dict:
    if HERE.exists():
        return {j.get("id", i): j for i, j in enumerate(json.loads(HERE.read_text(encoding="utf-8")))}
    return {}


def save(jobs: dict) -> None:
    jobs = {k: v for k, v in jobs.items() if not (isinstance(k, str) and k.startswith("__"))}
    HERE.write_text(json.dumps(list(jobs.values()), ensure_ascii=False, indent=2))
    print(f"total {len(jobs)} saved to {HERE}")


def neogov(jobs: dict, page) -> int:
    url = "https://www.governmentjobs.com/careers/bellevuewa/display=list"
    page.goto(url, wait_until="domcontentloaded", timeout=30_000)
    page.wait_for_timeout(4000)
    soup = BeautifulSoup(page.content(), "html.parser")
    n = 0
    for row in soup.select(".jobPosting, [data-testid='job-item'], .listing-details"):
        a = row.select_one("a[href*='classSpecId'], a[href*='jobs']")
        t = row.select_one(".jobTitle, h3, h2")
        loc = row.select_one(".jobLocation")
        if not (a and t):
            continue
        href = a["href"]
        if not href.startswith("http"):
            href = "https://www.governmentjobs.com" + href
        jobs[f"neogov:{hash(href) % 10**9}"] = {
            "id": f"neogov:{hash(href) % 10**9}", "jk": "",
            "title": t.get_text(" ", strip=True),
            "company": "City of Bellevue",
            "location": loc.get_text(" ", strip=True) if loc else "Bellevue, WA",
            "salary": "", "kind": "government", "query": "neogov", "url": href,
        }
        n += 1
    return n


def craigslist(jobs: dict, page) -> int:
    n = 0
    for cat in ("jjj", ):  # jobs
        for q in ("bellevue", "kirkland", "eastside", "redmond"):
            url = f"https://seattle.craigslist.org/search/{cat}?query={q}"
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=25_000)
                page.wait_for_timeout(3000)
            except Exception as e:
                print(f"[cl:{q}] {type(e).__name__}")
                continue
            soup = BeautifulSoup(page.content(), "html.parser")
            for li in soup.select("li.cl-search-result, li.static-result"):
                a = li.select_one("a.titlestring, a.cl-app-anchor")
                if not a:
                    continue
                href = a.get("href", "")
                if not href.startswith("http"):
                    href = "https://seattle.craigslist.org" + href
                jobs[f"cl:{href[-12:]}"] = {
                    "id": f"cl:{href[-12:]}", "jk": "",
                    "title": a.get_text(" ", strip=True),
                    "company": "", "location": "Eastside, WA",
                    "salary": (li.select_one(".result-meta") or li).get_text(" ", strip=True)[:80],
                    "kind": "classified", "query": f"cl {q}", "url": href,
                }
                n += 1
            time.sleep(1.5)
    return n


def main() -> None:
    jobs = load()
    base = len(jobs)
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        page = browser.new_page(user_agent=UA)
        for fn in (neogov, craigslist):
            try:
                added = fn(jobs, page)
            except Exception as e:
                added, err = 0, e
                print(f"{fn.__name__}: {type(e).__name__} {err}")
            print(f"{fn.__name__}: +{added}")
        browser.close()
    print(f"+{len(jobs) - base} new")
    save(jobs)


if __name__ == "__main__":
    main()
