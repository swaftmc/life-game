/*
  Indeed job scraper.
  Usage:
    npm i -D playwright && npx playwright install chromium
    node scripts/scrape-indeed.mjs [url]
  Writes jobs.json next to the script.
*/
import { chromium } from 'playwright'
import fs from 'node:fs'

const url = process.argv[2] ?? 'https://www.indeed.com/l-Bellevue,-WA-jobs.html?vjk=586e61d0b7662bd4'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'domcontentloaded' })
await page.waitForSelector('[data-jk], .jobTitle, a[data-jk]', { timeout: 15000 }).catch(()=>{})

const jobs = await page.$$eval('a[data-jk], [data-jk]', nodes => nodes.map(n => ({
  title:   n.querySelector('[class*="jobTitle"], h2')?.innerText?.trim(),
  company: n.querySelector('[class*="companyName"], [data-testid="company-name"]')?.innerText?.trim(),
  location:n.querySelector('[class*="companyLocation"], [data-testid="text-location"]')?.innerText?.trim(),
  link:    n.querySelector('a')?.href || n.closest('a')?.href || ''
})).filter(j => j.title))

fs.writeFileSync('jobs.json', JSON.stringify(jobs, null, 2))
console.log(`Saved ${jobs.length} jobs -> jobs.json`)
await browser.close()
