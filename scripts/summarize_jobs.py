#!/usr/bin/env python3
"""Digest jobs_all.json for the life game: pay stats, title families, companies."""
from __future__ import annotations

import json
import re
import statistics
from collections import Counter
from pathlib import Path

J = json.loads(Path("jobs_all.json").read_text(encoding="utf-8"))

FAMILY = [
    (r"barista|coffee|starbucks", "Coffee/food service"),
    (r"cashier|checker", "Cashier"),
    (r"cook|dishwasher|kitchen|food prep|salad", "Kitchen"),
    (r"server|waiter|bar|host|busser", "Restaurant floor"),
    (r"baker|pastry", "Bakery"),
    (r"caregiver|home care|home health|hha|aid|direct support", "Caregiving"),
    (r"nanny|babysitt|child|infant|preschool|kids|teacher|tutor|assistant.*school|school.*assist", "Childcare/education"),
    (r"receptionist|front desk|office assistant|data entry|admin|clerk", "Admin/front desk"),
    (r"driver|deliver|courier|shuttle|bus", "Driving"),
    (r"warehouse|picker|packer|stocker|stock|merchandis|inventory|package.*handler|loader", "Warehouse/stock"),
    (r"clean|housekeep|janitor|custodian", "Cleaning"),
    (r"security|guard|patrol", "Security"),
    (r"retail|sales associate|customer service|store|boutique", "Retail/CS"),
    (r"nurse|cna|medic|dental|vet|pharm|therap|counsel|psy", "Health care"),
    (r"maintenance|technician|landscap|grounds|yard|labor|general", "Other labor/maintenance"),
]


def family(t: str) -> str:
    t = t.lower()
    for rx, fam in FAMILY:
        if re.search(rx, t):
            return fam
    return "Other"


def hourly(s: str) -> tuple[float, float] | None:
    if not s:
        return None
    m = re.search(r"\$([\d,]+(?:\.\d+)?)\s*[-–]\s*\$([\d,]+(?:\.\d+)?)", s)
    one = re.search(r"\$([\d,]+(?:\.\d+)?)", s)
    if "an hour" in s or "per hour" in s.lower():
        if m:
            return float(m.group(1).replace(",", "")), min(float(m.group(2).replace(",", "")), float(m.group(1).replace(",", "")) * 6)
        if one:
            v = float(one.group(1).replace(",", ""))
            return (v, v) if v < 80 else None
    return None


rows = [{"title": j["title"], "company": j.get("company", ""), "salary": j["salary"],
         "kind": j.get("kind", ""), "lo": 0.0, "hi": 0.0, "fam": family(j["title"])} for j in J]
for r in rows:
    h = hourly(r["salary"])
    if h:
        r["lo"], r["hi"] = h

paid = [r for r in rows if r["hi"]]
fams = Counter(r["fam"] for r in rows)
kind = Counter(("marked part-time" if r["kind"] else "not marked") for r in rows)
medlo = statistics.median([r["lo"] for r in paid]) if paid else 0

print(f"{len(rows)} jobs, {len(paid)} with hourly pay")
print(f"median low-end: ${medlo:.2f}/hr")
print(f"10-50-90 low-end: {statistics.quantiles([r['lo'] for r in paid], n=10)[0]:.2f} / {medlo:.2f} / {statistics.quantiles([r['lo'] for r in paid], n=10)[8]:.2f}" if len(paid) >= 10 else "")
print("\nFamilies:")
for f, n in fams.most_common():
    fp = [r for r in paid if r["fam"] == f]
    print(f"  {n:4} {f}" + (f" - ${statistics.median([x['lo'] for x in fp]):.2f}/hr median" if fp else ""))
print(f"\nMarked schedules: {dict(kind)}")
