
import { SCRAPED_JOBS } from './jobs_data.js';
// ENGINE START
const SRC = {
  indeed:{t:'Indeed job postings, Bellevue WA, scraped Nov 2026', u:'https://www.indeed.com/jobs?l=Bellevue%2C+WA'},
  cc:{t:'Communities Count (Public Health – Seattle & King County), 2024', u:'https://www.communitiescount.org/median-household-income'},
  onet:{t:'U.S. Bureau of Labor Statistics wages, Seattle-Tacoma-Bellevue, May 2025 (via O*NET)', u:'https://www.onetonline.org/link/localwages/15-1252.00?st=WA'},
  bls23:{t:'U.S. Bureau of Labor Statistics wages, Seattle-Tacoma-Bellevue, May 2023', u:'https://www.bls.gov/oes/2023/may/oes_42660.htm'},
  gap:{t:'USAFacts, Washington gender pay gap (from BLS)', u:'https://usafacts.org/answers/what-is-the-gender-pay-gap-in-the-us/state/washington-state/'},
  minwage:{t:'WA Dept. of Labor & Industries, 2026 minimum wage', u:'https://lni.wa.gov/news-events/article/25-27/'},
  uw:{t:'University of Washington cost of attendance, 2026–27', u:'https://admit.washington.edu/costs/coa'},
  bc:{t:'Bellevue College cost of attendance, 2025–26', u:'https://www.bellevuecollege.edu/admissions-aid/financial-aid/apply/cost-of-attendance/'},
  wsac:{t:'Washington Student Achievement Council, Washington College Grant', u:'https://wsac.wa.gov/wcg'},
  commonapp:{t:'Common App research brief on first-generation students', u:'https://www.commonapp.org/files/DAR/Common-App-Brief-First-Generation-Part-4.pdf'},
  pew:{t:'Pew Research data on degree completion by parent education (via Maryville University)', u:'https://online.maryville.edu/?p=56034'},
  childcare:{t:'Child Care Aware of Washington, King County 2024', u:'https://childcareawarewa.org/wp-content/uploads/2025/06/King-County-2024.pdf'},
  metro:{t:'King County Metro fare changes, Sept. 2025', u:'https://kingcountymetro.blog/2025/07/28/king-county-metro-water-taxi-and-seattle-streetcar-adult-fares-change-sept-1-2025/'},
  rent2011:{t:'KNKX, "Undercover sting finds illegal housing discrimination in Seattle," 2011', u:'https://www.knkx.org/law/2011-10-21/undercover-sting-finds-illegal-housing-discrimination-in-seattle'},
  rent2015:{t:'Seattle Office for Civil Rights testing results, 2015 (via The Habitat Group)', u:'https://www.thehabitatgroup.com/articles/6858'},
  esd:{t:'WA Employment Security Department, 2026 benefit amounts', u:'https://esd.wa.gov/node/1254'},
  axios:{t:'Axios Seattle, January 2026 tech layoffs', u:'https://www.axios.com/local/seattle/2026/01/30/seattle-january-2026-tech-layoffs-terminations-amazon-meta-expedia-zillow'},
  kiro:{t:'KIRO 7, Bellevue School District budget cuts, Sept. 2025', u:'https://www.kiro7.com/news/local/bellevue-heads-back-school-amid-major-budget-concerns-cuts/OS7QBCV5I5C4VEJYHCN3JM5OSY/'},
  sick:{t:'WA Dept. of Labor & Industries, Paid Sick Leave', u:'https://www.lni.wa.gov/workers-rights/leave/paid-sick-leave/'},
  redfinBv:{t:'Redfin, Bellevue housing market, Sept. 2026', u:'https://www.redfin.com/city/1387/WA/Bellevue/page-3'},
  redfinCondo:{t:'Redfin, Bellevue condos, Oct. 2026', u:'https://www.redfin.com/city/1387/WA/Bellevue/condos/page-3'},
  redfinKent:{t:'Redfin, Kent housing market, Sept. 2026', u:'https://www.redfin.com/city/9016/WA/Kent/housing-market'},
  rate:{t:'Freddie Mac weekly mortgage rate, Oct. 22, 2026 (via Mortgage News Daily)', u:'https://www.mortgagenewsdaily.com/mortgage-rates/freddie-mac'},
  ptax:{t:'Ownwell, Bellevue property tax rates', u:'https://ownwell.com/trends/washington/king-county/bellevue'},
  ocity:{t:'ocity.org Bellevue cost estimates (Redfin and BLS, 2025)', u:'https://ocity.org/city/bellevue-wa'},
  kc:{t:'U.S. Census QuickFacts, King County', u:'https://www.census.gov/quickfacts/fact/table/kingcountywashington/INC110223'},
  rentBv:{t:'Rentometer, Bellevue rents by bedroom, Oct. 2026', u:'https://www.rentometer.com/average-rent-in/wa/bellevue-wa'},
  rentKent:{t:'Rentometer, Kent rents by bedroom, Nov. 2025', u:'https://assets.rentometer.com/average-rent-in/wa/kent-wa'},
  blsce:{t:'U.S. Bureau of Labor Statistics, Seattle-area consumer spending, 2023–24', u:'https://www.bls.gov/regions/west/news-release/consumerexpenditures_seattle.htm'},
  aaa:{t:'AAA, Your Driving Costs 2025', u:'https://newsroom.aaa.com/2025/09/aaa-new-vehicle-costs-drop-to-11577/'},
  pwc:{t:'Bloomberg Law, Big Four accounting layoffs, 2025', u:'https://news.bloomberglaw.com/financial-accounting/pwc-layoffs-signal-uncertainty-as-firms-take-stock-of-economy'},
  pfml:{t:'WA Paid Family and Medical Leave, 2026 benefits', u:'https://paidleave.wa.gov/app/uploads/2025/12/Paycheck-insert-2026-1.pdf'},
  oop:{t:'Keenan, 2026 out-of-pocket limits for health plans', u:'https://keenan.com/Knowledge-Center/News-and-Insights/Blogs/Maximum-Out-of-Pocket-Limits-Released-for-2026'},
  funeral:{t:'Black Enterprise, citing National Funeral Directors Association median costs', u:'https://www.blackenterprise.com/the-cost-of-dying-is-rising-report/'},
  storm:{t:'City of Bellevue, November 2024 bomb cyclone', u:'https://bellevuewa.gov/city-news/bomb-cyclone-storm'},
  covenants:{t:'UW Civil Rights and Labor History Consortium, Racial Restrictive Covenants', u:'https://depts.washington.edu/civilr/covenants_notorious.shtml'},
  strawberry:{t:'David Neiwert, Strawberry Days (WorldCat)', u:'https://search.worldcat.org/oclc/57429025'},
  rentcap:{t:'WA Dept. of Commerce, 9.683% rent increase cap for 2026', u:'https://www.commerce.wa.gov/commerce-announces-9-683-rent-cap-for-2026/'},
  heat:{t:'Washington State University, the 2021 Pacific Northwest heat dome', u:'https://learning.medicine.wsu.edu/population-and-community-health/planetary-health/heat-impacts/2021-heat-dome'},
  ac:{t:'KUOW, "Seattle is now an air conditioning town" (Census housing survey), 2024', u:'https://kuow.org/stories/seattle-is-now-an-air-conditioning-town'},
  toll:{t:'WSDOT, "Good To Go! warns of scam texts," March 2025', u:'https://wsdot.wa.gov/about/news/2025/good-go-warns-scam-texts'},
  smoke:{t:'IQAir, Northwest wildfire smoke, September 2020', u:'https://www.iqair.com/blog/wildfires/washington-oregon-fires-choke-northwest'},
  overdraft:{t:'Consumer Financial Protection Bureau, overdraft fee research', u:'https://www.consumerfinance.gov/about-us/newsroom/cfpb-finds-small-debit-purchases-lead-to-expensive-overdraft-charges/'},
  fdic:{t:'NerdWallet, average savings account rates (FDIC national average 0.38%), Oct.–Nov. 2026', u:'https://www.nerdwallet.com/banking/learn/average-rates-for-deposit-accounts'},
  cpi:{t:'U.S. Bureau of Labor Statistics, Consumer Price Index, September 2026 (prices up 3.7% in a year)', u:'https://www.bls.gov/news.release/archives/cpi_10142026.htm'},
  vanguard:{t:'Vanguard, How America Saves 2026 (median employer match: 4% of pay)', u:'https://workplace.vanguard.com/content/dam/inst/iig-transformation/has/2026/pdf/HowAmericaSaves2026.pdf'},
  irs401k:{t:'IRS, 2026 401(k) limit ($24,500)', u:'https://www.irs.gov/node/152316'},
  irsearly:{t:'IRS, tax rules on early withdrawals from retirement plans', u:'https://www.irs.gov/newsroom/tax-rules-on-early-withdrawals-from-retirement-plans'},
  usda:{t:'WTOP, USDA grocery cost estimates for a family of four, 2026', u:'https://wtop.com/news/2026/07/how-much-should-i-spend-on-groceries/'},
  irsrefund:{t:'IRS, 2026 filing season statistics (average refund $2,476 through Feb. 13, 2026)', u:'https://www.irs.gov/node/156436'},
  realer:{t:'U.S. Bureau of Labor Statistics, Real Earnings, December 2022 (prices up 6.4%, pay up 4.6%)', u:'https://www.bls.gov/news.release/archives/realer_01122023.pdf'},
  fedcrash:{t:'Federal Reserve History, The Great Recession (stocks fell 57% from Oct. 2007 to March 2009)', u:'https://www.federalreservehistory.org/-/media/Project/FedHistory/FedHistory/Documents/essaysPDFs/The-Great-Recession-_-Federal-Reserve-History.pdf'},
  mckinsey:{t:'McKinsey & LeanIn.Org, Women in the Workplace 2025', u:'https://www.mckinsey.com.br/capabilities/people-and-organizational-performance/our-insights/women-in-the-workplace'},
  divorce:{t:'The Motley Fool, average cost of divorce (Martindale-Nolo Research: $11,300 average)', u:'https://www.fool.com/money/research/average-cost-of-divorce/'},
  adoptcost:{t:'National Adoption Information Clearinghouse, adoption costs (via UNC)', u:'https://hr.unc.edu/wp-content/uploads/sites/222/2023/04/Adoption-Costs-and-Resources.pdf'},
  fosterrate:{t:'WA DCYF, foster care basic maintenance rates', u:'https://dcyf.wa.gov/sites/default/files/pdf/C2_Rate-Adjustments.pdf'},
  fostercare:{t:'Washington rule WAC 110-15-4500, child care for employed foster parents', u:'https://regulations.justia.com/states/washington/title-110/chapter-110-15/part-iv/section-110-15-4500'},
  reunify:{t:'Child Trends, children leaving foster care in 2024 (47% reunified)', u:'https://www.childtrends.org/publications/children-foster-care-reunited-with-families'},
  catcon:{t:'KING 5, catalytic converter thefts and repair costs', u:'https://king5.com/article/news/crime/catalytic-converter-thefts-down-washington-repair-costs-still-high/281-d0ae520d-7f93-4919-8012-84b2988adcff'}
};

const DATA = {
  races:[
    {k:'white', label:'White', bv:44, kcText:'$129,395', w:[18,27,35,20], rentRisk:0},
    {k:'asian', label:'Asian or Asian American', bv:41, kcText:'$157,108', w:[15,22,38,25], rentRisk:.15},
    {k:'latino', label:'Hispanic or Latino', bv:8, kcText:'$91,419', w:[27,33,30,10], rentRisk:.5},
    {k:'black', label:'Black or African American', bv:2, kcText:'$68,221', w:[37,31,25,7], rentRisk:.5},
    {k:'multi', label:'Multiracial', bv:4, kcText:'$109,863', w:[22,30,32,16], rentRisk:.35},
    {k:'napi', label:'Native American or Pacific Islander', bv:1, kcText:'$67,324 to $87,235', w:[33,32,27,8], rentRisk:.5}
  ],
  genders:[{k:'f',label:'Woman',fac:0.90,bv:49},{k:'m',label:'Man',fac:1.08,bv:50},{k:'nb',label:'Non-binary',fac:1.00,bv:1}],
  wealth:[
    {label:'Struggling', range:'under $60,000 a year', home:'Rents a small apartment', save:300, adj:-8, gift:0,
     help:'Your family cannot cover emergencies, and they may need help from you.'},
    {label:'Getting by', range:'$60,000 to $120,000 a year', home:'Rents a 2-bedroom apartment', save:2500, adj:-3, gift:0,
     help:'Your family can lend you a little in an emergency, one time.'},
    {label:'Comfortable', range:'$120,000 to $250,000 a year', home:'Owns a Bellevue house bought years ago', save:12000, adj:2, gift:30000,
     help:'You can live at home for free, your family can cover emergencies, and they can give $30,000 toward a home someday.'},
    {label:'Wealthy', range:'over $250,000 a year', home:'Owns a large Bellevue home', save:60000, adj:5, gift:100000,
     help:'Your family pays for college, covers emergencies, and will give $100,000 toward a home.'}
  ],
  pedu:[
    {label:"Didn't finish high school", odds:40},
    {label:'High school diploma', odds:50},
    {label:'Some college, no degree', odds:45},
    {label:"One parent has a bachelor's degree", odds:65},
    {label:"Both parents have a bachelor's degree or more", odds:75}
  ],
  peduByWealth:[[22,38,22,14,4],[6,27,30,27,10],[1,7,17,35,40],[0,2,6,27,65]],
  uwTuition:13406, bcTuition:4935, homeLiving:10638, awayLiving:23340,
  // UW 2026-27 budget for students: food and housing at home 6,156 (on/off campus 18,858), books 900, transportation 1,074, personal 2,508
  living:{homeFood:6156, awayFood:18858, books:900, transport:1074, personal:2508},
  retire:{limit:24500, match:0.04, rates:[0,0.04,0.10,0.20,0.30]},
  minWageYear:35630,
  // Seattle-Tacoma-Bellevue pay, BLS May 2025 (via O*NET): p10 = lowest-paid 10%, pay = median, p90 = top 10%. up = promotion titles (game estimate).
  jobs:{
    barista:{n:'Barista or counter worker', p10:35580, pay:39150, p90:50980, up:['Shift supervisor','Café manager'], risk:'low', ben:'basic'},
    retail:{n:'Retail salesperson', p10:37000, pay:42080, p90:56960, up:['Lead sales associate','Assistant store manager'], risk:'med', ben:'basic', ai:true},
    cna:{n:'Nursing assistant', p10:46060, pay:51990, p90:67280, up:['Senior nursing assistant','Lead nursing assistant'], risk:'low', ben:'standard', cost:1500, note:'Needs a short state-approved training course (about $1,500).'},
    truck:{n:'Truck driver', p10:55980, pay:71240, p90:93810, up:['Senior truck driver','Lead driver and trainer'], risk:'med', ben:'standard', cost:5000, note:'Needs commercial driver training (about $5,000).'},
    electrician:{n:'Electrician', p10:55690, pay:101780, p90:151290, up:['Electrical foreman','Master electrician'], risk:'med', ben:'strong'},
    carpenter:{n:'Carpenter', p10:58090, pay:76410, p90:123750, up:['Lead carpenter','Construction supervisor'], risk:'med', ben:'standard'},
    ma:{n:'Medical assistant', p10:48120, pay:61500, p90:76360, up:['Lead medical assistant','Clinic supervisor'], risk:'low', ben:'standard'},
    it:{n:'IT support specialist', p10:50010, pay:78330, p90:131570, up:['Senior IT support specialist','IT support manager'], risk:'med', ben:'standard', ai:true},
    teacher:{n:'Middle school teacher', p10:77630, pay:102560, p90:131240, up:['Department head','Lead teacher and mentor'], risk:'med', ben:'strong'},
    acct:{n:'Accountant', p10:73250, pay:99370, p90:160640, up:['Senior accountant','Accounting manager'], risk:'med', ben:'strong', ai:true},
    rn:{n:'Registered nurse', p10:99020, pay:128260, p90:163890, up:['Charge nurse','Nurse manager'], risk:'low', ben:'strong'},
    dev:{n:'Software developer', p10:99190, pay:167280, p90:257960, up:['Senior software developer','Lead software developer'], risk:'high', ben:'strong', ai:true},
     warehouse:{n:'Warehouse associate', p10:40000, pay:49000, p90:58000, up:['Lead warehouse associate','Warehouse supervisor'], risk:'med', ben:'basic', ai:true},
     caregiver:{n:'Home health aide', p10:40000, pay:49000, p90:57000, up:['Senior caregiver','Care coordinator'], risk:'low', ben:'standard'},
     dental:{n:'Dental assistant', p10:42000, pay:50000, p90:62000, up:['Lead dental assistant','Clinic office manager'], risk:'low', ben:'standard', cost:1500, note:'Needs a short training program (about $1,500).'},
     medrecv:{n:'Medical receptionist', p10:38000, pay:43500, p90:52000, up:['Lead receptionist','Clinic coordinator'], risk:'low', ben:'standard'}
  },
  noneJobs:['barista','retail','cna','truck','warehouse','caregiver','dental','medrecv'],
  majors:{
    uw:[
      {k:'cs', n:'Computer Science', mod:-8, jobs:['dev','it'], s:'Very competitive. You must earn a spot in the major after your first year, and the math is hard.'},
      {k:'nursing', n:'Nursing', mod:-5, jobs:['rn','ma'], s:'Competitive admission and tough science classes.'},
      {k:'acct', n:'Business: Accounting', mod:0, jobs:['acct'], s:'Steady work. Nearly every company needs accountants.'},
      {k:'edu', n:'Education', mod:2, jobs:['teacher'], s:'Earns a teaching certificate. Jobs depend on school budgets.'}
    ],
    bc:[
      {k:'ma', n:'Medical Assisting', mod:3, jobs:['ma','cna'], s:'Hands-on program. Clinics and hospitals hire steadily.'},
      {k:'it', n:'IT Networking and Support', mod:0, jobs:['it'], s:'Fix computers and networks for companies.'}
    ]
  },
  risk:{
    low:{label:'Low layoff risk', p:0.04, odds:'about 1 in 25 each chapter'},
    med:{label:'Medium layoff risk', p:0.12, odds:'about 1 in 8 each chapter'},
    high:{label:'High layoff risk', p:0.22, odds:'about 1 in 5 each chapter'}
  },
  ben:{
    strong:{label:'Strong benefits', d:'Cheap health and dental insurance', adult:100, kid:100, dental:80},
    standard:{label:'Standard benefits', d:'Average health and dental insurance', adult:200, kid:175, dental:280},
    basic:{label:'Basic benefits', d:'Expensive insurance with high deductibles', adult:330, kid:220, dental:480}
  },
  characters:[
    {id:'maya', name:'Maya', gender:0, job:'dev', vibe:'Quiet, funny, always has a book.'},
    {id:'jordan', name:'Jordan', gender:1, job:'acct', vibe:'Organized, serious, likes hiking.'},
    {id:'priya', name:'Priya', gender:0, job:'rn', vibe:'Warm, busy, loves cooking.'},
    {id:'luis', name:'Luis', gender:1, job:'electrician', vibe:'Handy, loud, generous.'},
    {id:'sam', name:'Sam', gender:1, job:'it', vibe:'Nerdy, calm, fixes everything.'},
    {id:'aisha', name:'Aisha', gender:0, job:'teacher', vibe:'Patient, community-minded.'},
    {id:'daniel', name:'Daniel', gender:1, job:'carpenter', vibe:'Outdoorsy, practical.'},
    {id:'grace', name:'Grace', gender:0, job:'ma', vibe:'Gentle, ambitious.'},
    {id:'noah', name:'Noah', gender:1, job:'barista', vibe:'Creative, broke, kind.'},
    {id:'chloe', name:'Chloe', gender:0, job:'retail', vibe:'Social, stylish, stressed.'}
  ],
  layoffs:{
    dev:{why:'Your company is cutting thousands of jobs to spend more on AI.', fact:'Seattle-area tech companies announced more than 30,000 job cuts in 2025.', src:'axios', sev:2, fall:'it'},
    it:{why:'Your company replaced most of its help desk with an AI support tool and an outside contractor.', sev:1, fall:'retail'},
    acct:{why:'Your firm is using AI software for routine tax and audit work and needs fewer accountants.', fact:'In May 2025, PwC cut about 1,500 U.S. jobs, mostly in tax and audit. A recruiter told Bloomberg Law that firms need fewer staff because they can automate more.', src:'pwc', sev:1, fall:'retail'},
    teacher:{why:'The school district has a budget shortfall, and newer teachers are cut first.', fact:'The Bellevue School District cut about 100 positions for the 2025–26 school year.', src:'kiro', sev:0, fall:'retail'},
    retail:{why:'Your store is closing, and the company is shifting to self-checkout and online sales.', fact:'In January 2026, Amazon filed notice of 401 Washington layoffs tied to closing its Go and Fresh stores.', src:'axios', sev:0, fall:'barista'},
    truck:{why:'Shipping has slowed down and your company is cutting routes.', sev:0, fall:'retail'},
    electrician:{why:'Construction projects stalled when loans got more expensive. Your crew is laid off.', sev:0, fall:'retail'},
    carpenter:{why:'Construction projects stalled when loans got more expensive. Your crew is laid off.', sev:0, fall:'retail'},
    other:{why:'Your employer is cutting costs and your position has been eliminated.', sev:0, fall:'retail'}
  },
  childcare:{center:[2375,2053,1745,531], home:[1625,1516,1400,477]},
  homes:{
    condo:{n:'Bellevue condo', price:650000, hoa:450, maxKids:2, src:'redfinCondo', d:'2 bedrooms. Median listing price.'},
    house:{n:'Bellevue house', price:1499286, hoa:0, maxKids:9, src:'redfinBv', d:'Median sale price in Bellevue.'},
    kent:{n:'house in Kent', price:649691, hoa:0, maxKids:9, out:true, src:'redfinKent', d:'Median sale price in Kent. A 40–60 minute commute.'}
  },
  mortgageRate:0.0732, propTax:0.0073, reserveMonths:2,
  pfml:{max:1647, min:100, halfSAWW:915, birthWeeks:16, bondWeeks:12},
  fosterRate:[722,846,860],
  milestones:[22,26,30,35,40,45,55,65,75], endAge:80,
  busPass:108
};

function mulberry(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function hashCode(s){let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function pickW(rng,weights){const tot=weights.reduce((a,b)=>a+b,0);let r=rng()*tot;for(let i=0;i<weights.length;i++){r-=weights[i];if(r<0)return i}return weights.length-1}
function dealIdentity(code, mode){
  const rng = mulberry(hashCode(code+'|'+mode));
  const raceW = mode==='equal' ? DATA.races.map(()=>1) : DATA.races.map(r=>r.bv);
  const race = pickW(rng, raceW);
  const gender = rng()<0.5?0:1;
  const wealth = pickW(rng, DATA.races[race].w);
  const pedu = pickW(rng, DATA.peduByWealth[wealth]);
  return {race, gender, wealth, pedu};
}
// Pay ladder from BLS percentiles: beginners earn what the lowest-paid 10% earn and reach the median after 10 years
// (then +0.5% a year). Each promotion adds half the gap between the median and the top 10%.
function payFor(j, years, level){ const y=years||0; return j.p10 + (j.pay-j.p10)*Math.min(1,y/10) + (y>10 ? j.pay*0.005*Math.min(10,y-10) : 0) + (level||0)*(j.p90-j.pay)/2 }
function salaryFor(j, gender, years, level, mult){ return Math.max(DATA.minWageYear, Math.round(payFor(j,years,level)*(gender==null?1:DATA.genders[gender].fac)*(mult||1))) }
function jobName(){ if(!S||!S.job) return 'student'; const l=S.level||0; return l && S.job.up ? S.job.up[l-1] : S.job.n }
// Washington Paid Family and Medical Leave: 90% of weekly pay up to half the state average weekly wage, plus 50% above that, capped.
function pfmlWeekly(w){ if(!w) return 0; const h=DATA.pfml.halfSAWW; return Math.max(DATA.pfml.min, Math.min(DATA.pfml.max, w<=h ? 0.9*w : 0.9*h + 0.5*(w-h))) }
function leaveLoss(salary, weeks){ const w=salary/52; return Math.round(weeks*Math.max(0, w-pfmlWeekly(w))*0.85) }
// 2026 federal brackets, single filer, simplified. Washington has no state income tax.
function fedTax(gross, kids){
  const taxable = Math.max(0, gross - 16100);
  const br=[[12400,.10],[50400,.12],[105700,.22],[201775,.24],[256225,.32],[640600,.35],[Infinity,.37]];
  let tax=0, prev=0;
  for(const [cap,rate] of br){ if(taxable>prev){ tax += (Math.min(taxable,cap)-prev)*rate } prev=cap }
  return Math.max(0, tax - 2200*kids);
}
function monthlyTakeHome(gross, kids){ if(!gross) return 0; return Math.round((gross - fedTax(gross,kids) - gross*0.0765)/12) }
function uiMonthly(gross){ return Math.round(Math.min(1208, Math.max(383, gross/52*0.5))*52/12) }
function mortgagePay(loan, rate){ const r=rate/12, n=360; return loan*r/(1-Math.pow(1+r,-n)) }
function loanAfterYear(loan, rate, pi){ const r=rate/12, g=Math.pow(1+r,12); return Math.max(0, loan*g - pi*(g-1)/r) }
function careBand(age){ return age<1?0: age<3?1: age<5?2: age<13?3: -1 }
function careCost(ages, type){
  if(type!=='center' && type!=='home') return 0;
  return ages.reduce((s,a)=>{ const b=careBand(a); return s + (b<0?0:DATA.childcare[type][b]) },0);
}
function collegeMoney(path, wealth, liveHome){
  const tuition = path==='uw'?DATA.uwTuition:DATA.bcTuition;
  const living = liveHome ? DATA.homeLiving + (wealth<=1?4800:0) : DATA.awayLiving;
  const total = tuition+living;
  const grant = wealth===0 ? tuition : wealth===1 ? Math.round(tuition*0.5) : 0;
  const family = wealth===2 ? Math.round((total-grant)*0.5) : wealth===3 ? total : 0;
  return {tuition, living, total, grant, family, gap: Math.max(0,total-grant-family)};
}
function completionOdds(path, id, mods){
  let o;
  if(path==='uw') o = DATA.pedu[id.pedu].odds + DATA.wealth[id.wealth].adj;
  else if(path==='bc') o = DATA.pedu[id.pedu].odds - 8 + DATA.wealth[id.wealth].adj;
  else o = 65 + Math.round(DATA.wealth[id.wealth].adj/2);
  o += (mods||0);
  return Math.max(10, Math.min(95, o));
}
function lifeScore(r){
  // r: {cushion (avg leftover / take-home), own, burden, stress, belong, nw}
  const money = Math.max(0, Math.min(100, 45 + r.cushion*180 + (r.nw>0?Math.min(25, r.nw/40000):Math.max(-25, r.nw/20000))));
  const housing = r.own ? 100 : r.burden<=0.30 ? 85 : r.burden>=0.60 ? 0 : Math.round((0.60-r.burden)/0.30*85);
  const calm = 100 - r.stress;
  const total = Math.round(money*0.35 + housing*0.25 + calm*0.20 + r.belong*0.20);
  return {money:Math.round(money), housing, calm:Math.round(calm), belong:Math.round(r.belong), total, tier: total>=65?0: total>=45?1:2};
}
// ENGINE END



const $ = s=>document.querySelector(s);
const app = $('#app');
const fmt = n => (n<0?'−$':'$') + Math.abs(Math.round(n)).toLocaleString('en-US');
const money = n => n<0 ? `<span class="c neg">${fmt(n)}</span>` : n>0 ? `<span class="c pos">+${fmt(n)}</span>` : `<span class="c">$0</span>`;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const an = s => /^[AEIOUaeiou]/.test(s)?'an':'a';
let S;
let settings = {mode:'bellevue', gentle:false};
try{ const m=localStorage.getItem('bll-mode'); if(m) settings.mode=m; settings.gentle = localStorage.getItem('bll-gentle')==='1' }catch(e){}

function src(k){ const s=SRC[k]; return s?`<a class="src" href="${s.u}" target="_blank" rel="noopener">Source: ${s.t}</a>`:'' }
function newCode(){const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='';for(let i=0;i<5;i++)s+=a[Math.floor(Math.random()*a.length)];return s}
const TAGS={race:'Race',gender:'Gender',wealth:'Family wealth',pedu:'Parent education',luck:'Your choices and luck'};
function chip(t){return t?`<span class="chip ${t}">${TAGS[t]}</span>`:''}
function riskChip(r){ return `<span class="chip risk-${r}">${DATA.risk[r].label}</span>` }
function aiChip(j){ return j.ai?`<span class="chip risk-high">AI risk rising</span>`:'' }
function layoffP(){ const j=S.job; return Math.min(0.6, DATA.risk[j.risk].p * (j.ai ? 1+0.25*Math.max(0,S.chNum-1) : 1)) }
function benChip(b){ return `<span class="chip ben-${b}">${DATA.ben[b].label}</span>` }
function note(tag, text){ S.log.push({tag, text}) }
function event(text){ S.events.push({age:S.age, text}) }
function adj(d){ if(!d) return; if(d.money) S.bank+=d.money; if(d.stress) S.stress=clamp(S.stress+d.stress,0,100); if(d.belong) S.belong=clamp(S.belong+d.belong,0,100); }
function kidAges(age){ return S.kids.map(b=>age-b).filter(a=>a>=0) }
function fosterAges(age){ return (S.foster||[]).map(f=>age-f.born).filter(a=>a>=0 && a<18) }
function allKidAges(age){ return [...kidAges(age), ...fosterAges(age)] }
function fosterPay(age){ return fosterAges(age).reduce((t,a)=>t+DATA.fosterRate[a<6?0:a<12?1:2],0) }
function jobOf(k){ return {...DATA.jobs[k], key:k} }
function netWorth(){ return S.bank - S.debt + (S.retire||0) + (S.home ? S.home.value - S.home.loan : 0) }
// Retirement: you put in a share of your CURRENT pay and your employer matches it, so contributions rise with raises.
function retireOffered(){ return S.job && !S.retired && S.job.ben!=='basic' && !S.unemployed && !(S.school&&S.school.mode==='full') }
function retireWorking(){ return !!S.retirePct && retireOffered() }
// For a contribution rate: what you put in, what your employer adds (up to 4% of pay), and how much take-home pay drops (it goes in before income tax).
function retireNums(pct){ const g=mySalary(), k=kidAges(S.age).filter(a=>a<17).length;
  const you=Math.min(DATA.retire.limit, g*pct), match=g*Math.min(pct,DATA.retire.match);
  const cost=you - (fedTax(g,k)-fedTax(g-you,k));
  return {you:Math.round(you), match:Math.round(match), cost:Math.round(cost/12)} }
function retireTakeHomeCost(){ return retireWorking() ? retireNums(S.retirePct).cost : 0 }
function retireYearly(){ if(!retireWorking()) return 0; const n=retireNums(S.retirePct); return n.you+n.match }
// Cashing out early: income tax on the extra income plus the IRS 10% early-withdrawal tax.
function cashOutNums(amt){ const g=mySalary(), k=kidAges(S.age).filter(a=>a<17).length; const tax=Math.round(fedTax(g+amt,k)-fedTax(g,k)), pen=Math.round(amt*0.10); return {amt:Math.round(amt), tax, pen, net:Math.round(amt-tax-pen)} }
function grossFor(net){ let g=net/0.75; for(let i=0;i<8;i++){ const n=cashOutNums(g).net; g += (net-n) } return Math.min(S.retire, Math.ceil(g/10)*10) }
function cashOutScene(back){
  const opts=[];
  if(S.bank<0) opts.push(['debt',`Pay off your credit card (${fmt(cardDebt())})`, grossFor(cardDebt()),'bank']);
  if(S.debt>0) opts.push(['loans',`Pay off your student loans (${fmt(S.debt)})`, grossFor(S.debt),'loans']);
  if(S.debt>8000) opts.push(['loan5','Put $5,000 toward your student loans', grossFor(5000),'loans']);
  if(S.retire>5000) opts.push(['5k','Take out $5,000 as cash',5000,'bank']);
  if(S.retire>4000) opts.push(['half','Take out half as cash',Math.round(S.retire/2),'bank']);
  opts.push(['all','Take out all of it as cash',Math.round(S.retire),'bank']);
  const rows=opts.map(([k,t,a,to])=>{ const n=cashOutNums(a); return choiceBtn(k,t,`You take out ${fmt(n.amt)}. You pay ${fmt(n.tax)} in income tax and a ${fmt(n.pen)} early-withdrawal penalty, so ${fmt(n.net)} ${to==='loans'?'goes to your student loans':'goes to your bank account'}.${n.amt>=S.retire-1?' (That is all you have.)':''}`,`+${fmt(n.net)}`) }).join('');
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Cash out retirement money</span>
  <h2>You have ${fmt(S.retire)} in retirement savings.</h2>
  <p>You can take money out early in an emergency, but it costs a lot. The government charges an extra 10% tax if you take it before about age 60, and the money counts as income, so you pay income tax on it too. Money you take out also stops growing. (In real life, many plans only allow this for a hardship, and some let you borrow from yourself instead.)</p>${src('irsearly')}
  <div class="choices">${rows}${choiceBtn('back','Never mind','Leave it invested.','')}</div></section>`);
  bindChoices(k=>{ if(k==='back'){ back(); return }
    const op=opts.find(o=>o[0]===k), n=cashOutNums(op[2]);
    S.retire=Math.max(0,S.retire-n.amt); S.flags.cashOuts=(S.flags.cashOuts||0)+1;
    if(op[3]==='loans'){ S.debt=Math.max(0,S.debt-n.net); if(S.debt<50){ S.bank-=S.debt; S.debt=0; S.loanPay=0 } }
    else S.bank+=n.net;
    event(`Cashed out ${fmt(n.amt)} of retirement savings`);
    note('luck', `At ${S.age} you cashed out ${fmt(n.amt)} of retirement savings and lost ${fmt(n.tax+n.pen)} to taxes and penalties.`);
    interlude(`Age ${S.age} · Cash out retirement money`, `<h2>You got ${fmt(n.net)}.</h2><div class="result"><p>${fmt(n.tax+n.pen)} went to taxes and the penalty. You have ${fmt(S.retire)} left in retirement savings.</p></div>`, back); });
}
function cashOutOffer(need){ return (S.retire||0)>=500 && need ? `<div class="callout" style="border-color:var(--bad)"><p><b>Short on money?</b> You have ${fmt(S.retire)} in retirement savings. You can cash some out, but you pay a penalty and taxes.</p><div class="row"><button class="btn ghost" id="cashout">Cash out retirement money</button></div></div>` : '' }
function stopRetire(why){ if(!S.retirePct) return; S.retirePct=0; if(why) note('luck', `At ${S.age} ${why}, so your retirement savings stopped. The ${fmt(S.retire)} already saved stays yours.`) }

function hud(){
  if(!S || !S.id){ $('#hud').hidden=true; return }
  $('#hud').hidden=false;
  $('#hudIn').innerHTML = `
    <div class="meter"><span class="eyebrow">Age</span><b>${S.age} <span aria-hidden="true">${STAGES[stageIdx(S.age)].e}</span></b></div>
    <div class="meter"><span class="eyebrow">Savings</span><b>${fmt(Math.max(0,S.bank))}</b></div>
    <div class="meter"><span class="eyebrow">Debt</span><b style="color:${cardDebt()+S.debt>0?'var(--bad)':'var(--ink)'}">${fmt(-(cardDebt()+S.debt))}</b>${cardDebt()+S.debt>0?`<small>Card ${fmt(cardDebt())} · Loans ${fmt(S.debt)}</small>`:''}</div>
    <div class="meter"><span class="eyebrow">Retirement</span><b>${fmt(S.retire||0)}</b>${S.retirePct?`<small>Saving ${Math.round(S.retirePct*100)}% of pay</small>`:''}</div>
    <div class="meter"><span class="eyebrow">Stress ${S.stress} (low is good)</span><div class="bar"><i style="width:${S.stress}%;background:${S.stress>66?'var(--bad)':S.stress>40?'var(--warn)':'var(--good)'}"></i></div></div>
    <div class="meter"><span class="eyebrow">Belonging ${S.belong} (high is good)</span><div class="bar"><i style="width:${S.belong}%;background:var(--plum)"></i></div></div>
    <div class="idline">Your card: ${DATA.races[S.id.race].label} · ${DATA.genders[S.id.gender].label} · ${DATA.wealth[S.id.wealth].label} family · Parents: ${DATA.pedu[S.id.pedu].label.toLowerCase()}</div>`;
}
function cardDebt(){ return Math.max(0,-S.bank) }
function show(html){ app.innerHTML = html; hud(); window.scrollTo({top:0,behavior:'instant'}) }
function choiceBtn(k,t,s,c,dis){return `<button class="choice" data-k="${k}" ${dis?'disabled':''}><span class="t">${t}</span><span class="c">${c||''}</span><span class="s">${s||''}</span></button>`}
function bindChoices(fn){ document.querySelectorAll('.choice[data-k]').forEach(b=>b.onclick=()=>fn(b.dataset.k)) }
function interlude(eyebrow, html, next, label){
  show(`<section class="scene"><span class="eyebrow">${eyebrow}</span>${html}<div class="row"><button class="btn" id="n">${label||'Continue'}</button></div></section>`);
  $('#n').onclick=next;
}

function mapScrapedJob(j){
  const t=(j.t||'').toLowerCase();
  if(/develop|software|engineer/.test(t)) return 'dev';
  if(/data scientist|machine learning/.test(t)) return 'dev';
  if(/\bit\b|network|support specialist|help desk/.test(t)) return 'it';
  if(/registered nurse|\brn\b/.test(t)) return 'rn';
  if(/nursing assistant|cna/.test(t)) return 'cna';
  if(/medical assistant/.test(t)) return 'ma';
  if(/teacher|tutor|instructor/.test(t)) return 'teacher';
  if(/account/.test(t)) return 'acct';
  if(/electrician/.test(t)) return 'electrician';
  if(/carpenter|construction/.test(t)) return 'carpenter';
  if(/truck|cdl|commercial driver/.test(t)) return 'truck';
  if(/dental/.test(t)) return 'dental';
  if(/warehouse|forklift/.test(t)) return 'warehouse';
  if(/caregiver|home health|home care/.test(t)) return 'caregiver';
  if(/medical reception|front desk|receptionist/.test(t)) return 'medrecv';
  if(/barista|coffee/.test(t)) return 'barista';
  if(/cashier/.test(t)) return 'retail';
  if(/retail|sales associate|store/.test(t)) return 'retail';
  return 'retail';
}
function applyScrapedJob(j){
  const key = mapScrapedJob(j);
  const old = S.job;
  takeJob(key);
  note('luck', `At ${S.age} you took a job as ${j.t} at ${j.c}. (Mapped to ${S.job.n.toLowerCase()} pay.)`);
  event(`Took a job: ${j.t}`);
  relationshipDecision();
}
/* ================= JOB BROWSER ================= */
function jbEsc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;') }
function jobBrowser(){
  const list = SCRAPED_JOBS || [];
  show(`<section class="scene"><span class="eyebrow">Job browser · ${list.length} real Bellevue postings</span>
    <h2>Browse real jobs</h2>
    <p>Real postings scraped from Indeed for Bellevue, WA. Search by title, company, or location. (Opens the original posting in a new tab.) ${src('indeed')}</p>
    <div class="row"><input id="jbq" type="search" placeholder="Search title, company, location…" style="flex:1;min-width:0;padding:8px 10px;border:1px solid var(--line);border-radius:8px;font:inherit"></div>
    <div id="jblist" style="max-height:58vh;overflow:auto;margin-top:12px"></div>
    <div class="row"><button class="btn ghost" id="jbback">Back</button></div>
  </section>`);
  const render = (q='') => {
    const ql = q.toLowerCase().trim();
    const rows = list.filter(j => !ql || ((j.t||'')+' '+(j.c||'')+' '+(j.l||'')).toLowerCase().includes(ql)).slice(0,100);
    const el = document.getElementById('jblist');
    if(!el) return;
    const canApply = !!S;
    el.innerHTML = rows.length ? rows.map(j=>`<div class="panel" style="margin:6px 0;padding:10px"><b>${jbEsc(j.t)}</b> · ${jbEsc(j.c)}<br><small style="color:var(--ink)">${jbEsc(j.l)} · ${jbEsc(j.s||'pay not listed')}</small><br>${canApply?`<button class="btn ghost" data-apply="${jbEsc(j.u)}" style="margin-top:6px">Apply</button> `:''}<a href="${jbEsc(j.u)}" target="_blank" rel="noopener noreferrer">View posting →</a></div>`).join('') : '<p>No matches.</p>';
    if(canApply) el.querySelectorAll('[data-apply]').forEach(b=>b.onclick=()=>applyScrapedJob(list.find(x=>x.u===b.dataset.apply)));
  };
  render('');
  const q = document.getElementById('jbq'); if(q) q.oninput = e => render(e.target.value);
  const b = document.getElementById('jbback'); if(b) b.onclick = title;
}

/* ================= TITLE ================= */
function title(){
  S=null; setStage(null);
  show(`<section class="hero">
    <div class="deck" aria-hidden="true"><div class="mini" style="--r:-8deg">?</div><div class="mini" style="--r:-2deg">?</div><div class="mini" style="--r:5deg">?</div><div class="mini" style="--r:11deg">?</div></div>
    <span class="eyebrow">A life simulation · Bellevue, Washington · ages 18 to 80</span>
    <h1>Bellevue Life Lottery</h1>
    <p>Bellevue is known for good schools, parks, safe streets, and big tech jobs. But is it livable for everyone? You won't choose who you are. You'll be dealt a life: your race, your gender, how much money your family has, and how far your parents went in school.</p>
    <p>Then you live from age 18 to 80, about when your own kids could be in middle school. Every few years you make big decisions (school, jobs, a partner, kids, where to live) and play through one month of real life. Then the game jumps ahead to the next chapter.</p>
    <div class="row"><button class="btn" id="go">Deal my life</button></div>
  </section>
  <section class="panel stack" style="margin-top:20px">
    <h3>How to read your meters</h3>
    <div class="legend">
      <div><b>Savings</b><span>Cash in the bank. Each month, whatever is left after bills goes here.</span></div>
      <div><b>Debt</b><span>Money you owe. If your savings run out, bills go on a credit card, and card debt grows 18% a year. Student loans count here too.</span></div>
      <div><b>Retirement</b><span>Money invested for when you're older. Many jobs add money to it for free. In an emergency you can cash it out early, but you pay a penalty and taxes.</span></div>
      <div><b>Stress</b><span>0 to 100. <b>Lower is better.</b> Stress goes up with tight budgets, crowded or far-away housing, long commutes, babies, school on top of work, job loss, and surprise bills. It goes down with free time, rest, and a money cushion.</span></div>
      <div><b>Belonging</b><span>0 to 100. <b>Higher is better.</b> How connected you feel to Bellevue: friends, family, a partner, a stable home, and people who share your culture nearby.</span></div>
      <div><b>Livability score</b><span>At 45 you get a score out of 100. It combines your money (savings and monthly cushion), your housing (do you own, or how much of your pay goes to rent), your stress, and your belonging.</span></div>
    </div>
    <p>All money is in 2026 dollars. Prices and paychecks come from real Bellevue, King County, and Seattle-area data. Look for the "Source" links on each card. Numbers that are game estimates are listed at the end.</p>
  </section>
  <details class="panel" style="margin-top:16px"><summary>Teacher settings</summary>
    <div class="stack" style="margin-top:12px">
      <span class="eyebrow">How cards are dealt</span>
      <label class="opt"><input type="radio" name="mode" value="bellevue" ${settings.mode==='bellevue'?'checked':''}> <span><b>Bellevue's real population.</b> Race is drawn from Bellevue's actual mix (about 44% White, 41% Asian, 8% Hispanic or Latino, 4% multiracial, 2% Black, 1% Native American or Pacific Islander). Some groups may not appear in a class of 30.</span></label>
      <label class="opt"><input type="radio" name="mode" value="equal" ${settings.mode==='equal'?'checked':''}> <span><b>Equal chances.</b> Each of the six groups is equally likely, so the class sees every experience. Family wealth and parent education still follow the real patterns.</span></label>
      <span class="eyebrow">Serious illness and death</span>
      <label class="opt"><input type="checkbox" id="gentle" ${settings.gentle?'checked':''}> <span><b>Gentle mode.</b> Turns off the surprises about cancer, a parent dying, emergency surgery, and a child in the hospital. A grandmother's gift comes while she is alive. Other surprises (layoffs, breakups, storms, car crashes, rent hikes) still happen. Turn this on if a student has a recent loss or illness in the family.</span></label>
      <span class="eyebrow">Replay a dealt life</span>
      <div class="row"><input type="text" id="code" maxlength="5" placeholder="CODE" aria-label="Life code"><span>Type a 5-letter life code to deal the same life again.</span></div>
    </div>
  </details>`);
  document.querySelectorAll('input[name=mode]').forEach(r=>r.onchange=e=>{settings.mode=e.target.value;try{localStorage.setItem('bll-mode',settings.mode)}catch(_){}} );
  $('#gentle').onchange=e=>{settings.gentle=e.target.checked;try{localStorage.setItem('bll-gentle',settings.gentle?'1':'0')}catch(_){}};
  $('#go').onclick=()=>{ const c=($('#code').value||'').toUpperCase().replace(/[^A-Z0-9]/g,''); start(c.length===5?c:newCode()) };
  const _jb=document.getElementById('jb'); if(_jb) _jb.onclick=jobBrowser;
}

/* ================= DEAL ================= */
function start(code){
  const id = dealIdentity(code, settings.mode);
  const race = DATA.races[id.race];
  S = {code, mode:settings.mode, gentle:!!settings.gentle, retire:0, retirePct:0, id, age:15, bank:DATA.wealth[id.wealth].save, stress:20, belong:clamp(Math.round(35+race.bv*0.6),0,100), retired:false, ageRetired:null, sideGig:null, unemployed:true,
       debt:0, loanPay:0, log:[], events:[], flags:{}, cred:[], kids:[], partner:null, partnerId:null, relationships:{}, home:null, housing:null, transport:null, care:null,
        mental:{depression:false, anxiety:false, therapy:false},
        retired:false, ageRetired:null, sideGig:null,
       history:[], chapters:[], years:0, layoffs:0, familySupport:0, rentRaise:0, chNum:0, school:null, unemployed:true, seen:new Set(), bigSeen:new Set(), pending:[], ongoing:[], ffAdj:0};
  setStage(15);
  note('wealth', `You started adult life with ${fmt(S.bank)} in savings because your family is "${DATA.wealth[id.wealth].label}."`);
  note('race', `About ${race.bv}% of Bellevue shares your racial or ethnic background, which shapes how easy it is to find your community here.`);
  reveal();
}
function oddsPanel(){
  const id=S.id, pct=a=>{ const t=a.reduce((x,y)=>x+y,0); return a.map(v=>Math.round(v/t*100)) };
  const block=(title,sub,labels,ps,mine)=>`<div><h4>${title}</h4>${sub?`<p style="margin-bottom:6px">${sub}</p>`:''}<ul>${labels.map((l,i)=>`<li class="${i===mine?'mine':''}"><span>${l}${i===mine?' ← you':''}</span><span class="ob" aria-hidden="true"><i style="width:${ps[i]}%"></i></span><span class="num">${ps[i]}%</span></li>`).join('')}</ul></div>`;
  const raceW = S.mode==='equal' ? DATA.races.map(()=>1) : DATA.races.map(r=>r.bv);
  const r=DATA.races[id.race], w=DATA.wealth[id.wealth];
  return `<details class="panel" open><summary>How the four cards were dealt</summary><div class="odds" style="margin-top:12px">
    <p>These are the chances the computer used. Each card depends on the one before it, the way it does in real families.</p>
    ${block('1. Race / ethnicity', S.mode==='equal'?'Teacher setting: every group has an equal chance.':"Bellevue's real population.", DATA.races.map(x=>x.label), pct(raceW), id.race)}
    ${block('2. Gender','',DATA.genders.map(x=>x.label),pct([49,50,1]),id.gender)}
    ${block('3. Family wealth', `Chances for ${an(r.label)} ${r.label} player, shaped to match King County household income by race (game estimate).`, DATA.wealth.map(x=>`${x.label} (${x.range})`), pct(r.w), id.wealth)}
    ${block('4. Parent education', `Chances for a "${w.label}" family. Families with more money are more likely to have college degrees (game estimate).`, DATA.pedu.map(x=>x.label), pct(DATA.peduByWealth[id.wealth]), id.pedu)}
  </div>${src('cc')}</details>`;
}
function reveal(){
  const id=S.id, r=DATA.races[id.race], g=DATA.genders[id.gender], w=DATA.wealth[id.wealth], p=DATA.pedu[id.pedu];
  show(`<section class="scene">
    <span class="eyebrow">The deal · age 15</span>
    <h2>This is the life you were dealt.</h2>
    <div class="idcard">
      <div class="row" style="justify-content:space-between;position:relative;z-index:1"><span class="eyebrow">Bellevue resident · age 15</span><span class="num">LIFE CODE ${S.code}</span></div>
      <div class="idgrid">
        <div class="slot flip" style="animation-delay:.05s"><div class="k">Race / ethnicity</div><div class="v">${r.label}</div><div class="d">${S.mode==='equal'?`A 1 in 6 chance (teacher setting). About ${r.bv}% of Bellevue residents.`:`A ${r.bv}% chance: about ${r.bv}% of Bellevue residents.`}</div></div>
        <div class="slot flip" style="animation-delay:.35s"><div class="k">Gender</div><div class="v">${g.label}</div><div class="d">A 1 in 2 chance. Affects your future paycheck.</div></div>
        <div class="slot flip" style="animation-delay:.65s"><div class="k">Family wealth</div><div class="v">${w.label}</div><div class="d">A ${Math.round(r.w[id.wealth]/r.w.reduce((a,b)=>a+b,0)*100)}% chance for ${an(r.label)} ${r.label} player. Family income ${w.range}. ${w.home}.</div></div>
        <div class="slot flip" style="animation-delay:.95s"><div class="k">Parent education</div><div class="v">${p.label}</div><div class="d">A ${Math.round(DATA.peduByWealth[id.wealth][id.pedu]/DATA.peduByWealth[id.wealth].reduce((a,b)=>a+b,0)*100)}% chance in a "${w.label}" family. Affects your odds of finishing a degree.</div></div>
      </div>
    </div>
    ${oddsPanel()}
    <div class="callout id"><p><b>Why this card?</b> In King County, the typical household headed by someone who is ${r.label} earns <span class="num">${r.kcText}</span> a year. The game deals family wealth using those patterns, so some cards are more common for some groups. It says nothing about any one family.</p>${src('cc')}</div>
    <div class="callout"><p><b>What your family can do for you:</b> ${w.help}</p></div>
    <p>You can't trade this card in. Write your life code (<b class="num">${S.code}</b>) on your sheet.</p>
    <div class="row"><button class="btn" id="n">I'm 15. What now?</button></div>
  </section>`);
  $('#n').onclick=highSchoolScene;
}

function highSchoolScene(){
  S.age=15; setStage(15);
  show(`<section class="scene"><span class="eyebrow">Age 15 · High school</span>
    <h2>You're 15 and in high school.</h2>
    <p>You live with your family. You can focus on school, or apply early to college. Early admission is harder to get but saves a year.</p>
    <div class="choices">
      ${choiceBtn('finish','Finish high school first','Graduate at 18, then pick your path. The normal route.',`${completionOdds('bc',S.id,0)}% odds`)}
      ${choiceBtn('earlyuw','Apply early to UW','Apply to the University of Washington as a junior. If admitted you start at 18 with a head start; if rejected you finish high school and pick another path.',`${Math.round(completionOdds('uw',S.id,0)*0.8)}% odds`)}
    </div>
  </section>`);
  bindChoices(k=>{
    if(k==='earlyuw'){ const odds=Math.round(completionOdds('uw',S.id,0)*0.8); if(Math.random()*100 >= odds){ interlude('Early admission decision', `<p>UW sent your rejection in April. You finish high school and pick another path.</p><p>${src('uw')}</p>`, ()=>{ S.age=18; setStage(18); pathScene(); }, 'Pick a path'); return } S.flags.earlyAdmit=true; S.age=18; setStage(18); S.path='uw'; S.mods=5; majorScene(); return }
    S.age=18; setStage(18); pathScene();
  });
}

/* ================= AGE 18: PATH ================= */
function collegeBlurb(m,years){ const help=m.grant+m.family;
  return `About ${fmt(m.total)} a year if you live at home: ${fmt(m.tuition)} tuition plus ${fmt(m.living)} for food, books, transportation, and personal costs.${help?` Grants and family pay ${fmt(help)} a year.`:''} ${m.gap?`You cover about ${fmt(m.gap)} a year (${fmt(m.gap*years)} over ${years} years).`:'You pay nothing.'}` }
function pathScene(){
  const id=S.id;
  const uw=collegeMoney('uw',id.wealth,true), bc=collegeMoney('bc',id.wealth,true);
  show(`<section class="scene">
    <span class="eyebrow">Age 18 · Your plan</span>
    <h2>You just graduated from high school. What's your plan?</h2>
    <p>Your odds of finishing are shown. They come from data on how often students finish, depending on their parents' education and family money.</p>${src('commonapp')}
    <div class="choices">
      ${choiceBtn('work','Start working full time now',"Earn money right away. You can only get jobs that don't need a degree, but you can go back to school later.",'Start at 18')}
      ${choiceBtn('trade','Apprenticeship in a building trade','Electrician or carpenter. You are paid while you train for 4 years, so there is no college debt. Finish at 22.',`${completionOdds('trade',id,0)}% odds`)}
      ${choiceBtn('bc','Bellevue College (2 years)',collegeBlurb(bc,2)+' Finish at 20.',`${completionOdds('bc',id,0)}% odds`)}
             ${choiceBtn('uw','University of Washington (4 years)',collegeBlurb(uw,4)+' Finish at 22.',`${completionOdds('uw',id,0)}% odds`)}
${choiceBtn('uwearly','Apply early to UW (you applied as a junior)','You applied to UW as a high school junior. If admitted you start at 18 with a head start; if rejected you finish high school and pick another path. Early applicants are judged on fewer grades, so the odds are lower.',`${Math.round(completionOdds('uw',id,0)*0.8)}% odds`)}
       ${choiceBtn('transfer','Bellevue College, then transfer to UW','Start at Bellevue College for 2 years, then transfer to UW for your last 2. Cheaper and easier to get into, but you still finish at 22.',`${completionOdds('bc',id,0)}% then ${completionOdds('uw',id,0)}% odds`)}
    </div>
    <div class="callout"><p><b>Why does college cost money even if you live at home?</b> Besides tuition, students still pay for food, books, a bus pass, a phone, and clothes. UW estimates about ${fmt(DATA.homeLiving)} a year for these when a student lives with family.${id.wealth<=1?' Your family also needs $400 a month from you toward rent and food.':''}</p>${src('uw')}</div>
  </section>`);
  bindChoices(k=>{ 
    if(k==='uwearly'){ const odds=Math.round(completionOdds('uw',S.id,0)*0.1); if(Math.random()*100 >= odds){ S.stress=clamp(S.stress+25,0,100); interlude('Early admission decision', `<p>UW sent your rejection in April. You finish high school with higher stress (+25 stress). You pick another path.</p>`, pathScene, 'Pick a path'); return } S.path='uw'; S.mods=5; S.flags.earlyAdmit=true; majorScene(); return }
    if(k==='transfer'){ S.path='bc'; S.mods=0; S.flags.transferUW=true; S.stress=clamp(S.stress+15,0,100); majorScene(); return }
    S.path=k; S.mods=0; if(k==='work') firstJob(); else if(k==='trade') tradeScene(); else majorScene(); 
  });
}
function jobLine(k){ const j=DATA.jobs[k]; return `<li><span class="jn">${j.n}</span><span class="num">${fmt(j.pay)} median</span>${riskChip(j.risk)}${aiChip(j)}${benChip(j.ben)}</li>` }
function majorScene(){
  const list = DATA.majors[S.path];
  show(`<section class="scene"><span class="eyebrow">Age 18 · ${S.path==='uw'?'University of Washington':'Bellevue College'}</span>
  <h2>Pick your ${S.path==='uw'?'major':'program'}.</h2>
  <p>This decides which jobs you can get when you finish. Harder programs lower your odds of finishing. Your odds before choosing: <b class="num">${completionOdds(S.path,S.id,0)}%</b>.</p>
  <div class="choices">${list.map(m=>`<button class="choice" data-k="${m.k}"><span class="t">${m.n}</span><span class="c">${m.mod>0?'+':''}${m.mod}% odds</span><span class="s">${m.s}</span><ul class="joblist" aria-label="Jobs this leads to">${m.jobs.map(jobLine).join('')}</ul></button>`).join('')}</div>
  ${src('onet')}</section>`);
  bindChoices(k=>{ S.major=list.find(m=>m.k===k); S.mods=S.major.mod; moneyScene(); });
}
function tradeScene(){
  show(`<section class="scene"><span class="eyebrow">Age 18 · Apprenticeship</span><h2>Which trade?</h2>
  <p>Registered apprentices are paid while they train, so there is no college debt. You still have to finish all 4 years and pass a licensing exam.</p>
  <div class="choices">
   <button class="choice" data-k="electrician"><span class="t">Electrician apprenticeship</span><span class="c"></span><ul class="joblist">${jobLine('electrician')}</ul></button>
   <button class="choice" data-k="carpenter"><span class="t">Carpenter apprenticeship</span><span class="c"></span><ul class="joblist">${jobLine('carpenter')}</ul></button>
  </div>${src('onet')}</section>`);
  bindChoices(k=>{ S.trade=k; S.mods=0; supportScene(); });
}
function moneyScene(){
  const id=S.id;
  if(S.path==='uw'){
    show(`<section class="scene"><span class="eyebrow">Age 18 · Paying for school</span><h2>Where will you live during college?</h2>
    <div class="choices">
      ${choiceBtn('home','Live at home and commute', `No rent${id.wealth<=1?', but your family needs $400 a month toward rent and food':''}. You still pay for food, books, a bus pass, and personal costs.`, fmt(collegeMoney('uw',id.wealth,true).living)+' a year')}
      ${choiceBtn('dorm','Live near campus in Seattle','Rent and food, plus books, transportation, and personal costs.',fmt(collegeMoney('uw',id.wealth,false).living)+' a year')}
    </div>${src('uw')}</section>`);
    bindChoices(k=>{ S.liveHome = k==='home'; payScene(); });
  } else { S.liveHome=true; payScene(); }
}
function payScene(){
  const id=S.id, m=collegeMoney(S.path,id.wealth,S.liveHome), years=S.path==='uw'?4:2;
  if(m.grant>0) note('wealth', `Because your family income is low, the Washington College Grant paid ${fmt(m.grant)} of tuition each year.`);
  if(m.family>0) note('wealth', `Your family paid ${fmt(m.family)} a year toward college.`);
  if(S.liveHome && id.wealth<=1) note('wealth','Living at home during college still cost $400 a month because your family needed help with rent.');
  const rows = `<div class="tbl"><table>
    <tr><td>Tuition and fees</td><td class="r">${fmt(m.tuition)}</td></tr>
    <tr><td>${S.liveHome?'Food at home':'Rent and food in Seattle'}</td><td class="r">${fmt(S.liveHome?DATA.living.homeFood:DATA.living.awayFood)}</td></tr>
    ${S.liveHome&&id.wealth<=1?`<tr><td>Helping your family with rent ($400/mo) ${chip('wealth')}</td><td class="r">${fmt(4800)}</td></tr>`:''}
    <tr><td>Books and supplies</td><td class="r">${fmt(DATA.living.books)}</td></tr>
    <tr><td>Transportation (bus pass, rides)</td><td class="r">${fmt(DATA.living.transport)}</td></tr>
    <tr><td>Personal costs (phone, clothes, haircuts)</td><td class="r">${fmt(DATA.living.personal)}</td></tr>
    <tr><td><b>Total cost for one year</b></td><td class="r"><b>${fmt(m.total)}</b></td></tr>
    <tr><td>Washington College Grant ${chip('wealth')}</td><td class="r">${fmt(-m.grant)}</td></tr>
    <tr><td>Your family pays ${chip('wealth')}</td><td class="r">${fmt(-m.family)}</td></tr>
    <tr class="total"><td>Gap you must cover each year</td><td class="r">${fmt(m.gap)}</td></tr></table></div>
    <p>These are UW's estimates for one school year.${S.path==='bc'?" Bellevue College's own estimate assumes students pay rent, so the game uses UW's numbers for living at home.":''} Over ${years} years the gap adds up to <b class="num">${fmt(m.gap*years)}</b>.</p>${src('wsac')} ${src('uw')}${S.path==='bc'?' '+src('bc'):''}`;
  if(m.gap===0){
    S.yearGap=0;
    interlude('Age 18 · Paying for school', `<h2>School is paid for.</h2>${rows}<p>You can focus on classes.</p>`, supportScene); return;
  }
  show(`<section class="scene"><span class="eyebrow">Age 18 · Paying for school</span><h2>How will you cover the gap?</h2>${rows}
  <p>Students who work long hours during school are less likely to finish.</p>
  <div class="choices">
    ${choiceBtn('loan','Borrow all of it','Take out student loans. You start your career in debt.',`+${fmt(m.gap*years)} debt`)}
    ${choiceBtn('w10','Work 10 hours a week, borrow the rest','About $6,000 a year from a part-time job.','−3% odds')}
    ${choiceBtn('w20','Work 20 hours a week, borrow the rest','About $12,000 a year. Less sleep, less study time.','−8% odds')}
  </div></section>`);
  bindChoices(k=>{
    const earn = k==='w10'?6000:k==='w20'?12000:0;
    S.mods += (k==='w10'?-3:k==='w20'?-8:0);
    S.yearGap = m.gap-earn < 1000 ? 0 : m.gap-earn;
    supportScene();
  });
}
function supportScene(){
  const firstGen = S.id.pedu<=2;
  show(`<section class="scene"><span class="eyebrow">Age 18 · First semester</span><h2>A mentor program has open spots.</h2>
  <p>It meets every week. Students get help with forms, deadlines, and choosing classes${S.path==='trade'?' and the licensing exam':''}. It takes time you could spend working or with friends.</p>
  ${firstGen?`<div class="callout"><p>${chip('pedu')} Your parents didn't go to college, so you may not know the unwritten rules: office hours, which forms are due when, how to drop a class without failing it. This program helps most for students like you.</p></div>`:''}
  <div class="choices">${choiceBtn('join','Join the program','Weekly meetings for the first year.',firstGen?'+7% odds':'+2% odds')}${choiceBtn('skip','Skip it','More free time.','+0% odds')}</div></section>`);
  bindChoices(k=>{ if(k==='join') S.mods+=(firstGen?7:2); rollScene(); });
}

/* ---- the finish roll (higher is better) ---- */
function rollWidget(odds, after){
  const zone = Math.max(20, Math.min(35, Math.round(odds/3)));
  const start = Math.round((100-zone)/2);
  const end = start+zone;
  const html = `<p>Click <b>Stop</b> when the moving bar is inside the green <b>Graduate</b> zone. The zone size reflects your odds.</p>
  <div class="track" aria-hidden="true"><div class="zone-fail" style="width:${start}%"></div><div class="zone-ok" style="width:${zone}%"><span>Graduate</span></div><div class="zone-fail" style="width:${100-start-zone}%"></div><div class="needle" id="needle" style="left:0%"></div></div>
  <div class="row" style="justify-content:space-between"><span class="num">1</span><span class="num">100</span></div>
  <div class="dice" id="dice" aria-live="polite">–</div><div id="out"></div>
  <div class="row"><button class="btn" id="stopBtn">Stop</button></div>`;
  return {html, run(){
    const needle=$('#needle'), dice=$('#dice'), btn=$('#stopBtn');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pos = 0, dir = 1, running = true, raf;
    const step = reduce ? 4 : 2;
    const tick = setInterval(()=>{
      if(!running) return;
      pos += dir*step;
      if(pos>=100){ pos=100; dir=-1; }
      if(pos<=0){ pos=0; dir=1; }
      needle.style.left = `calc(${pos}% - 2px)`;
      dice.textContent = Math.round(pos);
    }, 16);
    btn.onclick = ()=>{
      if(!running) return;
      running=false; clearInterval(tick);
      const ok = pos>=start && pos<=end;
      dice.style.color = ok?'var(--good)':'var(--bad)';
      dice.textContent = ok?'Graduate!':'Missed';
      after(ok);
    };
  }};
}
function rollScene(){
  const path=S.path, odds=completionOdds(path,S.id,S.mods);
  const pe=DATA.pedu[S.id.pedu];
  if(path!=='trade') note('pedu', `Your odds of finishing school started at ${pe.odds-(path==='bc'?8:0)}% because of your parents' education ("${pe.label}"). Students whose parents both have bachelor's degrees start at ${82-(path==='bc'?8:0)}%.`);
  const wadj = path==='trade'?Math.round(DATA.wealth[S.id.wealth].adj/2):DATA.wealth[S.id.wealth].adj;
  note('wealth', `Family money changed your odds of finishing by ${wadj>0?'+':''}${wadj} points. Students without money to fall back on drop out more often after a car repair, a lost job, or a family crisis.`);
  if(S.mods) note('luck', `Your own choices (${S.major?S.major.n+' major, ':''}work hours, mentoring) changed your odds of finishing by ${S.mods>0?'+':''}${S.mods} points.`);
  const w = rollWidget(odds, finishRoll);
  show(`<section class="scene"><span class="eyebrow">Did you finish?</span><h2>Your odds: ${odds}%</h2>${w.html}</section>`);
  w.run();
}
function finishRoll(ok){
  const path=S.path;
  const years = path==='bc'?2:4;
  const attended = ok?years:(path==='bc'?1:2);
  if(path!=='trade') S.debt += (S.yearGap||0)*attended;
  if(S.debt>0 && S.debt<1000) S.debt=0;
  if(S.debt>0) S.loanPay = Math.round(S.debt*0.0111);
  S.age = 18 + attended;
  if(ok){
    S.cred = path==='trade'?[S.trade]:[...S.major.jobs];
    if(path==='trade') S.bank += 8000;
    note('luck', `You rolled high enough and finished ${path==='trade'?'your apprenticeship':path==='bc'?'Bellevue College':'UW'} at age ${S.age}.`);
    event(path==='trade'?`Finished ${S.trade} apprenticeship`:path==='bc'?`Associate degree in ${S.major.n}`:`Bachelor's degree in ${S.major.n}`);
  } else {
    S.cred=[]; if(path!=='trade') S.flags.left18=true;
    note('luck', `You didn't roll high enough to finish, so you left ${path==='trade'?'your apprenticeship':'school'} at age ${S.age}.`);
    event(`Left ${path==='trade'?'apprenticeship':'school'} without finishing`);
  }
  const debtLine = S.debt>0?`You owe <b class="num">${fmt(S.debt)}</b> in student loans. Payments are <b class="num">${fmt(S.loanPay)}</b> a month for 10 years.`:'You have no student debt.';
  const msg = ok
    ? `<div class="result"><h3>You finished!</h3><p>${path==='trade'?'You passed your licensing exam and are a licensed '+S.trade+'.':path==='bc'?'You earned your associate degree from Bellevue College.':'You earned your bachelor\'s degree from UW.'} ${debtLine}</p></div>`
    : `<div class="result"><h3>You didn't finish.</h3><p>After ${attended} year${attended>1?'s':''}, a mix of money, work hours, and family needs pulled you out. ${path==='trade'?'You can go to college later.':'After you pick a job, your first chapter lets you go back and try again.'} ${debtLine}</p></div>`;
  $('#out').innerHTML = msg + `<div class="row" style="margin-top:14px"><button class="btn" id="n">Jump ahead to age ${S.age}</button></div>`;
  $('#n').onclick=firstJob;
}

/* ================= JOBS ================= */
function qualifiedJobs(){ return [...S.cred, ...DATA.noneJobs.filter(k=>!S.cred.includes(k))] }
function jobChoices(keys){
  const g=S.id.gender;
  return keys.map(k=>{ const j=DATA.jobs[k]; const sal=salaryFor(j,g,0);
    return `<button class="choice" data-k="${k}"><span class="t">${j.n}</span><span class="c">${fmt(sal)} a year</span><span class="s">${j.note?j.note+' ':''}Regional median ${fmt(j.pay)}. Top 10% earn ${fmt(j.p90)}.${S.cred.includes(k)?' <b>Uses your training.</b>':''}</span><ul class="joblist"><li>${riskChip(j.risk)}${aiChip(j)}${benChip(j.ben)}</li><li><span>Layoffs: ${DATA.risk[j.risk].odds}${j.ai?', rising as AI takes over more tasks':''}. Benefits: ${DATA.ben[j.ben].d.toLowerCase()}.</span></li></ul></button>` }).join('');
}
function firstJob(){
  const g=S.id.gender, gl=DATA.genders[g];
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Your first full-time job</span><h2>Pick your job.</h2>
  <p>You can only pick jobs you qualify for. Pay shown is what <b>you</b> would earn as a beginner: about what the lowest-paid 10% of Seattle-area workers in that job earn, adjusted for gender. Each year you stay, your pay rises, reaching the regional median after about 10 years. Promotions can push it toward what the top 10% earn.</p>
  <div class="callout id"><p>${chip('gender')} In Washington, women working full time earn roughly 77 to 83 cents for every dollar men earn. This game pays you ${g===0?'90%':'108%'} of the usual pay as a ${gl.label.toLowerCase()}. No job pays below the state minimum wage.</p>${src('gap')}</div>
  <div class="choices">${jobChoices(qualifiedJobs())}</div>${src('onet')}</section>`);
  bindChoices(k=>{ takeJob(k); chapterIntro(); });
}
function takeJob(k){
  if(S.job && S.retirePct) stopRetire('you changed jobs');
  const j=jobOf(k); S.job=j; S.years=0; S.level=0; S.payBump=0; S.unemployed=false;
  if(j.cost){ S.bank-=j.cost }
  const sal=salaryFor(j,S.id.gender,0), fair=salaryFor(j,null,0);
  if(!S.flags.genderNoted){ S.flags.genderNoted=true;
    if(sal!==fair) note('gender', `As a ${DATA.genders[S.id.gender].label.toLowerCase()}, your first job paid ${fmt(sal)} instead of ${fmt(fair)} a year. That ${fmt(Math.abs(sal-fair))} gap grows as your pay grows.`);
    else note('gender', `Your first job paid minimum wage, which is the same for everyone, so your gender didn't change your starting pay.`);
  }
  event(`Started work as ${an(j.n)} ${j.n.toLowerCase()}`);
}
function mySalary(){ if(S.unemployed || S.retired) return 0; if(S.school&&S.school.mode==='full') return 14000; const b=salaryFor(S.job, S.id.gender, S.years, S.level||0, 1+(S.payBump||0)); return S.school&&S.school.mode==='part' ? Math.round(b*0.6) : b }
function partnerSalary(){ return (!S.partner || S.care==='stayhome') ? 0 : salaryFor(DATA.jobs[S.partner.job], null, S.partner.years) }

/* ================= CHAPTERS ================= */
const STAGES=[{e:'🎒',n:'Starting out'},{e:'🌱',n:'Your early twenties'},{e:'🏙️',n:'Your late twenties'},{e:'🏡',n:'Your early thirties'},{e:'🌲',n:'Your late thirties'},{e:'⛰️',n:'Your forties'},{e:'🛤️',n:'Your fifties'},{e:'🌤️',n:'Your sixties'},{e:'🌅',n:'Retirement'}];
function stageIdx(a){ return a<22?0:a<26?1:a<30?2:a<35?3:a<40?4:a<50?5:a<60?6:a<70?7:8 }
function setStage(a){ try{ if(a==null) delete document.documentElement.dataset.ch; else document.documentElement.dataset.ch=String(stageIdx(a)) }catch(e){} }
function lifePath(a){ const stops=DATA.milestones.concat(DATA.endAge); return `<ol class="lifepath" aria-label="Your life path">${stops.map((x,i)=>`<li class="${a>=x?'past':''}${a<stops[i+1]?' now':''}"><span aria-hidden="true">${i<STAGES.length?STAGES[i].e:'🏁'}</span>${x}</li>`).join('')}</ol>` }
function chapterEnd(a){ return DATA.milestones.find(m=>m>a) || DATA.endAge }
function chapterName(a){ return STAGES[stageIdx(a)].n }
function chapterIntro(){
  S.chStart=S.age; S.chEnd=chapterEnd(S.age); S.chNum++;
  const ka=kidAges(S.age); setStage(S.age);
  interlude(`Chapter ${S.chNum} · Ages ${S.chStart} to ${S.chEnd}`,
    `<div class="chband"><span class="che" aria-hidden="true">${STAGES[stageIdx(S.age)].e}</span><div><span class="eyebrow">Chapter ${S.chNum} · Ages ${S.chStart} to ${S.chEnd}</span><h2>${chapterName(S.age)}</h2></div></div>
     ${lifePath(S.age)}
     <p>You are ${S.age}.${S.retired?' You are retired from paid work.':' You work as '+an(jobName())+' '+jobName().toLowerCase()+' earning '+fmt(mySalary())+' a year.'}${S.partner?` You live with your partner, who works as ${an(DATA.jobs[S.partner.job].n)} ${DATA.jobs[S.partner.job].n.toLowerCase()}.`:''}${ka.length?` Your kid${ka.length>1?'s are':' is'} ${ka.join(' and ')}.`:''}</p>
     <p><b>Layoff risk:</b> your job has about a ${Math.round(layoffP()*100)}% chance of a layoff during this chapter${S.job.ai?', and it rises each chapter as AI takes over more of the work':''}. If it happens, a layoff card shows up in your month.</p>
     <p>In this chapter you will:</p>
     <ol class="qs"><li>Make your big decisions for the next ${S.chEnd-S.chStart} years.</li><li>Set up your monthly budget.</li><li>Play through one month of real life.</li><li>Jump ahead to age ${S.chEnd} and see how the years went.</li></ol>`,
    careerDecision, 'Make my decisions');
}

/* --- Promotions --- */
function promoOdds(){ let o=0.45 + 0.08*(S.flags.extraYes||0) - 0.08*(S.flags.extraNo||0) + Math.min(0.15, 0.02*S.years) + (S.flags.course?0.05:0);
  let gap=null; if(!(S.level||0) && S.id.gender===0){ gap = S.id.race===0 ? 0.93 : 0.74; o*=gap }
  return {odds:Math.max(0.1,Math.min(0.85,o)), gap} }
function promoNote(gap){ return gap ? `<div class="callout id"><p>${chip('gender')}${gap<0.9?' '+chip('race'):''} In a 2025 study of U.S. companies, for every 100 men promoted to their first manager job, 93 women were, and 74 women of color. The game lowers your odds for a first promotion to match.</p>${src('mckinsey')}</div>` : '' }
function promoRoll(after){
  const {odds,gap}=promoOdds(), ok=Math.random()<odds, from=jobName();
  if(ok){ S.level=(S.level||0)+1; event(`Promoted to ${jobName().toLowerCase()}`); note('luck', `At ${S.age} you were promoted from ${from.toLowerCase()} to ${jobName().toLowerCase()}.`) }
  else note('luck', `At ${S.age} you went for a promotion but didn't get it.`);
  if(gap && !ok) note('gender', `At ${S.age} you missed out on a first promotion. Women, and especially women of color, are promoted to manager less often than men.`);
  interlude(`Age ${S.age} · Promotion`, ok
    ? `<h2>You got the promotion!</h2><div class="result"><p>You are now ${an(jobName())} <b>${jobName().toLowerCase()}</b>. Your pay jumps to <b class="num">${fmt(mySalary())}</b> a year. More responsibility also means a bit more stress.</p></div>`
    : `<h2>Someone else got it.</h2><div class="result"><p>Your odds were ${Math.round(odds*100)}%. You keep your job and can try again later.</p></div>${promoNote(gap)}`, after);
}
/* --- Decision 1: career --- */
/* --- Decision 0: retirement (65+) --- */
function retirementDecision(){
  if(S.retired) return careerDecision();
  const pension=Math.round(1800), ret=S.retire||0, canLive=ret>0||S.bank>0;
  show(`
    <section class="scene">
      <span class="eyebrow">Age ${S.age} · Decision 0 · Retirement</span>
      <h2>${canLive?'Do you want to retire?':'Retirement'}</h2>
      <p>${canLive?`You can retire now. Social Security would add about ${fmt(pension*12)} a year, plus you have ${fmt(ret)} in retirement savings.`:'You have no retirement savings yet. You can keep working, retire later, or use your other savings to live.'}</p>
      <div class="choices">
        ${choiceBtn('retire','Retire now',`Your pay stops, and you draw from savings. Social Security adds about ${fmt(-pension)} a month in the budget (game estimate).`,ret>0||S.bank<100000?'':'')}
        ${choiceBtn('work','Keep working a few more years','You can retire later, but your retirement money keeps growing.')}
      </div>
    </section>`);
  bindChoices(k=>{
    if(k==='retire'){
      S.retired=true; S.ageRetired=S.age; stopRetire('you retired');
      S.ongoing.push(['Social Security (game estimate)', -Math.round(pension/12*0.75)]);
      event('Retired from work');
      note('luck', `At ${S.age} you retired from work. Social Security adds about ${fmt(-pension)} a month to your household (game estimate).`);
      careerDecision();
    } else careerDecision();
  });
}
function careerDecision(){
  if(S.age>=65 && !S.retired && !S.flags.retiredAsked){ S.flags.retiredAsked=true; retirementDecision(); return }
  if(S.retired){ relationshipDecision(); return }
  if(S.chNum===1 && !S.flags.left18){ relationshipDecision(); return }
  const keys = qualifiedJobs().filter(k=>k!==S.job.key);
  const canPromo = !S.unemployed && S.job.up && S.years>=2 && (S.level||0)<2;
  const schoolOpts = S.age<=40 ? [...DATA.majors.bc.map(m=>({...m,where:'bc'})), ...DATA.majors.uw.map(m=>({...m,where:'uw'}))].filter(m=>!m.jobs.every(j=>S.cred.includes(j))) : [];
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Decision 1 of 3 · Career</span>
  <h2>What about work?</h2>
  <div class="choices">
    <button class="choice" data-k="keep"><span class="t">Stay in your job as ${an(jobName())} ${jobName().toLowerCase()}</span><span class="c">${fmt(mySalary())} a year</span><span class="s">You have ${S.years} year${S.years===1?'':'s'} of experience, so your pay keeps rising.</span><ul class="joblist"><li>${riskChip(S.job.risk)}${aiChip(S.job)}${benChip(S.job.ben)}</li></ul></button>
  </div>
     <h3>Or look for work</h3>
   <p>Browse ${SCRAPED_JOBS.length} real Bellevue job postings scraped from Indeed. Search by title, company, or location, then apply.</p>
   <div class="choices"><button class="choice" data-k="browse"><span class="t">Look for work</span><span class="c">Search jobs</span><span class="s">Opens the job browser. Applying sets your job and resets your experience to beginner pay.</span></button></div>
${canPromo?(()=>{ const {odds,gap}=promoOdds(), l=(S.level||0)+1, np=salaryFor(S.job,S.id.gender,S.years,l,1+(S.payBump||0));
    return `<h3>Or go for a promotion</h3><p>You stay in your job but take on extra work while you compete for a higher position. Promotion pay is based on what the top-paid workers in your field earn.</p>${src('onet')}<div class="choices"><button class="choice" data-k="promo"><span class="t">Go for a promotion to ${S.job.up[l-1].toLowerCase()}</span><span class="c">${fmt(np)} a year</span><span class="s">Your odds: <b>${Math.round(odds*100)}%</b>. Saying yes to extra work and taking courses help.${gap?' '+chip('gender'):''}</span></button></div>${promoNote(gap)}` })():''}
  <h3>Or switch to another job you qualify for</h3>
  <p>A new job resets your experience, so you start at beginner pay.</p>
  <div class="choices">${jobChoices(keys)}</div>
  ${schoolOpts.length?`<h3>Or go back to school</h3>
  <p>You can study full time (quit your job and live on a part-time job and savings) or part time (cut your work hours to 60% and take longer). This chapter then lasts until your schooling ends. If you finish, new jobs open up.</p>
  <div class="choices">${schoolOpts.map(m=>`<button class="choice" data-k="school:${m.where}:${m.k}"><span class="t">${m.where==='uw'?'UW':'Bellevue College'}: ${m.n}</span><span class="c">${fmt(m.where==='uw'?DATA.uwTuition:DATA.bcTuition)} a year</span><span class="s">${m.s}</span><ul class="joblist">${m.jobs.map(jobLine).join('')}</ul></button>`).join('')}</div>`:''}
  </section>`);
  bindChoices(k=>{
    S.school=null;
    if(k==='browse'){ jobBrowser(); return }
    if(k==='promo'){ promoRoll(relationshipDecision); return }
    if(k.startsWith('school:')){ const [,where,mk]=k.split(':'); schoolModeScene(where, DATA.majors[where].find(x=>x.k===mk)); return }
    else if(k!=='keep'){ const old=S.job; takeJob(k); note('luck', `At ${S.age} you switched from ${old.n.toLowerCase()} to ${S.job.n.toLowerCase()}.`) }
    relationshipDecision();
  });
}
const SCHOOL_YEARS={bc:{full:2,part:3}, uw:{full:4,part:5}};
function schoolModeScene(where, major){
  const y=SCHOOL_YEARS[where], tu=where==='uw'?DATA.uwTuition:DATA.bcTuition, name=(where==='uw'?'UW':'Bellevue College')+': '+major.n;
  const fullOK = S.age+y.full<=45, partOK = S.age+y.part<=45;
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Decision 1 of 3 · Back to school</span>
  <h2>${name}: full time or part time?</h2>
  <p>Tuition is ${fmt(tu)} a year for full-time students. The Washington College Grant covers some or all of it if your household income is low enough. If you run short of money while studying, you borrow student loans.</p>${src('wsac')}
  <div class="choices">
    ${choiceBtn('full',`Full time for ${y.full} years (ages ${S.age} to ${S.age+y.full})`,`Quit your job. You work a part-time job for about $14,000 a year (game estimate). Your work experience stops growing while you study.${fullOK?'':' <b>You would not finish before 45.</b>'}`,`${completionOdds(where,S.id,major.mod-3)}% odds`, !fullOK)}
    ${choiceBtn('part',`Part time for ${y.part} years (ages ${S.age} to ${S.age+y.part})`,`Keep your job but cut back to 60% of your hours and pay. Classes at night take longer, and juggling both is harder.${partOK?'':' <b>You would not finish before 45.</b>'}`,`${completionOdds(where,S.id,major.mod-10)}% odds`, !partOK)}
    ${choiceBtn('back','Never mind, go back','Choose a different work option.','')}
  </div></section>`);
  bindChoices(k=>{
    if(k==='back'){ careerDecision(); return }
    S.school={where, major, mode:k, years:y[k], name};
    if(k==='full') stopRetire('you left your job for school');
    S.chEnd=S.age+y[k];
    event(`Started ${k==='full'?'full-time':'part-time'} school: ${name}`);
    interlude(`Age ${S.age} · Back to school`, `<h2>This chapter now runs until you finish school at ${S.chEnd}.</h2><p>${k==='full'?'You quit your job and start classes this fall.':'You cut back to 60% of your hours and start night classes.'} At the end of the chapter you'll find out whether you finished.</p>`, relationshipDecision);
  });
}

/* --- Decision 2: relationship --- */
function partnerName(){ return S.partner && S.partner.name ? S.partner.name : (S.partner ? 'Your partner' : '') }
function charStatus(id){ const r=S.relationships[id]; return r ? r.status : 'stranger' }
function charLabel(c){ const st=charStatus(c.id);
  return st==='partner' ? 'Your partner' : st==='ex' ? 'An ex' : st==='friend' ? 'A friend' : 'Someone new' }
function eligibleChars(){ return DATA.characters.filter(c => ['stranger','friend'].includes(charStatus(c.id))) }
function startRelationship(c, theyAsked){
  const pj=DATA.jobs[c.job];
  const partnerTerm = 'partner';
  S.flags.partners=(S.flags.partners||0)+1;
  S.partner={job:c.job, years:Math.max(0,S.age-23), name:c.name, charId:c.id};
  S.partnerId=c.id;
  S.relationships={...S.relationships, [c.id]:{status:'partner', since:S.age}};
  event(`Started dating ${c.name} (${pj.n.toLowerCase()})`);
  note('luck', `At ${S.age} ${theyAsked ? c.name+' asked you to be their ${partnerTerm} and you said yes. They' : 'you asked '+c.name+' to be your ${partnerTerm} and they said yes. They'} work${c.gender===0?'':'s'} as ${an(pj.n)} ${pj.n.toLowerCase()} and earn${c.gender===0?'':'s'} about ${fmt(partnerSalary())} a year.`);
  interlude(`Age ${S.age} · Relationship`, `<h2>${theyAsked?c.name+' asked you to be their ${partnerTerm}.':'You asked '+c.name+' to be your ${partnerTerm}.'}</h2><div class="result"><p>${c.name} works as ${an(pj.n)} <b>${pj.n.toLowerCase()}</b> and earns about <b class="num">${fmt(partnerSalary())}</b> a year.</p></div>${src('onet')}`, babyDecision);
}
function relationshipDecision(){
  if(S.partner){ partnerCheck(); return }
  const pool=eligibleChars();
  // Reduce pool size - fewer admirers in real life
  const reducedPool = pool.filter((c,i) => Math.random() > 0.5); // keep ~half
  const asker = Math.random()<0.45 && reducedPool.length ? reducedPool[Math.floor(Math.random()*reducedPool.length)] : null;
  // Determine gender terms based on player and asker gender
  const playerGender = S.id.gender;
  const askerGender = asker ? asker.gender : null;
  function termForAsk(cGender){
    // Always use 'partner' to avoid gender-specific term issues
    return 'partner';
  }
  function termForYes(cGender){
    return termForAsk(cGender);
  }
  function termForAskBtn(cGender){
    return termForAsk(cGender);
  }
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Decision 2 of 3 · Relationship</span>
  <h2>Who do you spend time with?</h2>
  <p>Someone can ask you to be their partner, or you can ask them. Starting a relationship means sharing bills and a second paycheck. Job and pay come from that person's field.</p>
  ${asker?`<div class="callout"><p><b>${asker.name} asks you to be their ${termForAsk(askerGender)}.</b> ${asker.vibe}</p></div>`:''}
  <div class="choices">${reducedPool.map(c=>{
    const asked = asker && asker.id===c.id, pj=DATA.jobs[c.job];
    return `
      ${asked ? choiceBtn('accept:'+c.id,'Say yes to '+c.name,`They asked you to be their ${termForYes(c.gender)}.`,'') : choiceBtn('ask:'+c.id,'Ask '+c.name+' to be your ${termForAskBtn(c.gender)}',`${c.vibe} ${pj.n} pay: about ${fmt(salaryFor(pj,null,Math.max(0,S.age-23)))} a year.`,'')}
    `;
}).join('')}${choiceBtn('single','Stay single this chapter','You keep your own money and time.','')}</div></section>`);
  bindChoices(k=>{
    if(k==='single'){ babyDecision(); return }
    if(k.startsWith('accept:')){ const c=DATA.characters.find(x=>x.id===k.slice(7)); if(c) startRelationship(c, true); return }
    if(k.startsWith('decline:')){ const c=DATA.characters.find(x=>x.id===k.slice(8)); if(c){ S.relationships={...S.relationships,[c.id]:{status:'friend'}}; note('luck', `At ${S.age} ${c.name} asked you to be their ${termForAsk(c.gender)} and you said no.`); interlude(`Age ${S.age} · Relationship`, `<h2>You said no.</h2><div class="result"><p>You and ${c.name} stayed friends.</p></div>`, babyDecision) } return }
    if(!k.startsWith('ask:')) { babyDecision(); return }
    const c=DATA.characters.find(x=>x.id===k.slice(4)); if(!c){ babyDecision(); return }
    const ok=Math.random()<0.6;
    if(ok) startRelationship(c, false);
    else { S.relationships={...S.relationships,[c.id]:{status:'friend'}}; note('luck', `At ${S.age} you asked ${c.name} to be your ${termForAsk(c.gender)} and they said no, so you stayed friends.`); interlude(`Age ${S.age} · Relationship`, `<h2>${c.name} said no.</h2><div class="result"><p>You stayed friends instead.</p></div>`, babyDecision) }
  });
}
function partnerCheck(){
  const pj=DATA.jobs[S.partner.job], ka=allKidAges(S.age);
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Decision 2 of 3 · Relationship</span>
  <h2>How are things with ${partnerName().toLowerCase()}?</h2>
  <p>You live with your partner${S.partner.name?', '+S.partner.name:''}, who works as ${an(pj.n)} ${pj.n.toLowerCase()} and earns about ${fmt(partnerSalary())} a year. Most couples stay together, but some decide to split up.</p>
  <div class="choices">
    ${choiceBtn('stay','Stay together','You keep sharing a home, bills, and life.','')}
    ${choiceBtn('split','Split up (separate or divorce)',`You divide your savings${S.home?' and your home':''}, and one paycheck pays every bill.${ka.length?' The kids live with you most of the time, and your ex pays child support.':''}`,'')}
  </div></section>`);
  bindChoices(k=>{ if(k==='stay'){ babyDecision(); return } splitScene() });
}
function splitScene(){
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Splitting up</span>
  <h2>How do you split up?</h2>
  <p>Ending a marriage in Washington means filing papers with the court and dividing everything you own and owe. A national survey found people spent about $11,300 each on lawyers, on average, but couples who agree can spend much less.</p>${src('divorce')}
  <div class="choices">
    ${choiceBtn('mediate','Agree on everything and use a mediator','A mediator helps you two split your things and plan for any kids. Court fees and the mediator cost about $3,000 (game estimate).',money(-3000))}
    ${choiceBtn('lawyers','Each hire a lawyer and fight it out','It takes months and is very stressful. The national average is about $11,300 each.',money(-11300))}
    ${choiceBtn('back','Never mind, stay together','','')}
  </div></section>`);
  bindChoices(k=>{
    if(k==='back'){ babyDecision(); return }
    const cost=k==='mediate'?3000:11300, pj=DATA.jobs[S.partner.job];
    adj({money:-cost, stress:k==='mediate'?14:24, belong:-8});
    if(S.bank>0) S.bank=Math.round(S.bank/2);
    if(S.home){ const eq=Math.max(0,S.home.value-S.home.loan); S.home.loan+=eq/2 }
    if(allKidAges(S.age).length) S.ongoing.push(['Child support received (lowers costs)',-800]);
    if(S.care==='stayhome') S.care=null;
    if(S.partnerId){ S.relationships={...S.relationships,[S.partnerId]:{status:'ex', since:S.age}}; S.partnerId=null }
    S.partner=null; S.flags.divorced=(S.flags.divorced||0)+1;
    event(k==='mediate'?'Split up with a mediator':'Split up after a court fight');
    note('luck', `At ${S.age} you and your partner split up. It cost ${fmt(cost)}, and your partner took half your savings${S.home?' and you borrowed to buy out their half of the home':''}.`);
    interlude(`Age ${S.age} · Splitting up`, `<h2>You are on your own now.</h2><div class="result"><p>You paid <b class="num">${fmt(cost)}</b>, and your ex took half of your savings${S.home?'. You borrowed to buy out their half of the home, so your mortgage went up':''}.${allKidAges(S.age).length?' Your ex pays $800 a month in child support (game estimate).':''} You can move in with a new partner in a later chapter.</p></div>`, babyDecision);
  });
}
/* --- Decision 3: kids --- */
function babyDecision(){
  if(S.age>45){ setupScene(); return }
  const n=S.kids.length + fosterAges(S.age).length;
  if(S.age>42 || n>=3){ setupScene(); return }
  const woman=S.id.gender===0, canBio = S.age<=40 && (woman || !!S.partner);
  const birther = woman ? 'you' : 'your partner';
  const bSal = woman ? mySalary() : partnerSalary(), bLoss = leaveLoss(bSal, DATA.pfml.birthWeeks);
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Decision 3 of 3 · Kids</span>
  <h2>${n?'Add another child to your family?':'Do you want to have a child?'}</h2>
  <p>${n?`You have ${n} kid${n>1?'s':''} at home, age ${allKidAges(S.age).join(' and ')}. `:''}Children bring joy and real costs: food, insurance, and child care. Infant care is the most expensive kind: a King County child care center charges a median of ${fmt(DATA.childcare.center[0])} a month.</p>${src('childcare')}
  <div class="choices">
    ${choiceBtn('no',n?'No more kids for now':'Not now','You can decide again next chapter.','')}
    ${choiceBtn('bio','Have a baby',canBio?`${woman?'You give birth':'Your partner gives birth'} and take ${DATA.pfml.birthWeeks} weeks off work to recover and care for the baby. Washington's paid leave pays part of your usual pay, so ${birther==='you'?'you lose':'your household loses'} about ${fmt(bLoss)}.`:(S.age>40?'The game ends biological births at 40. You can adopt or foster.':'You need a partner to have a biological child. You can adopt or foster on your own.'),canBio&&bLoss?`${fmt(-bLoss)} pay`:'',!canBio)}
    ${choiceBtn('adopt','Adopt a child','From foster care or through a private agency. Costs range from almost nothing to tens of thousands of dollars.','')}
    ${choiceBtn('foster','Become a foster parent','Care for a child while their family works to get them back. The state pays a monthly amount toward their costs.','')}
  </div>${src('pfml')}</section>`);
  bindChoices(k=>{ if(k==='bio') birthScene(woman, bLoss); else if(k==='adopt') adoptScene(); else if(k==='foster') fosterScene(); else setupScene(); });
}
function birthScene(woman, loss){
  const twins = Math.random()<0.03; S.kids.push(S.age); if(twins) S.kids.push(S.age);
  S.ffAdj -= loss;
  event(twins?'Had twins!':'Had a baby');
  const sal = woman?mySalary():partnerSalary(), wk=sal/52, ben=Math.round(pfmlWeekly(wk));
  note(woman?'gender':'luck', woman ? `At ${S.age} you gave birth and took ${DATA.pfml.birthWeeks} weeks of leave, losing about ${fmt(loss)} in pay. Mothers often fall behind in pay after having children.` : `At ${S.age} your partner gave birth and took ${DATA.pfml.birthWeeks} weeks of leave, and your household lost about ${fmt(loss)} in pay.`);
  interlude(`Age ${S.age} · A new baby`, `<h2>${twins?"It's twins!":"It's a baby!"}</h2>
   <div class="result"><p>${twins?'About 3 in 100 births in the U.S. are twins. You now have two babies at once, and two infant child care bills. ':''}${woman?'You':'Your partner'} take${woman?'':'s'} ${DATA.pfml.birthWeeks} weeks off work after the birth. ${sal?`Washington Paid Family and Medical Leave pays about <b class="num">${fmt(ben)}</b> a week instead of the usual <b class="num">${fmt(wk)}</b>. The difference, about <b class="num">${fmt(loss)}</b> after taxes, comes out of your savings when the game jumps ahead.`:'Because there was no paycheck to replace, there is no lost pay.'}</p></div>
   ${woman?`<div class="callout id"><p>${chip('gender')} Giving birth means time away from work, and studies find mothers' pay often falls behind afterward, while fathers' pay usually does not. Washington's paid leave helps, but it pays at most ${fmt(DATA.pfml.max)} a week.</p>${src('pfml')} ${src('esd')}</div>`:src('pfml')}`, setupScene);
}
function adoptScene(){
  const age=2+Math.floor(Math.random()*7), loss=leaveLoss(mySalary(), DATA.pfml.bondWeeks);
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Adoption</span>
  <h2>How do you want to adopt?</h2>
  <p>Before any adoption, a social worker visits your home and checks that you are ready (a "home study"). Adoptive parents can take ${DATA.pfml.bondWeeks} weeks of paid bonding leave in Washington, losing about ${fmt(loss)} of your pay.</p>${src('adoptcost')}
  <div class="choices">
    ${choiceBtn('fc',`Adopt a child from foster care (a ${age}-year-old)`,`Many children in foster care are waiting for a permanent family, often older kids. Costs are low, from about $0 to $2,500, so the game uses $1,000. Kids who have been through hard times may need extra patience and support.`,money(-1000))}
    ${choiceBtn('agency','Adopt a baby through a private agency','Agency fees, the home study, legal fees, and travel cost about $5,000 to $40,000. The game uses $30,000. Matching with a baby can take a year or more.',money(-30000))}
    ${choiceBtn('back','Never mind','Go back to the kids decision.','')}
  </div></section>`);
  bindChoices(k=>{
    if(k==='back'){ babyDecision(); return }
    const cost=k==='fc'?1000:30000, childAge=k==='fc'?age:0;
    adj({money:-cost, stress:6, belong:6}); S.kids.push(S.age-childAge); S.ffAdj-=loss;
    event(k==='fc'?`Adopted a ${childAge}-year-old from foster care`:'Adopted a baby');
    note('luck', `At ${S.age} you adopted ${k==='fc'?`a ${childAge}-year-old from foster care`:'a baby through an agency'}. It cost ${fmt(cost)}${loss?` plus about ${fmt(loss)} in lost pay during bonding leave`:''}.`);
    interlude(`Age ${S.age} · Adoption`, `<h2>Welcome home!</h2><div class="result"><p>You paid <b class="num">${fmt(cost)}</b>${S.bank<0?', and some of it went on your credit card':''}. ${loss?`You take ${DATA.pfml.bondWeeks} weeks of bonding leave. The lost pay, about <b class="num">${fmt(loss)}</b>, comes out when the game jumps ahead.`:''}</p></div>`, setupScene);
  });
}
function fosterScene(){
  const age=1+Math.floor(Math.random()*13), rate=DATA.fosterRate[age<6?0:age<12?1:2];
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Foster care</span>
  <h2>Become a foster parent?</h2>
  <p>You take training and a home check to get a license. Then a child is placed with you: a ${age}-year-old who can't stay with their own family right now.</p>
  <ul class="ledger">
    <li>The state pays you a monthly amount for the child's food, clothes, and activities: <b class="num">${fmt(rate)}/mo</b> for this age (2022 state rates).</li>
    <li>Apple Health covers the child's medical care, and the state can pay for child care while you work.</li>
    <li>The goal of foster care is usually to send children home. In 2024, about half of U.S. children leaving foster care went back to their families. Sometimes a foster family adopts the child instead.</li>
  </ul>${src('fosterrate')} ${src('fostercare')} ${src('reunify')}
  <div class="choices">
    ${choiceBtn('yes','Get licensed and welcome the child','Belonging goes up. So does stress, especially at first.','')}
    ${choiceBtn('back','Never mind','Go back to the kids decision.','')}
  </div></section>`);
  bindChoices(k=>{
    if(k==='back'){ babyDecision(); return }
    const born=S.age-age; (S.foster=S.foster||[]).push({born}); S.flags.fostered=(S.flags.fostered||0)+1;
    adj({stress:8, belong:6});
    event(`Became a foster parent to a ${age}-year-old`);
    note('luck', `At ${S.age} you became a foster parent to a ${age}-year-old.`);
    const home={chip:'luck',h:'Going home',p:`Your foster child's family finished their case plan, and the court says the child can go home. You say goodbye and promise to stay in touch.`,o:[{t:'Help them pack and say goodbye',c:0,d:{stress:6,belong:2},fosterEnd:born}]};
    const stay={chip:'luck',h:'A permanent home?',p:`Your foster child can't go back to their family. Their social worker asks whether you want to adopt them.`,o:[{t:'Adopt them',c:-500,d:{stress:-4,belong:8},fosterAdopt:born,s:'Legal fees for adopting from foster care are low. (Game estimate.)'},{t:'Keep fostering for now',c:0,d:{stress:3}}]};
    S.pending.push({when:S.chNum+1, card: Math.random()<0.47 ? home : stay});
    interlude(`Age ${S.age} · Foster care`, `<h2>A new kid at home.</h2><div class="result"><p>Your foster child is ${age}. You'll find out next chapter whether they go home or need a permanent family.</p></div>`, setupScene);
  });
}

/* ================= BUDGET ================= */
function careNeeded(age){ return kidAges(age).some(a=>careBand(a)>=0) }
function famFreeCare(){ return S.id.wealth>=2 || (S.housing&&S.housing.k==='parents') }
function rentGrowth(age){ return 1+0.01*Math.max(0,age-22) }
function housingOptions(age){
  const w=S.id.wealth, nk=allKidAges(age).length, adults=S.partner?2:1, g=rentGrowth(age);
  if(S.home) return [{k:'own',t:`Stay in your ${S.home.n}`,s:'Your monthly payment stays the same. Each year you pay down the loan and build wealth.',cost:S.home.monthly,own:true,out:S.home.out}];
  const o=[];
  if(age<35){
    if(w>=2) o.push({k:'parents',t:"Live in your parents' Bellevue house",s:'Free. Less privacy and independence.',cost:0,stress:6+(S.partner?6:0),chip:'wealth'});
    else o.push({k:'parents',t:"Live in your family's apartment",s:nk?'Very crowded with kids. Your family needs $500 a month.':'Crowded. Your family needs $500 a month.',cost:500,stress:nk?25:14,chip:'wealth'});
  }
  if(!nk && adults===1) o.push({k:'room',t:'Rent a room in a shared Bellevue house',s:'You share a kitchen and bathroom with 3 roommates. (Price is a game estimate.)',cost:Math.round(1300*g),stress:6,rent:true});
  if(!nk && adults===1) o.push({k:'studio',t:'Bellevue studio apartment',s:'One room, all yours. Average current rent.',cost:Math.round(1956*g),stress:2,rent:true,src:'rentBv'});
  if(nk<=1) o.push({k:'one',t:'Bellevue 1-bedroom apartment',s:nk?'Tight with a child, but doable. Average current rent.':'Your own place. Average current rent.',cost:Math.round(2506*g),stress:nk?6:0,rent:true,src:'rentBv'});
  o.push({k:'two',t:'Bellevue 2-bedroom apartment',s:'Average current rent for a 2-bedroom.',cost:Math.round(3235*g),stress:nk>=3?8:0,rent:true,src:'rentBv'});
  o.push({k:'three',t:'Bellevue 3-bedroom apartment',s:'Room for everyone. Average current rent.',cost:Math.round(4064*g),stress:-3,rent:true,src:'rentBv'});
  o.push({k:'out',t:'2-bedroom apartment in Kent',s:'Average current rent in Kent. You commute 40 to 60 minutes each way to Bellevue.',cost:Math.round(2026*g),stress:10+(nk>=3?8:0),belong:-4,rent:true,out:true,src:'rentKent'});
  if(nk>=2) o.push({k:'out3',t:'3-bedroom apartment in Kent',s:'Average current rent in Kent. You commute 40 to 60 minutes each way to Bellevue.',cost:Math.round(2562*g),stress:10,belong:-4,rent:true,out:true,src:'rentKent'});
  // Buying a home
  const gift = S.flags.giftUsed?0:DATA.wealth[w].gift;
  const saved = Math.max(0,S.bank), cash = saved + gift, cardMin = Math.round(cardDebt()*0.03);
  const gross = (mySalary()+partnerSalary())/12;
  for(const [hk,h] of Object.entries(DATA.homes)){
    if(nk>h.maxKids) continue;
    const down20=h.price*0.2, down10=h.price*0.1, closing=Math.round(h.price*0.03);
    const down = cash>=down20+closing ? down20 : down10;
    const loan=h.price-down, pmi = down<down20 ? loan*0.006/12 : 0;
    const pi = mortgagePay(loan,DATA.mortgageRate);
    const monthly = Math.round(pi + h.price*DATA.propTax/12 + 120 + h.hoa + pmi);
    const reserve = monthly*DATA.reserveMonths, need = down+closing+reserve;
    const canCash = cash >= need;
    const canIncome = monthly + S.loanPay + cardMin <= gross*0.43;
    const check = `<br><b>Down payment check:</b> you need ${fmt(need)}: a ${down===down20?'20':'10'}% down payment (${fmt(down)}), closing costs (${fmt(closing)}), and ${DATA.reserveMonths} months of payments left in the bank (${fmt(reserve)}). You have ${fmt(saved)} in savings${gift?` + ${fmt(gift)} your family will give`:''}${gift?` = ${fmt(cash)}`:''}.${cardDebt()?` Credit card debt doesn't count as money you have.`:''}`;
    const why = !canCash ? `You can't buy yet: you are ${fmt(need-cash)} short.` : !canIncome ? `You can't buy yet: banks won't lend this much. ${fmt(monthly)} a month plus your loan${cardMin?' and credit card':''} payments would be more than 43% of your household's pay before taxes.` : '';
    o.push({k:'buy:'+hk,t:`Buy a ${h.n} for ${fmt(h.price)}`,s:`${h.d} Monthly cost includes a ${(DATA.mortgageRate*100).toFixed(2)}% mortgage, property tax, and insurance${h.hoa?', plus condo fees':''}.${check}${why?' <b>'+why+'</b>':''}`,cost:monthly,buy:hk,down,closing,loan,pi,disabled:!!why,belong:6,out:h.out,src:h.src});
  }
  return o;
}
function transportOptions(){
  const out = S.housing && S.housing.out, adults=S.partner?2:1;
  const o=[{k:'bus',t:adults>1?'Two transit passes':'Transit pass',s:out?'Long rides with transfers.':'Buses and light rail.',cost:DATA.busPass*adults,stress:out?8:3,src:'metro'},
           {k:'car',t:adults>1?'Two used cars':'A used car',s:'Payment, insurance, gas, repairs, and parking. (Price is a game estimate.)',cost:700*adults,stress:0},
           {k:'newcar',t:adults>1?'Two new cars':'A new car',s:'AAA says owning and driving a new car costs about $965 a month. Fewer breakdowns.',cost:965*adults,stress:-2,src:'aaa'}];
  if(adults>1) o.push({k:'mixnew',t:'One new car and one transit pass',s:'You share the car and one of you takes the bus.',cost:965+DATA.busPass,stress:2});
  if(adults>1) o.push({k:'mix',t:'One car and one transit pass',s:'You share the car and one of you takes the bus.',cost:700+DATA.busPass,stress:3});
  if(!out) o.push({k:'bike',t:'Bike and walk',s:'Cheap, but wet in winter.',cost:25*adults,stress:5});
  return o;
}
function careOptions(age){
  if(!careNeeded(age)) return [];
  const ages=kidAges(age);
  const o=[{k:'center',t:'Licensed child care center',s:"King County median prices for each child's age. School-age kids go to before- and after-school care.",cost:careCost(ages,'center'),src:'childcare'},
           {k:'home',t:'Family child care home',s:"A licensed provider's home. King County median prices.",cost:careCost(ages,'home'),stress:2,src:'childcare'}];
  if(famFreeCare()) o.push({k:'gma',t:'Grandparents watch the kids',s:'Your parents live nearby and have the time.',cost:0,stress:-2,belong:5,chip:'wealth'});
  else o.push({k:'gma',t:'Grandparents watch the kids',s:'Your parents both work full time and cannot do this.',cost:0,disabled:true,chip:'wealth'});
  if(S.partner) o.push({k:'stayhome',t:'Your partner stays home with the kids',s:`No child care bill, but you lose your partner's paycheck (${fmt(salaryFor(DATA.jobs[S.partner.job],null,S.partner.years))} a year) and their experience stops growing.`,cost:0,stress:3});
  return o;
}
function insurance(age){
  const tiers=['basic','standard','strong'];
  let best = (S.unemployed || (S.school&&S.school.mode==='full')) ? null : S.job.ben;
  if(S.partner && S.care!=='stayhome'){ const pb=DATA.jobs[S.partner.job].ben; if(!best || tiers.indexOf(pb)>tiers.indexOf(best)) best=pb }
  if(!best) return {tier:null, cost:0, dental:150};
  const b=DATA.ben[best], adults=S.partner?2:1;
  return {tier:best, cost:b.adult*adults + b.kid*kidAges(age==null?S.age:age).length, dental:b.dental};
}
function budget(age, opt){
  const ages=kidAges(age), all=allKidAges(age), adults=S.partner?2:1, kids17=all.filter(a=>a<17).length;
  const my = mySalary(), pt = partnerSalary();
  const myTH = S.unemployed ? (S.uiPay||0) : monthlyTakeHome(my, kids17);
  const ptTH = monthlyTakeHome(pt, 0);
  const sideMo = S.sideGig ? (S.sideGig.mo||0) : 0;
  const myTH2 = myTH + sideMo;
  const lines=[];
  const h=S.housing;
  const hcost = !h ? 0 : h.own ? h.cost : h.rent ? Math.round(h.base*rentGrowth(age)) + S.rentRaise : h.cost;
  lines.push(['Housing', hcost]);
  if(S.transport) lines.push(['Transportation', S.transport.cost]);
  if(careNeeded(age)) lines.push(['Child care', careCost(ages, S.care)]);
  lines.push(['Groceries', 450*adults + 250*all.length]);
  const ins=insurance(age); lines.push([`Health insurance${ins.tier?' ('+DATA.ben[ins.tier].label.toLowerCase()+')':' (Apple Health)'}`, ins.cost]);
  lines.push(['Phone and internet', 140 + 60*(adults-1)]);
  if(h && !['parents','room'].includes(h.k)) lines.push(['Electricity, water, and garbage', h.own?(S.home.n==='Bellevue condo'?220:380):180]);
  lines.push([`Everyday spending (${['frugal','typical','comfortable'][S.lifestyle??1]}: eating out, fun, clothes, gifts)`, Math.round((700*adults+350*all.length)*[0.55,1,1.5][S.lifestyle??1])]);
  if(fosterAges(age).length) lines.push(['Foster care payment from the state (lowers costs)', -fosterPay(age)]);
  if(S.loanPay>0 && !(S.school&&S.school.mode==='full')) lines.push(['Student loan payment', S.loanPay]);
  if(S.school){ const f=S.school.mode==='full'?1:0.6; const tu=(S.school.where==='uw'?DATA.uwTuition:DATA.bcTuition)*f; const hh=my+pt; const grant = hh<=83500?tu: hh<=139500?tu*0.5:0; lines.push([`Tuition (${S.school.mode==='full'?'full':'part'} time, after grants)`, Math.round((tu-grant)/12)]) }
  if(S.familySupport) lines.push(['Help for your parents', S.familySupport]);
  for(const [lab,amt] of S.ongoing) lines.push([lab, amt]);
  if(retireWorking()) lines.push([`Retirement savings (${Math.round(S.retirePct*100)}% of pay, before taxes)`, retireTakeHomeCost()]);
  if(S.bank<0 && !(opt&&opt.noInterest)) lines.push(['Credit card interest', Math.round(-S.bank*0.18/12)]);
  const bills = lines.reduce((a,b)=>a+b[1],0);
  const takeHome = myTH2+ptTH;
  if(sideMo) lines.push(['Side gig (net)', -sideMo]);
  return {lines, takeHome, myTH:myTH2, ptTH, gross:(my+pt)/12, bills, left:takeHome-bills, housing:hcost};
}

/* ================= SETUP SCREEN ================= */
const LIFE=[
  {t:'Frugal',m:0.55,s:'Cook at home, rarely go out, buy used. Saves money, but life feels tight.',stress:6,belong:-5},
  {t:'Typical',m:1,s:'About what a typical Seattle-area household spends.'},
  {t:'Comfortable',m:1.5,s:'Eat out often, travel, and buy what you want.',stress:-4,belong:4}];
function setupScene(){ if(S.lifestyle==null) S.lifestyle=1; renderSetup() }
function optList(group, opts, curK){
  return opts.map(o=>`<button class="choice ${curK===o.k?'on':''}" data-g="${group}" data-o="${o.k}" ${o.disabled?'disabled':''}><span class="t">${o.t} ${chip(o.chip)}</span><span class="c">${fmt(o.cost)}/mo</span><span class="s">${o.s}${o.src?'<br>'+src(o.src):''}</span></button>`).join('');
}
function renderSetup(){
  const age=S.age;
  const hs=housingOptions(age);
  if(S.home) S.housing={...hs[0]};
  if(S.housing && !hs.find(h=>h.k===S.housing.k && !h.disabled)) S.housing=null;
  const ts=transportOptions(); if(S.transport && !ts.find(t=>t.k===S.transport.k)) S.transport=null;
  if(S.transport) S.transport=ts.find(t=>t.k===S.transport.k);
  const cs=careOptions(age); if(!cs.find(c=>c.k===S.care && !c.disabled)) S.care=null;
  const b = budget(age);
  const ready = S.housing && S.transport && (!cs.length || S.care);
  const ins=insurance(age);
  const ka=kidAges(age);
  show(`<section class="scene"><span class="eyebrow">Age ${age} · Set up your monthly budget</span>
  <h2>${S.school&&S.school.mode==='full'?'Full-time student':jobName()}${S.partner?' + partner':''}${ka.length?`, ${ka.length} kid${ka.length>1?'s':''} (age ${ka.join(', ')})`:''}</h2>
  <p>You take home <b class="num">${fmt(b.myTH)}</b> a month after federal taxes and Social Security/Medicare.${S.partner?` Your partner takes home <b class="num">${fmt(b.ptTH)}</b>.`:''} Washington has no state income tax. ${ins.tier?`Your household uses the best plan available to you (${DATA.ben[ins.tier].label.toLowerCase()}: ${DATA.ben[ins.tier].d.toLowerCase()}).`:''}</p>
  ${S.school?`<div class="callout"><p>You are a ${S.school.mode==='full'?'full-time':'part-time'} student in <b>${S.school.name}</b> until age ${S.chEnd}.${S.school.mode==='full'?' Your pay comes from a part-time job.':' You work 60% of your usual hours.'}</p></div>`:''}
  <h3>Where will you live?</h3><div class="choices">${optList('housing',hs,S.housing&&S.housing.k)}</div>
  <h3>How will you get around?</h3><div class="choices">${optList('transport',ts,S.transport&&S.transport.k)}</div>
  ${cs.length?`<h3>Who watches the kids while you work?</h3><div class="choices">${optList('care',cs,S.care)}</div>`:''}
  <h3>How much do you spend on everyday life?</h3><p>Eating out, entertainment, clothes, haircuts, gifts, and donations. A typical Seattle-area household of 2 to 3 people spends about $20,000 a year on these.</p>${src('blsce')}<div class="choices">${optList('life',LIFE.map((l,i)=>({...l,k:String(i),cost:Math.round((700*(S.partner?2:1)+350*kidAges(age).length)*l.m)})),String(S.lifestyle??1))}</div>
  ${retireOffered()?`<h3>How much of your pay goes to retirement?</h3><p>Your employer adds up to 4% of your pay for free if you save at least that much. The money goes in before income tax, so your take-home pay drops by less than you save. The most you can put in for 2026 is ${fmt(DATA.retire.limit)} a year.</p>${src('vanguard')} ${src('irs401k')}<div class="choices">${DATA.retire.rates.map((r,i)=>{ const n=retireNums(r); return `<button class="choice ${Math.abs((S.retirePct||0)-r)<1e-9?'on':''}" data-g="retire" data-o="${i}"><span class="t">${r?Math.round(r*100)+'% of your pay':'Nothing for now'}</span><span class="c">${fmt(n.cost)}/mo</span><span class="s">${r?`You put in ${fmt(n.you/12)}/mo and your employer adds ${fmt(n.match/12)}/mo, so ${fmt((n.you+n.match)/12)}/mo goes into your account.${S.retirePct===0&&r===0.04?' This is enough to get the full match.':''}${r*mySalary()>DATA.retire.limit?' (Capped at the yearly limit.)':''}`:'You miss out on free money from your employer.'}</span></button>` }).join('')}</div>`
    : S.job && S.job.ben==='basic' && !S.unemployed ? `<div class="callout"><p>Your job has basic benefits, so it doesn't offer a retirement plan with an employer match.${S.retire?` Your ${fmt(S.retire)} already saved keeps growing.`:''}</p></div>`:''}
  <div class="panel"><h3 style="margin-bottom:8px">Your monthly budget at age ${age}</h3><div class="tbl"><table>
    <tr><td><b>Take-home pay${S.partner?' (both of you)':''}</b></td><td class="r">${fmt(b.takeHome)}</td></tr>
    ${b.lines.map(l=>`<tr><td>${l[0]}</td><td class="r">${fmt(-l[1])}</td></tr>`).join('')}
    <tr class="total"><td>Left over each month (goes to savings)</td><td class="r" style="color:${b.left<0?'var(--bad)':'var(--good)'}">${fmt(b.left)}</td></tr>
  </table></div></div>
  ${ready && b.left<0?`<div class="callout" style="border-color:var(--bad)"><p><b>Warning:</b> with these choices you spend <b class="num">${fmt(-b.left)}</b> more than you earn every month. Over ${S.chEnd-S.age} years that becomes credit card debt. Try cheaper housing, transportation, or child care.</p></div>`:''}
  ${(S.retire||0)>=1000 && (cardDebt()>0||S.debt>0) ? `<div class="panel stack"><p><b>Paying off debt?</b> You owe ${fmt(cardDebt()+S.debt)}${cardDebt()&&S.debt?` (${fmt(cardDebt())} on a credit card and ${fmt(S.debt)} in student loans)`:''} and have ${fmt(S.retire)} in retirement savings. You can use retirement money to pay down debt, but you pay a penalty and taxes, and that money stops growing.</p><div class="row"><button class="btn ghost" id="cashout">Use retirement money</button></div></div>` : ''}
  <div class="row"><button class="btn" id="n" ${ready?'':'disabled'}>Lock in my choices</button><span>${ready?'':'Pick one option in each group.'}</span></div></section>`);
  const co=$('#cashout'); if(co) co.onclick=()=>cashOutScene(renderSetup);
  document.querySelectorAll('.choice[data-g]').forEach(btn=>btn.onclick=()=>{
    const g=btn.dataset.g, k=btn.dataset.o;
    if(g==='housing'){ const h=hs.find(o=>o.k===k); S.housing={...h, base: h.rent ? Math.round(h.cost/rentGrowth(age)) : h.cost} }
    if(g==='transport') S.transport=ts.find(o=>o.k===k);
    if(g==='care') S.care=k;
    if(g==='life') S.lifestyle=+k;
    if(g==='retire'){ const r=DATA.retire.rates[+k]; if(r && !S.retirePct){ event(`Started saving ${Math.round(r*100)}% of pay for retirement`); note('luck', `At ${S.age} you started saving ${Math.round(r*100)}% of your pay for retirement.`) } S.retirePct=r }
    const y=window.scrollY; renderSetup(); window.scrollTo(0,y);
  });
  $('#n').onclick=lockIn;
}
function lockIn(){
  const h=S.housing, prevK=S.prevHousingK;
  if(h.buy){ buyHome(h); return }
  if(prevK!==h.k) S.rentRaise=0;
  S.prevHousingK=h.k;
  if(h.rent && prevK!==h.k){ event(`Moved into a new rental (${h.t.replace(/^Rent a /,'')})`); housingSearch() }
  else beginMonth();
}
function buyHome(h){
  const home=DATA.homes[h.buy], w=S.id.wealth;
  let gift=0;
  if(DATA.wealth[w].gift && !S.flags.giftUsed){ gift=DATA.wealth[w].gift; S.flags.giftUsed=true; S.bank+=gift; note('wealth', `At ${S.age}, your family gave you ${fmt(gift)} toward a down payment on a home.`) }
  S.bank -= h.down + h.closing;
  S.home={n:home.n, value:home.price, loan:h.loan, pi:h.pi, monthly:h.cost, out:home.out};
  S.housing={k:'own', t:'Own', cost:h.cost, own:true, out:home.out, belong:6};
  S.prevHousingK='own';
  event(`Bought ${an(home.n)} ${home.n}`);
  note('luck', `At ${S.age} you bought ${an(home.n)} ${home.n} for ${fmt(home.price)}.`);
  interlude(`Age ${S.age} · Buying a home`, `<h2>You bought a home!</h2>
   <div class="result"><p>${gift?`${chip('wealth')} Your family gave you <b class="num">${fmt(gift)}</b> toward the down payment. `:''}You paid <b class="num">${fmt(h.down)}</b> down and <b class="num">${fmt(h.closing)}</b> in closing costs. Your monthly cost is <b class="num">${fmt(h.cost)}</b>, including the mortgage, property tax, and insurance.</p>
   <p>Each year you pay down the loan and the home gains value, so your wealth grows. The game assumes home values rise 1% a year faster than inflation (game estimate).</p></div>
   ${src(home.src)} ${src('rate')} ${src('ptax')}`, beginMonth);
}
function housingSearch(){
  const race=DATA.races[S.id.race];
  if(Math.random() < race.rentRisk){
    adj({money:-350});
    S.flags.rentHit=true;
    note('race', `At ${S.age}, apartment managers twice said a unit was "just rented," then kept showing it to others. You lost $350 in application fees and a week of searching.`);
    interlude(`Age ${S.age} · Apartment hunting`, `<h2>"Sorry, it's just been rented."</h2>
    <div class="callout id"><p>${chip('race')} As a ${DATA.races[S.id.race].label} renter, you heard this twice, at places that still had "For Rent" signs up a week later. (In this game, White renters never get this card.)</p>
    <p>This is based on real tests. In 2011, the City of Seattle hired the Fair Housing Center of Washington to send pairs of testers to 48 randomly chosen rental properties. Each pair had matching rental profiles except for race or disability. More than half of the properties showed evidence of illegal discrimination against Black or disabled renters. In 2015, Seattle's Office for Civil Rights ran 124 more tests and found different treatment more than half the time, based on race, national origin, sexual orientation, or gender identity.</p>
    ${src('rent2011')} ${src('rent2015')}</div>
    <div class="result"><p>You lost <b class="num">$350</b> in application fees and a week of searching, but you got a place. Your stress will be higher this month. (How often this happens to each group in the game is an estimate.)</p></div>`, beginMonth, 'Move in');
  } else {
    adj({money:-50});
    interlude(`Age ${S.age} · Apartment hunting`, `<h2>You got the first place you applied for.</h2><div class="result"><p>One $50 application fee and you're in.</p></div>`, beginMonth, 'Move in');
  }
}

/* ================= THE MONTH ================= */
function baselineMeters(){
  const b=budget(S.age), race=DATA.races[S.id.race];
  const burden = b.gross? b.housing/b.gross : 1;
  let st = 18 + (b.left<0?25: b.left<300?12: b.left<1000?5:0) + (burden>0.5?12: burden>0.3?5:0);
  st += (S.housing.stress||0) + (S.transport.stress||0);
  const co = careOptions(S.age).find(o=>o.k===S.care); if(co) st += (co.stress||0);
  if(S.school) st += S.school.mode==='full'?10:14;
  if(kidAges(S.age).some(a=>a<5)) st += S.partner?4:10;
  if(S.flags.rentHit){ st += 10; S.flags.rentHit=false }
  st += LIFE[S.lifestyle].stress||0;
  st += 3*(S.level||0);
  if(S.flags.drugs) st += 4;
  if(S.mental.therapy) st -= 6;
  if(S.mental.depression) st += 5;
  if(S.mental.anxiety) st += 3;
  let be = 30 + Math.min(25, race.bv*0.5) + (S.partner?10:0) + (allKidAges(S.age).length?5:0) + (S.housing.own?8:0) + (S.housing.belong||0) + (S.housing.out?-6:0);
  if(co && co.belong) be += co.belong;
  be += LIFE[S.lifestyle].belong||0;
  if(S.mental.depression) be -= 4;
  if(S.mental.anxiety) be -= 2;
  S.stress = clamp(Math.round(st),0,100); S.belong = clamp(Math.round(be),0,100);
  if(S.stress>=80 && !S.mental.depression){
    S.mental.depression = true;
    event('Diagnosed with depression');
    note('luck', `At ${S.age} your stress stayed very high. A doctor diagnosed you with depression. Therapy is available.`);
  }
  if(S.stress>=60 && !S.mental.anxiety && S.age>=26){
    S.mental.anxiety = true;
    event('Diagnosed with anxiety');
    note('luck', `At ${S.age} your stress was high. A doctor diagnosed you with anxiety. Therapy is available.`);
  }
}
function therapyNeeded(){ return S.stress>=80 || S.mental.depression || S.mental.anxiety }
function therapyOffer(){
  if(!therapyNeeded()) return beginMonth();
  const cost=120, cut=12;
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Mental health</span>
  <h2>You need help.</h2>
  <p>Stress is at <b>${S.stress}</b>${S.mental.depression?', and you have depression':''}${S.mental.anxiety?' and anxiety':''}. Therapy is $120 a month (game estimate) and can lower stress, help you sleep, and make the rest of the month easier.</p>
  <div class="choices">
    ${choiceBtn('yes','Start therapy this month',`You meet a therapist weekly; ${fmt(-cost)}/mo, and stress ${cut} lower. You can continue or pause later.`,money(-cost))}
    ${choiceBtn('no','Not now','You go on without support and the stress stays.', '')}
  </div>
  <p class="src">If you need real help: 988 Suicide and Crisis Lifeline.</p></section>`);
  bindChoices(k=>{
    if(k==='yes'){
      S.mental.therapy=true; adj({money:-cost, stress:-cut, belong:3});
      event('Started therapy');
      note('luck', `At ${S.age} you started therapy. It costs about ${fmt(cost)} a month and lowers stress by ${cut}.`);
      interlude(`Age ${S.age} · Therapy`, `<h2>You started seeing a therapist.</h2><div class="result"><p>${fmt(cost)} a month. You can continue or stop later.</p></div>`, beginMonth);
    } else { S.mental.therapy=false; beginMonth() }
  });
}
function beginMonthCards(){
  baselineMeters();
  if(therapyNeeded() && !S.mental.therapy) return therapyOffer();
  const b=budget(S.age);
  S.bank += b.left;
  S.cardIdx=0; S.cards=buildCards();
  interlude(`Age ${S.age} · One month in your life`, `<h2>Day 1: payday and bills</h2>
    <p>Your paycheck${S.partner?'s':''} came in and your regular bills went out. ${S.bank<0?`Your savings ran out, so you owe <b class="num">${fmt(cardDebt())}</b> on a credit card.`:`You have <b class="num">${fmt(S.bank)}</b> in savings.`}${S.debt>0?` You also owe <b class="num">${fmt(S.debt)}</b> in student loans.`:''}</p>
    <p>Your stress starts at <b class="num">${S.stress}</b> and your belonging at <b class="num">${S.belong}</b>, based on your budget, home, commute, and family. Now life happens: ${S.cards.length} things come up this month.</p>`, nextCard, 'Start the month');
}
function hourly(){ return (S&&S.job?mySalary():0)/2080 || 15 }
function oopMax(){ const t=insurance().tier; return t==='strong'?3000:t==='standard'?6000:t==='basic'?10150:0 }
function bigSurprise(ages){
  const w=S.id.wealth, age=S.age, hasCar=['car','mix','newcar','mixnew'].includes(S.transport.k);
  const working = !(S.school&&S.school.mode==='full');
  const weekly = mySalary()/52, pfml = Math.min(1647, weekly*0.9);
  const opts=[];
  // Gentle mode (teacher setting) removes serious-illness and death surprises.
  const HEAVY=['cancer','parent','surgery','kidhosp'];
  const add=(id,wt,cond,make)=>{ if(cond && !S.bigSeen.has(id) && !(S.gentle && HEAVY.includes(id))) opts.push({id,wt,make}) };
  const oop=oopMax(), insName = insurance().tier ? DATA.ben[insurance().tier].label.toLowerCase() : 'Apple Health';
  add('cancer',1.4, S.partner && age>=28, ()=>{
    const pTH = monthlyTakeHome(partnerSalary(),0), pW=partnerSalary()/52, pPF=Math.min(1647,pW*0.9);
    const lost = Math.round(pTH*9 - pPF*12*0.85);
    return {h:'Your partner has cancer',p:`Your partner is diagnosed with cancer. The doctors caught it early and the treatment plan is good, but it means surgery and months of treatment. With your ${insName}, your family pays up to ${fmt(oop)} for the year. Your partner can't work for about 9 months. Washington's Paid Family and Medical Leave pays them up to 12 weeks, but after that their paycheck stops (about ${fmt(lost)} lost).`,src:'pfml',o:[
      {t:'Take 12 weeks of paid family leave to care for them',c:-oop,d:{stress:14,belong:8},ff:-lost-Math.round(12*Math.max(0,weekly-pfml)*0.85),s:`Washington's program pays you up to $1,647 a week while you care for a family member, so you lose about ${fmt(12*Math.max(0,weekly-pfml)*0.85)}.`},
      {t:'Keep working full time and lean on friends and family',c:-oop,d:{stress:22,belong:3},ff:-lost}],
      note:'luck', noteText:`At ${age} your partner was treated for cancer. Medical bills and lost pay cost your family about ${fmt(oop+lost)}. After treatment, your partner recovered.`, ev:'Partner treated for cancer and recovered'};
  });
  add('leave',1.1, S.partner, ()=>({h:'Your partner breaks up with you',p:`Your partner tells you they're leaving. They move out at the end of the month and take their half of your shared savings${S.home?', and you have to borrow to buy out their share of the home':''}.${ages.length?' The kids live with you most of the time, and your ex pays child support.':''}`,o:[
      {t:'Lean on friends and family',c:-200,d:{stress:22,belong:-6},leave:true},{t:'Handle it on your own',c:0,d:{stress:26,belong:-10},leave:true}], ev:'Partner left'}));
  add('parent',1.3, age>=30 && !S.flags.parentDied, ()=>{
    const inh=[0,0,60000,300000][w], share=[3900,2600,0,0][w];
    const timeOff = insurance().tier==='strong' ? 0 : Math.round(weekly*0.85);
    return {h:'Your mom dies',chip:'wealth',p:`Your mom dies after a sudden heart attack. You fly home for the funeral and spend a week with your family.${share?` Your family doesn't have savings for it, so you and your siblings split the funeral cost. Your share is ${fmt(share)}. (A funeral with a burial costs a median of $7,848.)`:''}${inh?` She left money to her children. You inherit ${fmt(inh)}.`:''}${timeOff?` Your job has no paid bereavement leave, so the week off costs you ${fmt(timeOff)} in pay.`:' Your job gives you paid bereavement leave.'}`,src:share?'funeral':null,o:[
      {t:'Say goodbye and be with your family',c:inh-share-timeOff,d:{stress:16,belong:-2},parentDied:true}],
      note:'wealth', noteText: inh?`At ${age} your mom died and you inherited ${fmt(inh)}. Families with wealth pass it down; this is one way wealth gaps last across generations.`:`At ${age} your mom died. Your family had no savings for the funeral, so your share cost ${fmt(share)}.`, ev:'Mom died'+(inh?`; inherited ${fmt(inh)}`:'')};
  });
  add('surgery',1, true, ()=>({h:'Emergency surgery',p:`Severe stomach pain sends you to the emergency room. It's appendicitis, and you need surgery tonight. With your ${insName}, you pay ${fmt(oop)}. You're out of work for two weeks, using paid sick leave and medical leave.`,src:'oop',o:[{t:'Pay the hospital',c:-oop,d:{stress:10}}], note:'luck', noteText:`At ${age} you had emergency surgery that cost you ${fmt(oop)} with your ${insName}.`, ev:'Emergency surgery'}));
  add('kidhosp',1, ages.length>0, ()=>({h:'Your child is in the hospital',p:`Your youngest has pneumonia and spends four days in the hospital. With your ${insName}, you pay ${fmt(Math.round(oop*0.7))}. You take a week of paid family leave to be with them.`,src:'pfml',o:[{t:'Stay by their side',c:-Math.round(oop*0.7)-Math.round(Math.max(0,weekly-pfml)*0.85),d:{stress:14,belong:4}}], note:'luck', noteText:`At ${age} your child was in the hospital. Your insurance level decided how much it cost.`, ev:'Child hospitalized'}));
  add('crash',1, hasCar, ()=>({h:'A car crash',p:`Someone runs a red light and hits your car. You're bruised but okay. The car is totaled. Insurance pays what the car was worth, but after your $1,000 deductible and the gap to replace it, you're out about $4,000.`,o:[{t:'Replace the car',c:-4000,d:{stress:14}},{t:'Take the bus for a few months',c:-1000,d:{stress:18}}], ev:'Car totaled in a crash'}));
  add('storm',0.8, true, ()=>({h:'A windstorm knocks out the power',p:`A "bomb cyclone" brings 70 mph winds. Trees fall across Bellevue and your power is out for six days, like the real storm in November 2024. The food in your fridge spoils.${S.home?' A fallen tree damages your roof; after insurance you pay the $2,500 deductible.':''}`,src:'storm',o:[
      {t:'Stay in a hotel until the power is back',c:-(250+900+(S.home?2500:0)),d:{stress:6}},{t:'Stay with friends or family',c:-(250+(S.home?2500:0)),d:{stress:10,belong:4}},{t:'Tough it out with candles and blankets',c:-(250+(S.home?2500:0)),d:{stress:18}}], ev:'Windstorm power outage'}));
  add('burglary',0.7, !!S.housing.rent, ()=>{ const ins=S.ongoing.some(x=>x[0]==='Renters insurance');
    return {h:'Your apartment is broken into',p:`Someone breaks in while you're at work and takes your laptop, TV, and bike. Replacing them costs about $2,200.${ins?' Your renters insurance pays for everything except a $500 deductible.':' You have no renters insurance, so you pay for all of it.'}`,o:[{t:ins?'File the claim':'Replace what you need',c:ins?-500:-2200,d:{stress:14}}], ev:'Apartment burglary'} });
  add('scam',0.6, true, ()=>({h:'Identity theft',p:'Someone stole your identity and opened two credit cards in your name. The bank refunds most of it, but it takes months of phone calls and paperwork.',o:[{t:'Freeze your credit and fight the charges',c:-300,d:{stress:12}}], ev:'Identity theft'}));
  add('eldercare',1, age>=36 && w<=1 && !S.flags.parentDied, ()=>({h:'Your dad can no longer live alone',chip:'wealth',p:"After a fall, your dad can't live on his own. Your parents have no savings for assisted living, which can cost thousands a month.",o:[
      {t:'Move him in with you',c:-500,mo:-300,d:{stress:16,belong:5},ongo:['Caring for your dad',300]},{t:'Help pay for an assisted living home',c:0,mo:-1200,d:{stress:8},ongo:['Help with Dad\'s assisted living',1200]},{t:'Your siblings take turns caring for him',c:0,d:{stress:8,belong:-4}}],
      note:'wealth', noteText:`At ${age} your dad needed care, and your family had no savings to pay for it.`, ev:'Dad needed care'}));
  add('windfall',0.8, true, ()=>{ const amt=[0,2000,15000,50000][w];
    if(S.gentle) return amt ? {h:'A gift from your grandmother',chip:'wealth',p:`Your grandmother sold her old house and moved to a smaller place. She gives each grandchild ${fmt(amt)} "to get a good start."`,o:[{t:'Put it in savings',c:amt,d:{stress:-5,belong:2}}],note:'wealth',noteText:`At ${age} your grandmother gave you ${fmt(amt)}. Families with wealth pass it down; this is one way wealth gaps last across generations.`, ev:`Gift of ${fmt(amt)} from grandmother`}
      : {h:'A box from your grandmother',chip:'wealth',p:'Your grandmother mails you a box of old family photos and a long letter about growing up. She has no money to give, but she wants you to know where your family came from.',o:[{t:'Call her to say thank you',c:0,d:{stress:-3,belong:5}}], ev:'Letter and photos from grandmother'};
    return amt ? {h:'A gift from your grandmother',chip:'wealth',p:`Your grandmother leaves each grandchild ${fmt(amt)} in her will.`,o:[{t:'Put it in savings',c:amt,d:{stress:-5}}],note:'wealth',noteText:`At ${age} your grandmother left you ${fmt(amt)}.`, ev:`Inherited ${fmt(amt)} from grandmother`}
      : {h:'Your grandmother passes away',chip:'wealth',p:'Your grandmother dies peacefully at 91. She leaves you her old sewing machine and a box of family photos, but no money.',o:[{t:'Keep the photos close',c:0,d:{stress:6,belong:3}}], ev:'Grandmother died'}; });
  // Your building is sold and the new owner raises rent as much as state law allows.
  add('sold',1, !!S.housing.rent, ()=>{ const rent=budget(age).housing, up=Math.round(rent*0.09683);
    return {h:'Your building was sold',p:`A new company bought your building. Your notice says rent goes up ${fmt(up)} a month, from ${fmt(rent)} to ${fmt(rent+up)}. That is 9.683%, the most Washington's new law allows for most rentals in 2026. Before 2025, there was no limit at all.`,src:'rentcap',o:[
      {t:'Stay and pay the higher rent',c:0,mo:-up,d:{stress:8},rr:up},
      {t:'Move to a similar place nearby',c:-1500,d:{stress:12,belong:-3},rr:'move',s:'Movers, a new deposit, and time off work cost about $1,500 (game estimate). You keep paying about what you pay now.'}],
      note:'luck', noteText:`At ${age} your building was sold and the new owner raised the rent by the legal maximum.`, ev:'Building sold; rent raised 9.7%'} });
  // Your partner loses their job for a few months.
  add('partnerjob',1, S.partner && S.care!=='stayhome', ()=>{ const ps=partnerSalary(), lost=Math.round((monthlyTakeHome(ps,0)-uiMonthly(ps))*4);
    return {h:'Your partner is laid off',p:`Your partner's company cut jobs, and your partner was let go. Washington unemployment pays them about ${fmt(uiMonthly(ps))} a month while they look. It takes about 4 months to find new work (game estimate), so your household loses about ${fmt(lost)}.`,src:'esd',o:[
      {t:'Cut back on spending until they find work',c:0,ff:-Math.round(lost*0.7),d:{stress:12,belong:-2},s:'Fewer meals out and no trips for a while. You save about 30% of the lost pay.'},
      {t:'Keep life normal and use savings',c:0,ff:-lost,d:{stress:7}}],
      note:'luck', noteText:`At ${age} your partner was laid off for about 4 months, costing your household about ${fmt(lost)}.`, ev:'Partner laid off for 4 months'} });
  // A good year at a company with strong benefits.
  add('bonus',0.7, working && S.job && S.job.ben==='strong' && !S.unemployed, ()=>{ const amt=Math.round(mySalary()*0.05*0.72);
    const o=[{t:'Put it all in savings',c:amt,d:{stress:-5}},{t:'Save half, spend half on something fun',c:Math.round(amt/2),d:{stress:-7,belong:4}}];
    if(S.debt>0) o.push({t:'Pay down your student loans',c:0,payDebt:amt,d:{stress:-6},s:'Your loan payment stays the same, but you pay it off sooner.'});
    return {h:'A year-end bonus',p:`Your employer had a strong year and gives everyone a bonus of 5% of their pay. After taxes, you get ${fmt(amt)}. (Bonus size is a game estimate. Many lower-wage jobs never pay bonuses.)`,o, ev:`Year-end bonus of ${fmt(amt)}`} });
  add('offer',0.8, working && age>=25 && age<=40, ()=>({h:'A job offer in Seattle',p:'A recruiter offers you the same kind of job at a Seattle company for about 12% more pay. The commute would add an hour a day.',o:[{t:'Take the offer',c:0,d:{stress:8},bump:0.12,ev2:'Took a higher-paying job in Seattle'},{t:'Stay where you are',c:0,d:{}}]}));
  // The stock market crashes: retirement money drops; what you do next decides whether you recover.
  add('crash',0.9, (S.retire||0)>=3000, ()=>{ const lost=Math.round(S.retire*0.33);
    return {h:'The stock market crashes',p:`Stock prices fall fast as the economy slows down. Your retirement account drops from ${fmt(S.retire)} to ${fmt(S.retire-lost)}. In the 2008 crash, stock prices fell by more than half from their high to their low. A retirement account with a mix of stocks and bonds might lose about a third. (Your loss is a game estimate.)`,src:'fedcrash',o:[
      {t:'Leave it invested and keep saving',c:0,d:{stress:8},crash:'stay',crashLost:lost,moText:'Down for now',s:'In the past, the U.S. stock market has come back after every crash, but sometimes it took years. No one knows for sure.'},
      {t:'Sell everything so it stops falling',c:0,d:{stress:2},crash:'sell',crashLost:lost,moText:'Loss locked in',s:'Your account stops dropping, but if prices go back up, you miss it.'},
      {t:'Leave it invested, but stop adding money for now',c:0,d:{stress:5},crash:'pause',crashLost:lost,moText:'Down for now',s:'You keep more of each paycheck, but you lose the free money from your employer. You can start saving again on your next budget screen.'}],
      note:'luck', noteText:`At ${age} the stock market crashed and your retirement account lost ${fmt(lost)}.`, ev:'Stock market crash'} });
  // A year of high inflation: in this game prices on bills stay the same, so inflation shows up as money losing value.
  add('inflation',0.9, true, ()=>{ const n={sav:Math.max(0,Math.round(S.bank*0.064)), ret:Math.round((S.retire||0)*0.064), loans:Math.round(S.debt*0.064), pay:Math.round(budget(age).takeHome*12*0.017)};
    return {h:'Prices jump',inflNums:n,p:`Prices rise fast all year. In 2022, prices went up 6.4% while average pay went up only 4.6%. In this game your bills stay the same, so inflation shows up as your money losing value:${n.sav?` your savings can buy ${fmt(n.sav)} less,`:''}${n.ret?` your retirement account loses ${fmt(n.ret)} of buying power,`:''} and your pay falls behind prices by about ${fmt(n.pay)} this year.${n.loans?` One upside: your student loans shrink by ${fmt(n.loans)}, because you pay them back with cheaper dollars.`:''}`,src:'realer',o:[
      {t:'Ask your boss for a raise that keeps up with prices',c:0,d:{stress:6},infl:'ask',s:'Some employers say yes. Many say no.'},
      {t:'Cut back on everyday spending this year',c:0,ff:-Math.round(n.pay/2),d:{stress:8,belong:-2},infl:'cut'},
      {t:'Keep living the same way',c:0,ff:-n.pay,d:{stress:3},infl:'same'}],
      note:'luck', noteText:`At ${age} a year of high inflation shrank what your money could buy.`, ev:'A year of high inflation'} });
  add('sibling',0.6, true, ()=>({h:'Your brother needs a place to stay',p:'Your younger brother lost his job and his apartment. He asks to sleep on your couch for three months.',o:[{t:'Let him stay',c:-900,d:{stress:10,belong:6}},{t:'Help him with a deposit somewhere else',c:-1500,d:{stress:4,belong:3}},{t:'Say no',c:0,d:{stress:6,belong:-6}}], ev:'Brother stayed for three months'}));
  if(!opts.length || Math.random()>0.55) return null;
  const tot=opts.reduce((a,o)=>a+o.wt,0); let r=Math.random()*tot, pickd=opts[0];
  for(const o of opts){ r-=o.wt; if(r<0){ pickd=o; break } }
  S.bigSeen.add(pickd.id);
  const card=pickd.make(); return {id:pickd.id, chip:card.chip||'luck', big:true, ...card};
}
// Planted when stress ends a month at 75 or higher; shows up next chapter.
function BURNOUT(){ return {chip:'luck',h:'Running on empty',p:'For months your stress has been very high. You are tired all the time, snapping at people you love, and making mistakes at work.',o:[
  {t:'Take a week of vacation to rest',c:0,d:{stress:-14,belong:3},s:'Jobs with strong benefits give paid vacation. Without it, a week off means a week without pay.',vacation:true},
  {t:'Drop some commitments and say no more often',c:0,d:{stress:-8,belong:-3}},
  {t:'Push through',c:0,d:{stress:8,belong:-4}}]} }
function buildCards(){
  const w=S.id.wealth, race=DATA.races[S.id.race], ages=allKidAges(S.age), T=S.transport.k, atHome=S.housing.k==='parents', age=S.age;
  const fixed=[], pool=[];
  const groc = Math.round((450*(S.partner?2:1) + 250*ages.length)/4.33); // one week of the game's grocery budget
  // Each family-wealth level has several family cards. One shows up each month, and none repeats until all have been seen.
  const famPick=(list)=>{ const fresh=list.filter(c=>!S.seen.has(c.id)); const c=(fresh.length?fresh:list)[Math.floor(Math.random()*(fresh.length?fresh.length:list.length))]; S.seen.add(c.id); return c };
  if(age<32){
    const fam=[
      [atHome?{id:'f0a',h:'A talk at home',p:"Your mom's hours at work got cut. She asks if you can pay $300 more toward rent this month.",o:[{t:'Pay the extra $300',c:-300,d:{belong:6,stress:3}},{t:'Pay $100 more',c:-100,d:{stress:6}},{t:"Tell her you can't",c:0,d:{stress:14,belong:-6}}]}
             :{id:'f0a',h:'A call from home',p:"Your mom's hours at work got cut. She asks if you can send $300 so she can pay rent.",o:[{t:'Send $300',c:-300,d:{belong:6,stress:3}},{t:'Send $100',c:-100,d:{stress:6}},{t:"Tell her you can't",c:0,d:{stress:12,belong:-5}}]},
       {id:'f0b',h:'Your little brother needs shoes',p:"Your little brother's shoes have holes in them, and your parents can't buy new ones until next month. He asks if you can help.",o:[{t:'Buy him new shoes',c:-70,d:{belong:5}},{t:'Take him to a thrift store',c:-20,d:{belong:3,stress:2}},{t:"Tell him you can't right now",c:0,d:{stress:6,belong:-4}}]},
       {id:'f0c',h:'A shutoff notice',p:"Your parents got a notice from the power company. They are $240 behind and the power could be shut off.",o:[{t:'Pay the $240',c:-240,d:{belong:5,stress:4}},{t:'Pay half',c:-120,d:{stress:6,belong:2}},{t:'Help them call and ask for a payment plan',c:0,d:{stress:5,belong:2},s:'Many utilities offer payment plans if you call before a shutoff. (Game estimate.)'}]}],
      [atHome?{id:'f1a',h:'A talk at home',p:'The family car broke down. Your parents ask you to chip in $150 for the repair.',o:[{t:'Chip in',c:-150,d:{belong:4}},{t:'Say no',c:0,d:{stress:6,belong:-3}}]}
             :{id:'f1a',h:'A call from home',p:"Your parents' car broke down. They ask to borrow $150 until payday.",o:[{t:'Lend it',c:-150,d:{belong:4}},{t:'Say no',c:0,d:{stress:5,belong:-2}}]},
       {id:'f1b',h:'Grandma turns 80',p:"Your family is throwing a big birthday dinner for your grandma. Everyone brings a dish.",o:[{t:'Bring a dish',c:-25,d:{belong:6,stress:-3}},{t:'Too busy this time',c:0,d:{belong:-3}}]},
       {id:'f1c',h:'Moving day',p:"Your aunt is moving to a cheaper apartment in Renton and needs help on Saturday.",o:[{t:'Help all day',c:0,d:{belong:6,stress:3}},{t:'Chip in $60 for the moving truck',c:-60,d:{belong:3}},{t:"Say you can't make it",c:0,d:{belong:-3}}]}],
      [atHome?{id:'f2a',h:'Groceries at home',p:'Your parents stock the fridge and tell you not to worry about groceries this week.',o:[{t:'Say thanks',c:groc,d:{belong:4,stress:-3}},{t:'Insist on buying your own',c:0,d:{stress:2}}]}
             :{id:'f2a',h:'Sunday dinner',p:'Your parents invite you over and send you home with a week of groceries.',o:[{t:'Go',c:groc,d:{belong:5,stress:-4}},{t:'Too busy this week',c:0,d:{}}]},
       {id:'f2b',h:'On the family phone plan',p:'Your parents add you to their family phone plan, which saves you about $60 this month.',o:[{t:'Say thanks',c:60,d:{belong:3,stress:-2}}]},
       {id:'f2c',h:'Dinner out',p:'Your parents take you to a nice restaurant downtown for your birthday and pick up the check.',o:[{t:'Go',c:0,d:{belong:5,stress:-4}},{t:'Skip it',c:0,d:{belong:-2}}]}],
      [{id:'f3a',h:'A weekend away',p:'Your parents offer to pay for a family weekend at their cabin near Snoqualmie Pass.',o:[{t:'Go',c:0,d:{belong:6,stress:-10}},{t:'Stay home and rest',c:0,d:{stress:-3}}]},
       {id:'f3b',h:'A family trip',p:'Your parents invite you on a week-long family trip to Hawaii, all paid for.',o:[{t:'Go',c:0,d:{belong:6,stress:-10}},{t:'Stay home this time',c:0,d:{}}]},
       {id:'f3c',h:'A cushion from your parents',p:'Your parents send you $2,000 "for emergencies, so you never have to worry."',o:[{t:'Thank them',c:2000,d:{belong:3,stress:-6}}]}]
    ];
    fixed.push({chip:'wealth',...famPick(fam[w])});
  } else {
    const fam=[
      [S.familySupport?{id:'g0a',h:'Still helping your parents',p:`You are still sending your parents ${fmt(S.familySupport)} a month. Your dad's back hasn't healed.`,o:[{t:'Keep helping',c:0,d:{belong:3,stress:3}},{t:'Ask your siblings to share the cost',c:0,mo:Math.round(S.familySupport/2),d:{stress:5},fs:Math.round(S.familySupport/2)}]}
        :{id:'g0a',h:'Your parents need help',p:"Your dad hurt his back and can't work anymore. Your parents ask for help paying their rent every month.",o:[{t:'Send $400 a month',c:0,mo:-400,d:{belong:6,stress:6},fs:400},{t:'Send $150 a month',c:0,mo:-150,d:{stress:9},fs:150},{t:"Tell them you can't",c:0,d:{stress:15,belong:-8}}]},
       {id:'g0b',h:'Your mom needs a car',p:"Your mom's car died for good, and she can't get to work or her doctor's appointments. A cheap used car costs $3,000.",o:[{t:'Pay $1,500 and your siblings pay the rest',c:-1500,d:{belong:5,stress:5}},{t:'Give $500',c:-500,d:{stress:7}},{t:'Help her plan bus routes instead',c:0,d:{stress:6,belong:-2}}]}],
      [{id:'g1a',h:'Your parents need help',p:"Your parents' furnace died in January. They ask if you can help pay for a new one.",o:[{t:'Pay $1,500',c:-1500,d:{belong:5,stress:3}},{t:'Pay $500',c:-500,d:{stress:5}},{t:"Say you can't",c:0,d:{stress:9,belong:-4}}]},
       {id:'g1b',h:'A hospital bill',p:"Your dad spent a night in the hospital. After insurance, your parents owe $1,800 and ask their kids to help.",o:[{t:'Pay $900',c:-900,d:{belong:5,stress:4}},{t:'Pay $300',c:-300,d:{stress:6}},{t:"Say you can't",c:0,d:{stress:9,belong:-4}}]}],
      [{id:'g2a',h:'Help from your parents',p:ages.length?"Your parents offer to pay for the kids' summer camp.":'Your parents offer to pay for a trip for your birthday.',o:[{t:'Accept',c:1200,d:{belong:4,stress:-6}},{t:'Politely say no',c:0,d:{}}]},
       {id:'g2b',h:'Help from your parents',p:ages.length?'Your parents take the kids for a week in the summer, so you skip a week of child care.':'Your parents buy your plane ticket home for the holidays.',o:[{t:'Say thanks',c:ages.length?400:450,d:{belong:5,stress:-5}}]}],
      [S.flags.bigGift?{id:'g3a',h:'Help from your parents',p:'Your parents take everyone on a week-long family vacation, all paid for.',o:[{t:'Go',c:0,d:{belong:6,stress:-10}}]}
        :{id:'g3a',h:'Help from your parents',p:'Your parents give you $20,000 "to help with the future."',o:[{t:'Thank them',c:20000,d:{belong:4,stress:-8},big:true}]},
       {id:'g3b',h:'Help from your parents',p:S.debt>0?'Your parents offer to pay off $10,000 of your student loans.':'Your parents give you $10,000 for your birthday.',o:S.debt>0?[{t:'Thank them',c:0,payDebt:10000,d:{belong:4,stress:-8}}]:[{t:'Thank them',c:10000,d:{belong:4,stress:-6}}]}]
    ];
    fixed.push({chip:'wealth',...famPick(fam[w])});
  }
  const why=`About ${race.bv}% of Bellevue shares your racial or ethnic background.`;
  const BELONG = race.bv>=30 ? [
      {chip:'race',h:'A festival close to home',p:`${why} This weekend there is a festival for your community at Bellevue's Downtown Park, 10 minutes away. You'll see friends, neighbors, and coworkers there. Living here, it's easy to find people, food, and faith communities from your culture.`,o:[{t:'Go and buy some food',c:-20,d:{belong:8,stress:-3}},{t:"Skip it. There'll be another one soon.",c:0,d:{}}],src:'census'},
      {chip:'race',h:'Food that tastes like home',p:`${why} Stores and restaurants near you sell the foods your family grew up cooking. A neighbor who shares your background invites you to a holiday meal.`,o:[{t:'Bring a dish and go',c:-25,d:{belong:7,stress:-3}},{t:'Stay home this time',c:0,d:{}}],src:'census'},
      {chip:'race',h:'Planning a cultural night',p:`${why} Many of your coworkers share your background. They ask you to help plan a cultural night at work.`,o:[{t:'Help plan it',c:0,d:{belong:7,stress:3}},{t:'Just go to it',c:0,d:{belong:4}},{t:'Skip it',c:0,d:{belong:-2}}],src:'census'}]
    : race.bv>=5 ? [
      {chip:'race',h:'A festival in another city',p:`${why} There is a festival for your community this weekend, but it's in Seattle, about 40 minutes away. In Bellevue there are only a few stores, events, or faith communities for your culture, so you usually travel to find them.`,o:[{t:'Make the trip',c:-30,d:{belong:8,stress:3}},{t:'Stay in Bellevue this weekend',c:0,d:{belong:-3}}],src:'census'},
      {chip:'race',h:'A long drive for groceries',p:`${why} The closest store that sells the foods your family cooks is about 30 minutes away.`,o:[{t:'Make the trip',c:-40,d:{belong:5,stress:3}},{t:'Make do with the store nearby',c:0,d:{belong:-3,stress:2}}],src:'census'},
      {chip:'race',h:'Finding your people',p:`${why} A community group for people who share your background meets once a month in Kent, about 30 minutes away.`,o:[{t:'Join the group',c:-20,d:{belong:7,stress:3}},{t:'Maybe later',c:0,d:{belong:-2}}],src:'census'}]
    : [
      {chip:'race',h:'The only one',p:`${why} At work and in your neighborhood you are often the only one. The nearest gathering for your community this weekend is in another city, over an hour away by bus.`,o:[{t:'Travel to the gathering',c:-40,d:{belong:9,stress:4}},{t:'Start a club for people like you at work',c:0,d:{belong:5,stress:7}},{t:'Stay home',c:0,d:{belong:-8,stress:3}}],src:'census'},
      {chip:'race',h:'Mixed up again',p:`${why} For the third time this month, a coworker calls you by the name of the only other person at work who shares your background.`,o:[{t:'Correct them calmly',c:0,d:{belong:-1,stress:5}},{t:'Let it go',c:0,d:{belong:-4,stress:4}},{t:'Talk to your manager about it',c:0,d:{belong:1,stress:7}}],src:'census'},
      {chip:'race',h:'Building something new',p:`${why} The Bellevue library asks for volunteers to plan a heritage night for your community, the first one in years.`,o:[{t:'Help plan it',c:0,d:{belong:8,stress:4}},{t:'Go if it happens',c:0,d:{belong:2}},{t:'Skip it',c:0,d:{belong:-2}}],src:'census'}];
  if(S.chNum%2===1) fixed.push(BELONG[Math.floor((S.chNum-1)/2)%3]);
  // Layoff
  if(Math.random() < layoffP()){
    const L = DATA.layoffs[S.job.key] || DATA.layoffs.other, fb=DATA.jobs[L.fall];
    const sev = Math.round(L.sev*budget(age).myTH);
    const ui = uiMonthly(mySalary());
    S.layoffInfo={sev,ui,fall:L.fall};
    fixed.push({chip:'luck',h:'Layoff notice',p:`${L.why}${L.fact?' '+L.fact:''} You lose your job at the end of this month.${sev?` You get ${fmt(sev)} in severance pay (${L.sev} month${L.sev>1?'s':''} of take-home pay).`:' There is no severance pay.'}`,src:L.src,o:[
      {t:'Collect unemployment while you look for a job in your field',c:sev,d:{stress:18},layoff:'ui',s:`Washington unemployment pays you about ${fmt(ui)} a month. Finding a new job takes about 6 months (game estimate), and you lose 2 years of seniority.`,src:'esd'},
      {t:`Take a job you can get right away: ${fb.n.toLowerCase()}`,c:sev,d:{stress:9,belong:-2},layoff:'fall',s:`Pays about ${fmt(salaryFor(fb,S.id.gender,0))} a year. You can switch back to your field next chapter.`}]});
  }
  const big = bigSurprise(ages); if(big) fixed.push(big);
  if(big && Math.random()<0.25){ const b2=bigSurprise(ages); if(b2 && b2.id!==big.id) fixed.push(b2) }
  const ins=insurance(age), hasCar=['car','mix','newcar','mixnew'].includes(T), usedCar=['car','mix'].includes(T);
  const sitter = ages.length && S.care!=='gma' && S.care!=='stayhome' ? 90 : 0;
  const working = !(S.school&&S.school.mode==='full');
  const P=(id,cond,card)=>{ if(cond) pool.push({id,...card}) };
  // --- social life ---
  P('bday', age<35, {h:"A friend's birthday dinner",p:'Your closest friend is having a birthday. Everyone is meeting at a restaurant downtown.',o:[{t:'Go and order dinner',c:-75,d:{belong:8}},{t:'Suggest a potluck at your place instead',c:-15,d:{belong:4,stress:2}},{t:'Skip it',c:0,d:{belong:-6},flag:'skipSocial'}]});
  P('wedding', age>=24&&age<=38, {h:'A wedding in California',p:'Your college roommate is getting married in San Diego. Flights, a hotel, and a gift add up to about $1,100.',o:[{t:'Go to the wedding',c:-1100,d:{belong:9,stress:-2}},{t:'Send a gift and a video message',c:-120,d:{belong:2}},{t:'Skip it',c:0,d:{belong:-6},flag:'skipSocial'}]});
  P('concert', age<32, {h:'Concert tickets',p:'A band you love is playing in Seattle. Tickets are $95, plus $25 for parking or a rideshare.',o:[{t:'Go with friends',c:-120,d:{belong:5,stress:-6}},{t:'Skip it',c:0,d:{stress:2}}]});
  P('block', age>=33, {h:'A neighborhood block party',p:'Your neighbors are throwing a block party. Everyone brings a dish.',o:[{t:'Bring a dish and stay late',c:-30,d:{belong:7,stress:-2}},{t:'Stay home',c:0,d:{belong:-3}}]});
  P('vacation', age>=26, {h:'Summer vacation',p:ages.length?'Everyone wants a summer trip. A week in Hawaii for the family costs about $5,000. Camping at a state park costs about $400.':'Your friends are planning a week in Mexico. It costs about $2,200. A weekend camping trip costs about $250.',o:[{t:ages.length?'Hawaii':'Mexico with friends',c:ages.length?-5000:-2200,d:{belong:6,stress:-12}},{t:'Go camping',c:ages.length?-400:-250,d:{belong:4,stress:-7}},{t:'Stay home this year',c:0,d:{stress:3}}]});
  P('gym', age<40, {h:'A gym membership',p:'A gym near your work offers a membership for $65 a month.',o:[{t:'Sign up',c:0,mo:-65,d:{stress:-5},ongo:['Gym membership',65]},{t:'Run outside for free',c:0,d:{stress:-2}}]});
  P('pet', age>=24 && !S.ongoing.some(x=>x[0]==='Dog'), {h:'A dog?',p:ages.length?'Your kids beg for a dog. Adopting one from the shelter costs $500, and food, vet visits, and pet insurance cost about $150 a month.':'A friend is fostering a sweet dog that needs a home. Adoption is $500, then about $150 a month.',o:[{t:'Adopt the dog',c:-500,mo:-150,d:{belong:6,stress:-3},ongo:['Dog',150],pend:{p:0.5,card:{chip:'luck',h:'The dog ate a sock',needDog:true,p:'Your dog swallowed a sock and needs emergency surgery to remove it. The bill is $3,000. Because you pay for pet insurance every month, insurance covers most of it. You pay the $600 that is left. (Costs are game estimates.)',o:[{t:'Pay for the surgery',c:-600,d:{stress:8,belong:2}}]}}},{t:'Not right now',c:0,d:{}}]});
  // --- health ---
  P('tooth', true, {h:'A toothache',p:`A back tooth has hurt for three days. ${ins.tier?`With your ${DATA.ben[ins.tier].label.toLowerCase()}, a dentist visit costs you ${fmt(ins.dental)}.`:`Apple Health covers the visit, but the closest dentist taking new Apple Health patients is a month out.`}`,o:[{t:'See a dentist now',c:-ins.dental,d:{stress:-3}},{t:'Wait and hope it goes away',c:0,d:{stress:8},f:'tooth'}]});
  P('knee', true, {h:'You hurt your knee',p:`You twisted your knee on the stairs and need an urgent care visit and an X-ray.${ins.tier?` With your ${DATA.ben[ins.tier].label.toLowerCase()}, it costs ${fmt(ins.tier==='strong'?100:ins.tier==='standard'?350:700)}.`:''}`,o:[{t:'Go to urgent care',c:-(ins.tier==='strong'?100:ins.tier==='standard'?350:ins.tier?700:0),d:{stress:4}},{t:'Ice it and limp for a week',c:0,d:{stress:10},f:'knee'}]});
  P('flu', true, {h:'The flu',p:`You wake up with a fever and can't go to work for three days.`,src:'sick',o:[{t:'Use paid sick days and rest',c:0,d:{stress:2},s:'Washington law gives almost every worker paid sick leave.'},{t:'Go to work sick to save your sick days',c:0,d:{stress:9,belong:-3}}]});
  // --- work ---
  P('extra', working, {h:'Extra work',p:`Your boss asks you to work this Saturday. You'd earn about ${fmt(hourly()*8*0.8)} after taxes.${sitter?' You would need a sitter for $90.':''}`,o:[{t:'Work the extra day',c:Math.round(hourly()*8*0.8)-sitter,d:{stress:9,belong:-2},flag:'extraYes'},{t:'Keep your Saturday',c:0,d:{stress:-3},flag:'extraNo'}]});
  P('course', working && age<40, {h:'An online course',p:'A certificate course in your field costs $400 and takes about 5 hours a week for two months. It could help you earn more.',o:[{t:'Take the course',c:-400,d:{stress:6},xp:1,s:'Counts as an extra year of experience toward your pay.'},{t:'Skip it',c:0,d:{}}]});
  P('promo', working && age>=26 && S.years>=3 && (S.level||0)<2 && S.job.up, {h:'A promotion opens up',p:`A higher position opened at work. Applying means extra projects and weekend prep for a month.${(S.flags.extraYes||0)>=1?' Your boss remembers that you stepped up before.':''}${(S.flags.extraNo||0)>=2?' Your boss has noticed you usually say no to extra work.':''}`,o:[{t:'Go for it',c:0,d:{stress:10},promo:true},{t:'Stay where you are',c:0,d:{}}]});
  P('jury', working, {h:'Jury duty',p:ins.tier==='strong'?'You are called for jury duty for three days. Your employer keeps paying you while you serve.':'You are called for jury duty for three days. Washington employers must give you the time off, but many hourly jobs do not pay you for it. Jurors get a small daily fee.',o:[{t:'Serve on the jury',c:ins.tier==='strong'?0:-Math.round(hourly()*24*0.8-30),d:{belong:4,stress:3}}]});
  P('refund', true, (()=>{ const rf=ages.length?2500:1200; return {h:'Tax time',p:`You file your taxes and get a refund of ${fmt(rf)}${ages.length?', partly from the child tax credit':''}. Early in the 2026 tax season, the average refund was $2,476. (Your refund amount is a game estimate.)`,src:'irsrefund',o:[{t:`Put all ${fmt(rf)} in savings`,c:rf,d:{stress:-3}},{t:'Spend half on something fun, save the other half',c:rf/2,d:{stress:-5,belong:2}},{t:'Spend all of it on something fun',c:0,d:{stress:-7,belong:3}}]} })());
  // --- stuff breaks ---
  P('emerg', true, (()=>{ const em = T==='newcar'||T==='mixnew'?{h:'A fender bender',p:'Someone backed into your car in a parking lot and drove off. Your insurance deductible is $500.',cost:500}
           : usedCar?{h:'Your car breaks down',p:'The mechanic says the alternator is dead. The repair is $650.',cost:650}
           : T==='bike'?{h:'Your bike is stolen',p:'You locked it outside the library and came back to a cut lock. A decent used bike costs $400.',cost:400}
           : {h:'Cracked phone',p:'You dropped your phone at the bus stop. You need it for work schedules and logins. Repair: $250.',cost:250};
    const canCall = w>=2 || (w===1 && !S.flags.borrowed);
    return {h:em.h,p:em.p,o:[{t:'Pay it yourself',c:-em.cost,d:{stress:4}},{t:'Ask your family to help',c:0,d:{stress:-2},dis:!canCall,why:w===0?'Your family does not have this money.':'Your family already helped you once.',chip:'wealth',fam:true,famCost:em.cost,famOdds:[0,0.5,0.75,0.95][w],s:'They might say yes, or they might not be able to this time.'}]} })());
  P('oldcar', usedCar && S.chNum>=2, {h:'Your car is getting old',p:'Your used car needs new brakes, tires, and a timing belt: $1,800. The mechanic says more repairs are coming.',o:[{t:'Fix it',c:-1800,d:{stress:5}},{t:'Replace it with a new car',c:-2000,moText:'+$265/mo',d:{stress:-2},newcar:true,s:'A $2,000 down payment, then about $965 a month to own and drive (AAA) instead of $700.',src:'aaa'}]});
  P('parking', hasCar, {h:'A parking ticket',p:'You parked in a loading zone for ten minutes. The ticket is $72.',o:[{t:'Pay it',c:-72,d:{stress:2}}]});
  P('washer', S.housing.k!=='parents' && S.housing.k!=='room', {h:'The washing machine breaks',p:S.home?'Your washer floods the laundry room. A new one costs $850.':'The building laundry room is closed for repairs for a month. The laundromat costs about $25 a week.',o:S.home?[{t:'Buy a new washer',c:-850,d:{stress:3}},{t:'Use the laundromat for a while',c:-120,d:{stress:6}}]:[{t:'Use the laundromat',c:-100,d:{stress:4}}]});
  P('roommate', S.housing.k==='room', {h:'Your roommate moves out',p:'One roommate moved out with no notice. Until someone new moves in, everyone has to cover the missing rent: $400 each this month.',o:[{t:'Pay the extra $400',c:-400,d:{stress:6}},{t:'Find a new roommate fast',c:-100,d:{stress:9,belong:2}}]});
  P('lease', !!S.housing.rent, {h:'Lease renewal',p:'Your landlord says rent goes up $150 a month starting next month.',o:[
    {t:'Sign the new lease',c:0,mo:-150,d:{stress:4},rr:150},{t:'Try to negotiate',c:0,moText:'−$75 or −$150/mo',d:{stress:7},rr:'neg'},
    {t:'Move to a similar place nearby',c:-1500,d:{stress:10,belong:-2},rr:'move',s:'Movers, a new deposit, and time off work cost about $1,500 (game estimate). You keep paying today\'s rent instead of the increase.'}]});
  P('roof', S.home && S.home.n==='Bellevue house', {h:'The roof is leaking',p:'Water is dripping into a bedroom. A roofer says the repair costs $4,000. Owning a home means you pay for repairs.',o:[{t:'Fix it now',c:-4000,d:{stress:6}},{t:'Patch it yourself for now',c:-300,d:{stress:12}}]});
  P('heater', S.home && S.home.out, {h:'The water heater dies',p:'No hot water. A new water heater installed costs $2,200. Owning a home means you pay for repairs.',o:[{t:'Replace it',c:-2200,d:{stress:5}},{t:'Cold showers for a week while you save',c:-200,d:{stress:12}}]});
  P('assess', S.home && S.home.n==='Bellevue condo', {h:'A special assessment',p:'Your condo building needs new siding. Every owner has to pay a $3,500 special assessment.',o:[{t:'Pay it',c:-3500,d:{stress:7}}]});
  P('rentins', !!S.housing.rent && !S.ongoing.some(x=>x[0]==='Renters insurance'), {h:'Renters insurance',p:"Your landlord's insurance covers the building, not your stuff. Renters insurance covers your belongings if they are stolen or damaged. It costs about $15 a month.",o:[{t:'Buy renters insurance',c:0,mo:-15,d:{stress:-2},ongo:['Renters insurance',15]},{t:'Skip it',c:0,d:{}}]});
  P('famfight', atHome, {h:'A fight at home',chip:'luck',p:'You and your parents argue about chores, when you come home, and how you spend your money. Dinner is silent for a week. Living with family saves money, but it is hard to feel grown up.',o:[
    {t:'Sit down and talk it out',c:0,d:{stress:3,belong:4}},
    {t:'Stay out late to avoid them',c:-60,d:{stress:6,belong:-6},pend:{p:0.6,card:{chip:'luck',h:'Still tense at home',needParents:true,p:'Things never really got better after that fight. Your parents say that if you live under their roof, you follow their rules.',o:[{t:'Make peace and help more around the house',c:0,d:{stress:4,belong:5}},{t:'Plan to move out next chapter',c:0,d:{stress:6,belong:-4},s:'You can pick a new place on your next budget screen.'}]}}},
    {t:'Start saving to move out',c:0,d:{stress:2,belong:-2}}]});
  P('free', true, {h:'A free Saturday',p:'The weather is clear. Downtown Park and the Mercer Slough trails are free and close by.',o:[{t:'Spend the day outside',c:0,d:{stress:-8,belong:3}},{t:'Catch up on sleep',c:0,d:{stress:-5}}]});
  // --- money traps and smart moves (choices here can come back later) ---
  P('scamtext', true, {h:'A text about an unpaid toll',p:'A text says you owe $6.99 for an unpaid Good To Go! toll on the SR 520 bridge. It warns of a big fine and "legal action" if you don\'t pay today, and it has a link.',src:'toll',o:[
    {t:'Tap the link and pay so you don\'t get fined',c:-7,d:{stress:2},later:{p:1,card:{chip:'luck',h:'Strange charges on your card',p:'The toll text was a scam. The fake site copied your card number, and someone spent $640 with it. Your bank refunds the charges after you report them, but your card is frozen for a week, an autopay bill bounces, and you pay a $35 late fee.',src:'toll',o:[{t:'Report it, get a new card, and pay the late fee',c:-35,d:{stress:10}}]}}},
    {t:'Log in to your real Good To Go! account to check',c:0,d:{stress:-1},s:'This is what WSDOT tells drivers to do. There is no unpaid toll. It was a scam.'},
    {t:'Delete the text',c:0,d:{}}]});
  P('overdraft', S.bank<300, {h:'An overdraft fee',p:`Your bank balance is very low. A $6 coffee went through when you didn't have enough money in your account, and the bank charged you an overdraft fee. A federal study found the typical fee is $34.`,src:'overdraft',o:[
    {t:'Pay the fee and turn on low-balance alerts',c:-34,d:{stress:4}},
    {t:'Call the bank and ask them to waive it',c:0,d:{stress:3},waive:true}]});
  P('bnpl', age<36, {h:'Buy now, pay later',p:'Your laptop is dying. A new one costs $1,200. The store offers "pay in 4": four payments of $300, one every two weeks, with no interest if you pay on time.',o:[
    {t:'Use pay in 4',c:-1200,d:{stress:2},later:{p:0.35,card:{chip:'luck',h:'A missed payment',p:'Your third laptop payment came out on a day your account was low. It failed, and the company charged a $30 late fee. (Game estimate.) Late fees and missed payments can also hurt your credit score.',o:[{t:'Pay it and set a reminder',c:-30,d:{stress:6}}]}},s:'You pay the same $1,200 either way. The risk is a missed payment.'},
    {t:'Buy a cheaper $500 refurbished laptop',c:-500,d:{stress:3}},
    {t:'Keep using the old one for now',c:0,d:{stress:5}}]});
  P('friendloan', age>=22 && age<=40, {h:'A friend needs money',p:'A good friend is short on rent and asks to borrow $500. They promise to pay you back in a few months.',o:[
    {t:'Lend the $500',c:-500,d:{belong:4},pend:[{p:0.55,card:{chip:'luck',h:'Your friend paid you back',p:'Your friend from a few years ago paid back the $500 with a thank-you card.',o:[{t:'Celebrate together',c:500,d:{belong:5,stress:-3}}]}},{p:1,card:{chip:'luck',h:'The $500 is gone',p:'The friend who borrowed $500 has stopped answering when you bring it up.',o:[{t:'Let it go and keep the friendship',c:0,d:{belong:1,stress:3}},{t:'Keep asking for the money',c:0,d:{belong:-6,stress:6}}]}}]},
    {t:'Give them $100 as a gift instead',c:-100,d:{belong:3}},
    {t:'Say no',c:0,d:{belong:-5,stress:3}}]});
  P('retire', working && !S.retirePct && retireOffered(), (()=>{ const n4=retireNums(0.04), n10=retireNums(0.10);
    return {h:'A retirement plan at work',p:`Your job offers a retirement savings plan. If you put in 4% of your pay (${fmt(n4.you/12)} a month), your employer adds the same amount for free. As your pay rises, so do both amounts. Because the money goes in before taxes, 4% only lowers your take-home pay by about ${fmt(n4.cost)} a month. In 2025, the typical employer match was 4% of pay. You can change how much you save on your budget screen each chapter.`,src:'vanguard',o:[
      {t:'Save 10% of your pay',c:0,mo:-n10.cost,d:{stress:-1},retire:0.10,s:'Your employer still adds 4%. More money grows for later, but your monthly budget is tighter now.'},
      {t:'Save 4% and get the full match',c:0,mo:-n4.cost,d:{stress:-2},retire:0.04,s:'The money is invested, so it can grow faster than a bank account. The game assumes 4% a year faster than prices rise (game estimate; real returns jump up and down a lot from year to year). It counts in your net worth, but you usually can\'t spend it before about age 60 without paying a penalty.'},
      {t:'Not now. You need every dollar.',c:0,d:{}}]} })());
  // --- weather and air ---
  P('heat', true, {h:'A heat wave',p:`A "heat dome" is coming, like the one in June 2021, when Seattle hit 108°F. Your ${S.home?'house':'apartment'} has no air conditioning. In 2021, about half of Seattle-area homes had none.`,src:'heat',src2:'ac',o:[
    {t:'Buy a portable air conditioner',c:-550,d:{stress:-2},s:'About $500, plus a higher electric bill. (Game estimate.)'},
    {t:'Spend afternoons at the library and a cooling center',c:0,d:{stress:8}},
    {t:'Stay with family who has air conditioning',c:0,d:{stress:2,belong:4},dis:w<2,why:"Your family's home doesn't have air conditioning either.",chip:'wealth',fam:false}]});
  P('smoke', true, {h:'Wildfire smoke',p:`Smoke from wildfires fills the sky for a week. In September 2020, Seattle briefly had the worst air of any major city in the world. ${ages.length?'School recess is inside, and the kids are stuck at home after school.':'Doctors say to stay inside with the windows shut.'}`,src:'smoke',o:[
    {t:'Buy an air purifier',c:-150,d:{stress:-2},s:'Price is a game estimate.'},
    {t:'Tape the windows and wait it out',c:0,d:{stress:7}}]});
  P('volunteer', true, {h:'Volunteer day',p:'A coworker asks you to volunteer with her on Saturday at a food bank run by Hopelink, a nonprofit that serves Bellevue and the Eastside.',o:[
    {t:'Spend the morning sorting food',c:0,d:{belong:7,stress:-2}},{t:'Donate $25 instead',c:-25,d:{belong:2}},{t:'Not this time',c:0,d:{}}]});
  // --- your car ---
  P('engine', hasCar, {h:'The check engine light',p:'The check engine light came on. The car still drives fine.',o:[
    {t:'Get it checked now',c:-220,d:{stress:2},s:'A worn sensor. Diagnosis and repair: $220. (Game estimate.)'},
    {t:'Ignore it for now',c:0,d:{},pend:{p:0.6,card:{chip:'luck',h:'The engine problem got worse',needCar:true,p:'Remember that check engine light? The small problem damaged your engine. The repair is now $2,400. (Game estimate.)',o:[{t:'Pay for the repair',c:-2400,d:{stress:12}},{t:'Sell the car for parts and take the bus',c:-600,d:{stress:16},sellCar:true,s:'You get very little for the broken car. Next chapter you can pick a new way to get around.'}]}}}]});
  P('catcon', hasCar && age>=24, {h:'A stolen car part',p:`You start your car and it roars like a motorcycle. Someone sawed off the catalytic converter in a parking lot. A Redmond woman whose converter was stolen in a Bellevue lot paid about $2,000 to fix it.${T==='newcar'||T==='mixnew'?' Your new car has full insurance, so you pay the $500 deductible.':' Your older car only has basic insurance, which does not cover theft.'}`,src:'catcon',o:[
    {t:'Fix it',c:T==='newcar'||T==='mixnew'?-500:-2000,d:{stress:10}}]});
  // --- kids ---
  P('kidphone', ages.some(a=>a>=11&&a<=15) && !S.ongoing.some(x=>/phone plan/.test(x[0])), {h:'"Everyone has a phone"',p:'Your middle schooler says they are the only one in their group chat without a phone.',o:[
    {t:'Buy a new phone and a plan',c:-800,mo:-40,d:{belong:4},ongo:["Kid's phone plan",40],s:'A new phone is about $800, plus $40 a month. (Game estimates.)'},
    {t:'A used phone and a cheap plan',c:-150,mo:-15,d:{belong:3,stress:2},ongo:["Kid's phone plan",15]},
    {t:'Not until high school',c:0,d:{belong:-3,stress:4}}]});
  P('snowday', ages.some(a=>a>=5&&a<=12) && working, {h:'Snow days',p:'A snowstorm closes Bellevue schools for three days. Your job is still open.',o:[
    {t:'Take three unpaid days off',c:-Math.round(hourly()*24*0.8),d:{stress:4,belong:3}},
    {t:'Pay a sitter',c:-300,d:{stress:3}},
    {t:'Grandparents take the kids',c:0,d:{belong:4},dis:!famFreeCare(),why:'Your parents work full time and cannot do this.',chip:'wealth'}]});
  // --- kids ---
  if(ages.some(a=>a<13)) P('sickkid', true, {h:'A call from school',p:'Your child has a fever and has to stay home for two days.',src:'sick',o:[
    {t:'Use two paid sick days',c:0,d:{stress:4},s:'Washington law gives almost every worker at least 1 hour of paid sick leave for every 40 hours worked, and you can use it to care for a sick child.'},
    {t:'Ask your parents to watch them',c:0,d:{belong:3},dis:!famFreeCare(),why:'Your parents work full time and cannot leave work.',chip:'wealth'}]});
  P('kidbday', ages.some(a=>a>=3&&a<=12), {h:"Your kid's birthday",p:'Your kid wants a party at the trampoline park with the whole class: $450. A party at home costs about $80.',o:[{t:'Trampoline park party',c:-450,d:{belong:5}},{t:'Party at home',c:-80,d:{belong:3,stress:3}}]});
  P('backtoschool', ages.some(a=>a>=5&&a<=17), {h:'Back to school',p:`New shoes, clothes, a backpack, and school supplies for ${ages.filter(a=>a>=5&&a<=17).length>1?'each kid':'your kid'} cost about $350 each.`,o:[{t:'Buy everything new',c:-350*ages.filter(a=>a>=5&&a<=17).length,d:{belong:2}},{t:'Hand-me-downs and the essentials',c:-120*ages.filter(a=>a>=5&&a<=17).length,d:{stress:3}}]});
  P('tutor', ages.some(a=>a>=8&&a<=17), {h:'Falling behind in math',p:"Your kid's teacher says they are falling behind in math. A tutor costs $60 an hour, once a week for the semester: about $1,000.",o:[{t:'Hire a tutor',c:-1000,d:{stress:-2}},{t:'Help them yourself every night',c:0,d:{stress:8,belong:3}},{t:'Ask about free help at school',c:0,d:{stress:3}}]});
  P('soccer', ages.some(a=>a>=6&&a<=14), {h:'Soccer season',p:'Your kid made a select club soccer team. Club fees, uniforms, and weekend tournaments around the state add up to about $2,500 a year. City rec soccer costs about $150. (Game estimates.)',o:[{t:'Join the club team',c:-2500,d:{belong:5,stress:4}},{t:'Play city rec soccer instead',c:-150,d:{belong:2}},{t:'Skip soccer this year',c:0,d:{belong:-3,stress:3}}]});
  P('braces', ages.some(a=>a>=11&&a<=15), {h:'Braces',p:`The orthodontist says your oldest needs braces.${ins.tier==='strong'?' Your strong benefits cover half, so you pay $3,000.':' Your insurance covers very little, so you pay $5,500.'}`,o:[{t:'Get the braces',c:ins.tier==='strong'?-3000:-5500,d:{stress:6}},{t:'Wait a year',c:0,d:{stress:6,belong:-2}}]});
  P('teendriver', ages.some(a=>a>=16) && hasCar && !S.ongoing.some(x=>x[0]==='Teen driver insurance'), {h:'A new driver',p:'Your teenager just got their license. Adding a teen driver to your car insurance costs about $200 more a month.',o:[{t:'Add them to the insurance',c:0,mo:-200,d:{belong:4,stress:4},ongo:['Teen driver insurance',200]},{t:'Not until they can help pay',c:0,d:{belong:-3,stress:2}}]});
  P('drugs', age<40 && !S.flags.drugs, {h:'Drugs at a party',p:'Someone offers you something, and the room gets loud. You have no idea how you would feel tomorrow. You can say no or try it once.',o:[
    {t:'Say no',c:0,d:{stress:-2},drug:'no',s:'No lasting effects.'},
    {t:'Try it once',c:-40,d:{stress:-8,belong:-4},drug:'try',s:'Great tonight. Addiction risk below.'}
  ]});
  P('gambler', age>=18 && S.bank>500 && Math.random()<0.12, {h:'Someone invites you to gamble',p:'A casino sends a text: "matched deposit tonight." This is the kind of way money slips away for a thrill.',o:[
    {t:'Walk away',c:0,d:{stress:-2},gamble:0,s:'No result.'},
    {t:'Bet $200',c:0,d:{},gamble:200,s:'Roughly half-and-half回报. Slot machines return 85% to 96%.'}
  ]});
  P('backPain', age>=50 && !S.flags.backPain, {h:'Your back is talking back',p:'Low back pain makes standing and lifting harder. It can come and go. Treatment and a chair or mattress can help.',o:[
    {t:'Get physical therapy',c:0,moText:'+$120/mo',d:{stress:-6},ongo:['Back pain treatment',120]},
    {t:'Live with it',c:0,d:{stress:4}}
  ]});
  P('dementia', age>=70 && !S.flags.dementia, {h:'Memory slips',p:'Someone asks you the same thing twice in an hour, or you lose your keys again. It may be normal aging, or it may be dementia.',o:[
    {t:'Get checked and get support',c:0,moText:'+$350/mo',d:{stress:6,belong:-2},dementia:true,s:'Memory clinic visits and medicine cost money and time.'},
    {t:'Ignore it and hope it goes away',c:0,d:{stress:10,dementiaRisk:0.4}}
  ]});
  P('retirementHome', age>=70 && !S.flags.assisted, {h:'Retirement home?',p:'A residence offers meals, housekeeping, and help with daily tasks. It is much more expensive than renting, but it can lower stress and increase safety.',o:[
    {t:'Move in to assisted living',c:0,moText:'+$3,800/mo',d:{stress:-10,belong:4},assisted:true,s:'Game estimate; includes meals and daily help.'},
    {t:'Stay in your own place',c:0,d:{stress:2},s:'You keep your privacy and control, but help is on you.'}
  ]});
  // --- AI and side gigs (modern life) ---
  P('aiDrop', S.job && S.job.ai, {h:'A new AI model just dropped',p:`A new AI model can now do a chunk of what ${an(S.job.n.toLowerCase())} ${S.job.n.toLowerCase()}s do. Your boss is excited. Layoff risk just went up, but people who learn it fast get promoted.`,o:[
    {t:'Spend a weekend learning it',c:0,d:{stress:8},aiLearn:true,s:'You are now the office AI person.'},
    {t:'Ignore it and hope it passes',c:0,d:{stress:2,anxiety:1},aiIgnore:true},
    {t:'Start a side gig using it',c:0,d:{stress:10,belong:-2},sideGigStart:'ai',s:'You take freelance work on the side.'}]});
  P('sideGigOffer', working && !S.sideGig, {h:'A side gig is available',p:'A neighbor needs help: babysitting, delivery runs, or reselling. It pays $300 to $600 a month but eats your evenings and weekends.',o:[
    {t:'Take the babysitting gig',c:0,mo:-350,d:{stress:6,belong:2},sideGig:{name:'Babysitting',mo:350}},
    {t:'Take the delivery gig',c:0,mo:-450,d:{stress:8},sideGig:{name:'Delivery driving',mo:450}},
    {t:'Take the reselling gig',c:0,mo:-300,d:{stress:5},sideGig:{name:'Reselling',mo:300}},
    {t:'No thanks, I need my rest',c:0,d:{stress:-2}}]});
  P('sideGigQuit', !!S.sideGig, {h:'Your side gig is wearing you out',p:`Your ${S.sideGig?S.sideGig.name:'side gig'} pays ${fmt(S.sideGig?S.sideGig.mo:0)} a month but your evenings are gone.`,o:[
    {t:'Keep it for now',c:0,d:{stress:4}},
    {t:'Quit the side gig',c:0,d:{stress:-6,belong:2},sideGigQuit:true,s:'You get your evenings back.'}]});
  P('crypto', S.bank>1000 && age<45, {h:'A crypto pitch',p:'A friend says a new token is "going to 100x" and wants you to put in $500. They sound very sure. About 9 out of 10 crypto projects like this end up worthless (game estimate).',o:[
    {t:'Put in $500',c:-500,d:{stress:4},crypto:true},
    {t:'Pass',c:0,d:{stress:-1}}]});
  P('inherit', age>=45 && Math.random()<0.08, {h:'An inheritance',p:'A relative you were close to passed away and left you a small inheritance.',o:[
    {t:'Accept it with gratitude',c:Math.round(5000+Math.random()*15000),d:{belong:6,stress:-4},s:'A game estimate. Real inheritances vary a lot.'}]});
  P('viral', age>=18 && age<=55 && Math.random()<0.06, {h:'A post goes viral',p:'A funny video you posted about your life in Bellevue is getting shared. Your follower count jumped overnight.',o:[
    {t:'Lean into it and post more',c:0,d:{stress:6,belong:4},sideGigStart:'content',s:'You start earning a little from ads.'},
    {t:'Enjoy it and move on',c:0,d:{belong:3,stress:-2}}]});
  P('raise', working && S.years>=2 && Math.random()<0.15, {h:'Time to ask for a raise',p:`You have been at your job for ${S.years} years. You think you are underpaid. Asking means a hard conversation.`,o:[
    {t:'Ask for a raise',c:0,d:{stress:8},raise:true},
    {t:'Wait another year',c:0,d:{stress:2}}]});
  P('gossip', working && S.partner===null, {h:'Office gossip',p:'Coworkers are talking about who is getting laid off next. Rumors spread fast.',o:[
    {t:'Stay out of it',c:0,d:{stress:-1,belong:2}},
    {t:'Join in and vent',c:0,d:{stress:3,belong:-2}}]});
  // --- BitLife-style mind & body (already gym/meditate; add more) ---
  P('salon', age>=18 && age<=60, {h:'A spa day',p:'A spa day costs about $180 and leaves you relaxed for a week.',o:[{t:'Book it',c:-180,d:{stress:-12,belong:2}},{t:'Skip it',c:0,d:{stress:2}}]});
  P('petloss', S.ongoing.some(x=>x[0]==='Dog') && Math.random()<0.04, {h:'Your dog is sick',p:'Your dog is not eating and seems tired. The vet visit and tests cost money.',o:[{t:'Pay for the vet',c:-400,d:{stress:6,belong:4}},{t:'Wait a day',c:0,d:{stress:10},pend:{p:0.5,card:{chip:'luck',h:'The dog got worse',needDog:true,p:'Your dog got worse overnight. Emergency care is $1,200.',o:[{t:'Pay it',c:-1200,d:{stress:8}},{t:'Say goodbye',c:0,d:{stress:15,belong:-6}}]}}}]});
  // --- more BitLife-style life events (same card UI) ---
  P('garage', true, {h:'Neighborhood garage sale',p:'Your block is having a garage sale. You have old stuff you never use.',o:[{t:'Sell your old stuff',c:Math.round(50+Math.random()*150),d:{stress:-2,belong:2}},{t:'Buy a neighbor\'s bike for $40',c:-40,d:{belong:1}},{t:'Skip it',c:0,d:{}}]});
  P('training', working && age<45, {h:'Free training at work',p:'Your employer offers a free certificate program that takes 4 hours a week for two months. It could lead to a promotion.',o:[{t:'Sign up',c:0,d:{stress:6},xp:1,s:'Counts as an extra year of experience toward your pay.'},{t:'Skip it',c:0,d:{}}]});
  P('union', working && Math.random()<0.12, {h:'A union vote at work',p:'Your workplace is voting on whether to unionize. Coworkers are split.',o:[{t:'Vote yes',c:0,d:{stress:3,belong:2}},{t:'Vote no',c:0,d:{stress:2,belong:-1}},{t:'Stay out of it',c:0,d:{}}]});
  P('scamjob', true, {h:'A "work from home" ad',p:'An online ad promises $5,000 a week working from home. It asks for a $99 "starter kit" fee.',o:[{t:'Pay the fee',c:-99,d:{stress:4},later:{p:1,card:{chip:'luck',h:'It was a scam',p:'The kit never arrived and the company vanished. Your $99 is gone.',o:[{t:'Report it and move on',c:0,d:{stress:6}}]}}},{t:'Ignore it',c:0,d:{stress:-1}}]});
  P('petadopt', age>=24 && !S.ongoing.some(x=>x[0]==='Dog'), {h:'Pet adoption event',p:'The animal shelter is holding an adoption event this weekend. Adoption is $200.',o:[{t:'Adopt a dog',c:-200,mo:-120,d:{belong:6,stress:-3},ongo:['Dog',120]},{t:'Just visit the dogs',c:0,d:{belong:2,stress:-2}},{t:'Skip it',c:0,d:{}}]});
  P('friendwed', age>=26 && age<=40, {h:'A friend\'s destination wedding',p:'Your friend is getting married in Hawaii. Flights and a hotel are $1,800. You are in the wedding party.',o:[{t:'Go and be in the wedding',c:-1800,d:{belong:8,stress:-2}},{t:'Send a gift and skip the trip',c:-150,d:{belong:2}},{t:'Decline the invitation',c:0,d:{belong:-6,stress:4}}]});
  // Follow-ups planted by earlier choices come first, then cards you haven't seen yet.


  const due = (S.pending||[]).filter(c=>c.when<=S.chNum); S.pending=(S.pending||[]).filter(c=>c.when>S.chNum);
  for(const c of due){ if(c.card.needCar && !hasCar) continue; if(c.card.needDog && !S.ongoing.some(x=>x[0]==='Dog')) continue; if(c.card.needParents && !atHome) continue; fixed.push(c.card) }
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]] }
  const fresh = pool.filter(c=>!S.seen.has(c.id)), old = pool.filter(c=>S.seen.has(c.id));
  const want = Math.max(6, fixed.length+3);
  const out=[...fixed]; for(const c of [...fresh,...old]){ if(out.length>=want) break; out.push(c); S.seen.add(c.id) }
  return out.map((c,i)=>({...c, wk:Math.min(4,1+Math.floor(i*4/out.length))}));
}
function costLabel(o){
  if(o.moText) return `<span class="c neg">${o.moText}</span>`;
  if(o.mo) return `<span class="c ${o.mo<0?'neg':'pos'}">${o.mo>0?'+':''}${fmt(o.mo)}/mo</span>`;
  if(o.ff) return `<span class="c neg">${o.c?fmt(o.c)+' now':''}<small>${fmt(o.ff)} lost pay</small></span>`;
  return money(o.c||0);
}
function nextCard(){
  if(S.cardIdx>=S.cards.length){ fastForward(); return }
  let c = S.cards[S.cardIdx];
  if(c.h==='A toothache' && S.flags.toothWorse){ }
  S.cur=c;
  const prog = S.cards.map((_,i)=>`<i class="${i<S.cardIdx?'done':''}"></i>`).join('');
  show(`<section class="scene"><div class="progress" aria-label="Card ${S.cardIdx+1} of ${S.cards.length}">${prog}</div>
  <span class="eyebrow">Age ${S.age} · Week ${c.wk} of 4 · Card ${S.cardIdx+1} of ${S.cards.length}</span>
  <h2>${c.h}</h2>${c.chip?`<div>${chip(c.chip)}</div>`:''}<p>${c.p}</p>${c.src?src(c.src):''}${c.src2?' '+src(c.src2):''}
  <div class="choices">${c.o.map((o,i)=>`<button class="choice" data-k="${i}" ${o.dis?'disabled':''}><span class="t">${o.t} ${o.chip&&(o.dis||o.fam)?chip(o.chip):''}</span>${costLabel(o)}<span class="s">${o.dis?o.why:(o.s||'')}${!o.dis && o.c<0 && -o.c>Math.max(0,S.bank)?` <b>You don't have enough savings, so ${S.bank>0?fmt(-o.c-S.bank)+' of it':'it'} goes on your credit card.</b>`:''}${o.ff&&!o.dis?` ${o.s?'':''}<b>${o.c?`You pay ${fmt(-o.c)} now. `:''}The ${fmt(-o.ff)} in lost pay comes out of your savings when the game jumps ahead.</b>`:''}${o.src?'<br>'+src(o.src):''}</span></button>`).join('')}</div>
  ${cashOutOffer(c.o.some(o=>!o.dis && o.c<=-5000 && -o.c>Math.max(0,S.bank)))}</section>`);
  bindChoices(k=>pick(c.o[+k]));
  const co=$('#cashout'); if(co) co.onclick=()=>cashOutScene(nextCard);
}
function pick(o){
  const c=S.cur;
  adj({money:o.c, ...o.d});
  let followUp=null;
  if(o.f==='tooth' && Math.random()<0.5){
    const cost = insurance().tier==='strong'?400:insurance().tier==='standard'?900:1400;
    S.cards.splice(S.cardIdx+1+Math.floor(Math.random()*(S.cards.length-S.cardIdx)),0,{wk:4,h:'The toothache got worse',p:`It turned into an infection. You need a root canal: ${fmt(cost)} with your insurance.`,o:[{t:'Pay for the root canal',c:-cost,d:{stress:6}}]});
  }
  if(typeof o.rr==='number') S.rentRaise+=o.rr;
  if(o.drug==='try'){ if(Math.random()<0.35){ S.flags.drugAddict=true; S.flags.drugs=true; S.ongoing.push(['Drug costs',100]) } else S.flags.drugs=true }
  if(o.dementia){ S.flags.dementia=true; S.ongoing.push(['Memory clinic',350]); event('Got memory-care support'); note('luck', `At ${S.age} memory-care support costs about ${fmt(350)} a month (game estimate).`) }
  if(o.dementiaRisk){ if(Math.random()<o.dementiaRisk){ S.flags.dementia=true; S.ongoing.push(['Memory clinic',350]); event('Memory care helped') } }
  if(o.assisted){ S.flags.assisted=true; S.ongoing.push(['Assisted living',3800]); event('Moved to assisted living'); note('luck', `At ${S.age} you moved into assisted living. It costs about ${fmt(3800)} a month (game estimate).`) }
  if(o.gamble){ const ok=Math.random()<0.48; if(ok){ adj({money:o.gamble*1.8, stress:-3, belong:3}); event('Won your bet'); followUp=`<h2>You won.</h2><div class="result"><p>${fmt(o.gamble*1.8)} lands in your account.</p></div>` } else { adj({money:-o.gamble, stress:5, belong:-4}); event('Lost your bet') } }
  if(o.vacation){ if(S.job.ben!=='strong' && !S.unemployed && !(S.school&&S.school.mode==='full')){ const lost=Math.round(mySalary()/52*0.8); adj({money:-lost}); followUp=`<h2>A week off, without pay</h2><div class="result"><p>Your job has no paid vacation, so the week cost you <b class="num">${fmt(lost)}</b> in pay. You feel better, though.</p></div>` } }
  if(o.payDebt){ S.debt=Math.max(0,S.debt-o.payDebt); event(`Paid down ${fmt(o.payDebt)} of student loans`) }
  // Branching: a choice can plant a card later this month (later) or next chapter (pend).
  if(o.later && Math.random()<(o.later.p??1)){ const at=S.cardIdx+1+Math.floor(Math.random()*(S.cards.length-S.cardIdx)); S.cards.splice(at,0,{wk:4,...o.later.card}) }
  if(o.pend){ const list=Array.isArray(o.pend)?o.pend:[o.pend]; for(const pd of list){ if(Math.random()<(pd.p??1)){ S.pending.push({when:S.chNum+1, card:pd.card}); break } } }
  if(o.retire){ S.retirePct=o.retire; event(`Started saving ${Math.round(o.retire*100)}% of pay for retirement`); note('luck', `At ${S.age} you started saving ${Math.round(o.retire*100)}% of your pay for retirement. Your employer added up to 4% more.`) }
  if(o.sellCar){ const bus=transportOptions().find(t=>t.k==='bus'); S.transport={...bus}; event('Car broke down for good; switched to transit') }
  if(o.waive){ const ok=Math.random()<0.5; if(!ok) adj({money:-34}); followUp=`<h2>${ok?'The bank waived the fee.':'The bank said no.'}</h2><div class="result"><p>${ok?'This time. Banks often waive a first fee if you ask politely, but not every time.':'You pay the <b class="num">$34</b> fee after all.'}</p></div>` }
  if(o.rr==='move'){ S.rentRaise=0; event('Moved to avoid a rent increase'); if(Math.random()<DATA.races[S.id.race].rentRisk){ adj({money:-350,stress:6}); note('race', `At ${S.age}, while moving, you were turned away from apartments that were still available. It cost $350 more and an extra week.`); followUp=`<h2>Another hard search</h2><div class="callout id"><p>${chip('race')} Two places said they were "just rented" but kept showing them. You lost $350 more in fees and a week of searching.</p>${src('rent2011')}</div>` } }
  if(o.rr==='neg'){ const r=Math.random()<0.5?75:150; S.rentRaise+=r; followUp=`<h2>${r===75?'The landlord met you halfway.':'The landlord said no.'}</h2><div class="result"><p>Your rent goes up <b class="num">${fmt(r)}</b> a month starting next month.</p></div>` }
  if(o.fs!==undefined){ S.familySupport=o.fs; note('wealth', `From age ${S.age}, your parents needed ${fmt(o.fs)} a month from you to pay their rent.`) }
  if(o.big) S.flags.bigGift=true;
  if(c.big){ if(c.ev) event(c.ev); if(c.note&&c.noteText) note(c.note, c.noteText); }
  if(o.ev2) event(o.ev2);
  if(o.ff) S.ffAdj += o.ff;
  if(o.parentDied){ S.flags.parentDied=true; if(S.familySupport){ S.familySupport=0 } S.ongoing=S.ongoing.filter(x=>!/Dad/.test(x[0])) }
  if(o.leave){ S.flags.breakup=true; if(S.bank>0) S.bank=Math.round(S.bank/2); if(S.home){ const eq=Math.max(0,S.home.value-S.home.loan); S.home.loan+=eq/2 } if(kidAges(S.age).length) S.ongoing.push(['Child support received (lowers costs)',-800]); note('luck', `At ${S.age} your partner left. They took half your shared savings${S.home?' and you borrowed to buy out their half of the home':''}.`) }
  if(o.ongo){ S.ongoing.push(o.ongo); event(o.ongo[0]==='Dog'?'Adopted a dog':`Added ${o.ongo[0].toLowerCase()}`) }
  if(o.xp){ S.years+=o.xp; if(c.id==='course'){ S.flags.course=true; note('luck', `At ${S.age} you took a course that raised your pay.`) } }
  if(o.bump){ S.payBump=(S.payBump||0)+o.bump; note('luck', `At ${S.age} you took a higher-paying job in Seattle.`) }
  if(o.aiLearn){ S.flags.aiLearned=true; S.payBump=(S.payBump||0)+1; note('luck', `At ${S.age} you learned the new AI tools and became the office expert.`) }
  if(o.aiIgnore){ S.flags.aiIgnored=true; S.mental.anxiety=true; note('luck', `At ${S.age} you ignored the new AI tools. Your job feels less secure.`) }
  if(o.sideGigStart){ S.sideGig = o.sideGigStart==='ai' ? {name:'AI freelance',mo:500} : {name:'Content creation',mo:250}; note('luck', `At ${S.age} you started a side gig: ${S.sideGig.name}.`) }
  if(o.sideGig){ S.sideGig=o.sideGig; note('luck', `At ${S.age} you started a side gig: ${o.sideGig.name}.`) }
  if(o.sideGigQuit){ S.sideGig=null; note('luck', `At ${S.age} you quit your side gig.`) }
  if(o.crypto){ const win=Math.random()<0.1; if(win){ adj({money:4500,stress:-6}); event('Crypto paid off'); followUp=`<h2>It actually went up.</h2><div class="result"><p>Your $500 grew to about <b class="num">$5,000</b>. You sell and feel lucky.</p></div>` } else { adj({money:-500,stress:6}); event('Crypto went to zero'); followUp=`<h2>It went to zero.</h2><div class="result"><p>The token collapsed. Your $500 is gone. Most of these do.</p></div>` } }
  if(o.raise){ const ok=Math.random()<0.5; if(ok){ S.payBump=(S.payBump||0)+1; adj({stress:-4}); followUp=`<h2>You got the raise.</h2><div class="result"><p>Your pay went up. Asking worked.</p></div>` } else { adj({stress:6}); followUp=`<h2>They said no.</h2><div class="result"><p>Your boss said the budget is frozen. You can try again next year.</p></div>` } }
  if(o.newcar){ const two=S.partner && S.transport.k==='car'; S.transport={...S.transport, k:two?'mixnew':'newcar', t:'A new car', cost:S.transport.cost+265}; event('Bought a new car') }
  if(o.flag){ S.flags[o.flag]=(S.flags[o.flag]||0)+1;
    if(o.flag==='skipSocial' && S.flags.skipSocial===2) S.pending.push({when:S.chNum+1, card:{chip:'luck',h:'Your friends drifted away',p:'You skipped a lot of plans, and your friends stopped inviting you. Weekends feel quiet.',o:[{t:'Text them and plan something',c:-60,d:{belong:5,stress:2}},{t:'Join a club or team to meet new people',c:-150,d:{belong:7,stress:2}},{t:'Let it go',c:0,d:{belong:-10,stress:4}}]}});
    if(o.flag==='extraYes' && S.flags.extraYes===2) S.pending.push({when:S.chNum+1, card:{chip:'luck',h:'Your boss noticed',p:'Your boss noticed that you step up when the team needs it. You get a raise.',o:[{t:'Say thank you',c:0,d:{stress:-4,belong:3},xp:2}]}});
    if(o.flag==='extraNo' && S.flags.extraNo===2) S.pending.push({when:S.chNum+1, card:{chip:'luck',h:'Passed over',p:'A coworker who always says yes to extra shifts got the promotion you wanted.',o:[{t:'Ask your boss what it would take next time',c:0,d:{stress:4}},{t:'Start looking for a new job',c:0,d:{stress:7,belong:-3}}]}});
  }
  if(o.f==='knee' && Math.random()<0.4) S.cards.splice(S.cardIdx+1,0,{wk:4,h:'Your knee still hurts',p:`Three weeks later your knee still swells up. The doctor sends you to physical therapy: ${fmt(insurance().tier==='strong'?200:insurance().tier==='standard'?700:1200)} with your insurance.`,o:[{t:'Go to physical therapy',c:-(insurance().tier==='strong'?200:insurance().tier==='standard'?700:1200),d:{stress:4}},{t:'Skip it and live with it',c:0,d:{stress:10}}]});
  const promoNow = !!o.promo;
  if(o.crash){ const lost=o.crashLost; S.retire=Math.max(0,S.retire-lost);
    if(o.crash==='pause' && S.retirePct){ S.retirePct=0; note('luck', `At ${S.age} you stopped adding to your retirement account after the crash.`) }
    if(o.crash==='sell'){ note('luck', `At ${S.age} you sold your investments after the crash, locking in the loss.`); S.pending.push({when:S.chNum+1, card:{chip:'luck',h:'The market came back without you',p:`Stock prices went back up, but you had already sold. The ${fmt(lost)} your account lost is gone for good.`,o:[{t:'Learn the lesson',c:0,d:{stress:4}}]}}) }
    else S.pending.push({when:S.chNum+1, card:{chip:'luck',h:'The market came back',p:`Stock prices recovered. Because you stayed invested, the ${fmt(lost)} your account lost during the crash grew back.`,o:[{t:'Breathe a sigh of relief',c:0,d:{stress:-6},retireAdd:lost}]}}) }
  if(o.fosterEnd!=null){ S.foster=(S.foster||[]).filter(f=>f.born!==o.fosterEnd); event('Foster child went home to their family') }
  if(o.fosterAdopt!=null){ S.foster=(S.foster||[]).filter(f=>f.born!==o.fosterAdopt); S.kids.push(o.fosterAdopt); event('Adopted your foster child'); note('luck', `At ${S.age} you adopted your foster child.`) }
  if(o.retireAdd){ S.retire=(S.retire||0)+o.retireAdd; event('Retirement account recovered from the crash') }
  if(o.infl){ const n=c.inflNums; S.bank-=n.sav; S.retire=Math.max(0,(S.retire||0)-n.ret); S.debt=Math.max(0,S.debt-n.loans);
    if(o.infl==='ask'){ if(Math.random()<0.5){ followUp=`<h2>You got the raise.</h2><div class="result"><p>Your pay keeps up with prices this year. Your savings and retirement still lost some buying power.</p></div>` } else { S.ffAdj-=n.pay; followUp=`<h2>Your boss said no.</h2><div class="result"><p>Your pay falls behind prices this year. You lose about <b class="num">${fmt(n.pay)}</b>, which comes out when the game jumps ahead.</p></div>` } } }
  if(o.fam){ if(Math.random()<(o.famOdds??1)){ if(S.id.wealth===1) S.flags.borrowed=true; note('wealth', `At ${S.age}, your family paid a surprise bill for you.`); followUp=`<h2>Your family said yes.</h2><div class="result"><p>They covered the ${fmt(o.famCost)}. Not everyone has family who can do that.</p></div>` }
    else { adj({money:-o.famCost, stress:6}); followUp=`<h2>Your family couldn't help this time.</h2><div class="result"><p>Money is tight for them right now. You pay the <b class="num">${fmt(o.famCost)}</b> yourself${S.bank<0?', and it goes on your credit card':''}.</p></div>` } }
  if(c.chip==='wealth' && !c.big && o.c<0) note('wealth', `At ${S.age}, your family needed ${fmt(-o.c)} from you.`);
  if(c.chip==='wealth' && !c.big && o.c>0) note('wealth', `At ${S.age}, your family's money made life easier: ${fmt(o.c)} of help.`);
  if(c.chip==='race') note('race', `At ${S.age}: ${c.h.toLowerCase()}. You chose to ${o.t.charAt(0).toLowerCase()+o.t.slice(1)} (belonging ${o.d.belong>0?'+':''}${o.d.belong||0}).`);
  if(o.layoff){ const L=S.layoffInfo; S.layoffs++; const old=S.job;
    if(o.layoff==='ui'){ S.laidOffUI={ui:L.ui}; stopRetire('you lost your job'); note('luck', `At ${S.age} you were laid off from your job as ${an(old.n)} ${old.n.toLowerCase()} and lived on unemployment while you searched.`); event('Laid off; collected unemployment while job hunting') }
    else { takeJob(L.fall); S.events.pop(); note('luck', `At ${S.age} you were laid off as ${an(old.n)} ${old.n.toLowerCase()} and took a job as ${an(S.job.n)} ${S.job.n.toLowerCase()}.`); event(`Laid off; took a job as ${an(S.job.n)} ${S.job.n.toLowerCase()}`) }
  }
  if(o.breakup){ S.flags.breakup=true; event('Breakup'); note('luck', `At ${S.age} you and your partner split up.`) }
  S.cardIdx++;
  if(promoNow){ promoRoll(nextCard); return }
  if(followUp){ interlude(`Age ${S.age} · ${c.h}`, followUp, nextCard); return }
  nextCard();
}

/* ================= FAST FORWARD ================= */
function fastForward(){
  const a=S.chStart, b=S.chEnd, n=b-a;
  const b0=budget(a);
  S.chapters.push({age:a, stress:S.stress, belong:S.belong, left:b0.left, takeHome:b0.takeHome, burden: b0.gross? b0.housing/b0.gross : 1});
  const lines=[];
  if(S.flags.breakup){ if(S.partnerId){ S.relationships={...S.relationships,[S.partnerId]:{status:'ex', since:S.age}}; S.partnerId=null } S.partner=null; S.flags.breakup=false; if(S.care==='stayhome') S.care='center'; if(S.transport && S.transport.k==='mix') S.transport={...S.transport,cost:700}; lines.push('After the breakup, you paid every bill on one income.') }
  const start={bank:S.bank, debt:S.debt, retire:S.retire||0, nw:netWorth()};
  S.flags.crisisThisChapter=false;
  let surprise=0;
  if(S.ffAdj){ S.bank += S.ffAdj; lines.push(`Lost pay from this chapter's big surprise: ${fmt(S.ffAdj)}.`); S.ffAdj=0 }
  for(let y=0;y<n;y++){
    S.age=a+y;
    let left;
    if(y===0 && S.laidOffUI){
      // about 6 months on unemployment, then a new job in your field with 2 years less seniority
      const working = budget(S.age,{noInterest:true}).left;
      S.unemployed=true; S.uiPay=S.laidOffUI.ui; const onUI = budget(S.age,{noInterest:true}).left; S.unemployed=false; S.uiPay=0;
      S.years=Math.max(0,S.years-2);
      left = onUI*5 + working*6;
      lines.push(`After about 6 months of searching, you found a new job as ${an(S.job.n)} ${S.job.n.toLowerCase()}.`);
      S.laidOffUI=null;
    } else left = budget(S.age,{noInterest:true}).left * (y===0?11:12);
    // Surprise costs each year: medical bills, car and home repairs, travel for family events (game estimate)
    const irr = Math.round(((S.partner?2:1)*1500 + allKidAges(S.age).length*600 + (S.home?2500:0)) * (0.5+Math.random()));
    surprise += irr; left -= irr;
    S.bank += left;
    // In today's dollars: bank savings just keep up with prices (0%); card debt grows 18% a year.
    if(S.bank<0) S.bank*=1.18;
    // Lenders cut you off: debt can't grow past a limit. Hitting it is a money crisis.
    const limit = -Math.max(15000, 4*budget(S.age).takeHome);
    if(S.bank < limit){
      S.bank = limit;
      if(!S.flags.crisisThisChapter){ S.flags.crisisThisChapter=true; S.crises=(S.crises||0)+1;
        lines.push(`At ${S.age+1} your credit cards were maxed out and you fell behind on bills. Lenders stopped giving you credit.`);
        event('Maxed out credit cards; fell behind on bills'); note('luck', `At ${S.age+1} you spent more than you earned for so long that your credit cards were maxed out.`) }
    }
    if(S.debt>0){ S.debt = Math.max(0, S.debt*1.06 - S.loanPay*12); if(S.debt===0){ S.loanPay=0; lines.push(`At ${S.age+1} you paid off your student loans.`) } }
    if(S.home){ S.home.value*=1.01; S.home.loan=loanAfterYear(S.home.loan, DATA.mortgageRate, S.home.pi) }
    if(S.retire || S.retirePct){ S.retire = S.retire*1.04 + retireYearly()*(y===0?11/12:1) }
    if(S.school && S.bank<0){ S.debt += -S.bank; S.bank=0 }
    if(!(S.school&&S.school.mode==='full')) S.years++;
    if(S.partner && S.care!=='stayhome') S.partner.years++;
    S.history.push({age:S.age+1, nw:Math.round(netWorth())});
  }
  if(S.stress>=75 && !S.flags.burnoutSeen){ S.flags.burnoutSeen=true; S.pending.push({when:S.chNum+1, card:BURNOUT()}) }
  S.age=b;
  lines.unshift(`Surprise costs over these ${n} years added up to ${fmt(surprise)}: medical bills, car${S.home?' and home':''} repairs, a broken phone or laptop, and travel for family events.`);
  if(S.school){ finishSchoolChapter(start, lines); return }
  summary(start, lines);
}
function finishSchoolChapter(start, lines){
  const m=S.school.major, where=S.school.where, full=S.school.mode==='full';
  const odds = Math.max(10, completionOdds(where,S.id, m.mod-(full?3:10)));
  note('pedu', `When you went back to school at ${S.chStart}, your odds of finishing were ${odds}%. Your parents' education still counted${full?'':', and working while studying lowered the odds'}.`);
  if(S.debt>0) S.loanPay=Math.round(S.debt*0.0111);
  const w=rollWidget(odds,(ok)=>{
    const name=S.school.name; S.school=null;
    if(ok){ m.jobs.forEach(j=>{ if(!S.cred.includes(j)) S.cred.unshift(j) }); event(`Finished school: ${name}`); lines.push(`You finished ${name}. Next chapter you can switch to a job that uses it.`) }
    else { event('Left school without finishing'); lines.push(`You couldn't finish ${name}.`) }
    if(full) lines.push(`You went back to work as ${an(jobName())} ${jobName().toLowerCase()} after school.`);
    $('#out').innerHTML = `<div class="result"><h3>${ok?'You finished!':"You didn't finish."}</h3><p>${ok?`You earned your ${m.n} credential. Next chapter you can switch to a job that uses it.`:'Money, work, and family made it too hard to finish this time.'}${S.debt>0?` You owe ${fmt(S.debt)} in student loans.`:''}</p></div><div class="row" style="margin-top:14px"><button class="btn" id="n">See how the years went</button></div>`;
    $('#n').onclick=()=>summary(start, lines);
  });
  show(`<section class="scene"><span class="eyebrow">Age ${S.age} · Back to school</span><h2>Did you finish ${m.n}? Your odds: ${odds}%</h2>${w.html}</section>`);
  w.run();
}
function summary(start, lines){
  const nw=netWorth(), ka=kidAges(S.age), last=S.age>=DATA.endAge;
  interlude(`Ages ${S.chStart} to ${S.age} · How the years went`, `<h2>You are now ${S.age}.</h2>
   <div class="tbl"><table>
    <tr><td>Your pay</td><td class="r">${fmt(mySalary())} a year</td></tr>
    ${S.partner?`<tr><td>Your partner's pay</td><td class="r">${fmt(partnerSalary())} a year</td></tr>`:''}
    <tr><td>Savings (cash)</td><td class="r">${fmt(Math.max(0,start.bank))} → ${fmt(Math.max(0,S.bank))}</td></tr>
    ${start.bank<0||S.bank<0?`<tr><td>Credit card debt</td><td class="r">${fmt(Math.max(0,-start.bank))} → ${fmt(Math.max(0,-S.bank))}</td></tr>`:''}
    ${S.retire||start.retire?`<tr><td>Retirement account${S.retirePct?` (saving ${Math.round(S.retirePct*100)}% of pay)`:''}</td><td class="r">${fmt(start.retire||0)} → ${fmt(S.retire)}</td></tr>`:''}
    ${start.debt||S.debt?`<tr><td>Student loans owed</td><td class="r">${fmt(start.debt)} → ${fmt(S.debt)}</td></tr>`:''}
    ${S.home?`<tr><td>Home value</td><td class="r">${fmt(S.home.value)}</td></tr><tr><td>Mortgage still owed</td><td class="r">${fmt(S.home.loan)}</td></tr>`:''}
    <tr class="total"><td>Net worth (what you own minus what you owe)</td><td class="r">${fmt(start.nw)} → ${fmt(nw)}</td></tr>
   </table></div>
   ${lines.length?`<ul class="ledger">${lines.map(l=>`<li>${l}</li>`).join('')}</ul>`:''}
   ${ka.length?`<p>Your kid${ka.length>1?'s are':' is'} now ${ka.join(' and ')}.</p>`:''}${fosterAges(S.age).length?`<p>You are a foster parent to ${fosterAges(S.age).length===1?'a child':'children'} age ${fosterAges(S.age).join(' and ')}.</p>`:''}
   <p>All money in this game is in today's dollars. In fall 2026, a regular bank savings account paid about 0.38% a year on average, and the best ones paid about 4%, while prices rose 3.7%. So in the game, money in the bank just keeps up with prices: it doesn't grow. Retirement money is invested, so the game has it grow 4% a year faster than prices. Credit card debt grows 18% a year. (The 4% and 18% are game estimates.)</p>${src('fdic')} ${src('cpi')}`,
   last?report:chapterIntro, last?`See my life at ${DATA.endAge}`:'Next chapter');
}

/* ================= REPORT ================= */
function chartSVG(){
  const pts=[{age:18,nw:DATA.wealth[S.id.wealth].save}, ...S.history];
  const W=640,H=260,L=72,R=16,T=16,B=36;
  const xs=a=>L+(a-18)/(45-18)*(W-L-R);
  const vals=pts.map(p=>p.nw); let lo=Math.min(0,...vals), hi=Math.max(10000,...vals);
  const raw=(hi-lo)/4, mag=Math.pow(10,Math.floor(Math.log10(raw))), step=Math.ceil(raw/mag)*mag;
  lo=Math.floor(lo/step)*step; hi=Math.ceil(hi/step)*step;
  const ys=v=>T+(hi-v)/(hi-lo)*(H-T-B);
  const ticks=[]; for(let v=lo; v<=hi+1; v+=step) ticks.push(v);
  const short=v=>{const a=Math.abs(v); const s=a>=1e6?(a/1e6).toFixed(1).replace(/\.0$/,'')+'M':a>=1e3?Math.round(a/1e3)+'k':String(a); return (v<0?'−$':'$')+s};
  const line=pts.map((p,i)=>`${i?'L':'M'}${xs(p.age).toFixed(1)},${ys(p.nw).toFixed(1)}`).join(' ');
  const base=ys(Math.max(lo,0)).toFixed(1);
  const area=line+` L${xs(pts[pts.length-1].age).toFixed(1)},${base} L${xs(18).toFixed(1)},${base} Z`;
  const near=a=>pts.reduce((b,q)=>Math.abs(q.age-a)<Math.abs(b.age-a)?q:b,pts[0]);
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Net worth from age 18 to ${DATA.endAge}">
    ${ticks.map(v=>`<line x1="${L}" x2="${W-R}" y1="${ys(v)}" y2="${ys(v)}" stroke="var(--line)" stroke-width="${v===0?2:1}"/><text x="${L-8}" y="${ys(v)+4}" text-anchor="end" font-size="13" fill="var(--ink)" font-family="var(--mono)">${short(v)}</text>`).join('')}
    ${[18,25,35,45,55,65,75,80].map(a=>`<text x="${xs(a)}" y="${H-12}" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--mono)">${a}</text>`).join('')}
    <path d="${area}" fill="var(--lake)" fill-opacity=".18"/>
    <path d="${line}" fill="none" stroke="var(--lake)" stroke-width="3"/>
    ${S.events.map(e=>`<circle cx="${xs(e.age)}" cy="${ys(near(e.age).nw)}" r="5" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"><title>Age ${e.age}: ${e.text}</title></circle>`).join('')}
    <circle cx="${xs(45)}" cy="${ys(pts[pts.length-1].nw)}" r="6" fill="var(--lake)"/>
  </svg>`;
}
function report(){
  S.age=DATA.endAge; setStage(S.age);
  const chs=S.chapters, avg=k=>chs.reduce((a,c)=>a+c[k],0)/Math.max(1,chs.length);
  const cushion = chs.reduce((a,c)=>a + c.left/Math.max(1,c.takeHome),0)/Math.max(1,chs.length);
  const lastB = budget(DATA.endAge), burden = lastB.gross? lastB.housing/lastB.gross : 1;
  const nw = netWorth();
  const sc = lifeScore({cushion, own:!!S.home, burden, stress:avg('stress'), belong:avg('belong'), nw});
  const tierText = ['Bellevue worked for you','Bellevue was a stretch','Bellevue pushed you out'][sc.tier];
  const tierSub = ['You paid your bills, handled surprises, and built savings. On this card, Bellevue was livable.',
                   'You got by, but money, stress, or loneliness made it hard. Many people with lives like this think about moving somewhere cheaper.',
                   'Your costs were often bigger than your paycheck, or your stress stayed very high. Most people in this spot leave Bellevue or crowd in with family.'][sc.tier];
  const id=S.id, rc=DATA.races[id.race], ka=kidAges(45);
  const kidLine = ka.length ? `Your kid${ka.length>1?'s are':' is'} ${ka.join(' and ')}.${ka.some(a=>a===13||a===14)?' One of them is in 8th grade, the age you are now.':''}` : 'You have no kids.';
  const resLine = `${S.code} | ${rc.label} · ${DATA.genders[id.gender].label} · ${DATA.wealth[id.wealth].label} · ${DATA.pedu[id.pedu].label} | Job at 45: ${jobName()} | ${S.partner?'Partner':'Single'}, ${S.kids.length} kid${S.kids.length===1?'':'s'}${S.flags.fostered?`, fostered ${S.flags.fostered}`:''} | ${S.home?'Owns '+S.home.n:'Rents'} | Net worth ${fmt(nw)} | Layoffs ${S.layoffs} | Score ${sc.total} (${tierText})${S.gentle?' | Gentle mode':''}`;
  const groups=['race','gender','wealth','pedu','luck'];
  const ledger = groups.map(g=>{ const items=S.log.filter(l=>l.tag===g); if(!items.length) return ''; return `<li><b>${TAGS[g]}</b><ul>${items.map(i=>`<li>${i.text}</li>`).join('')}</ul></li>`}).join('');
  show(`<section class="scene">
  <span class="eyebrow">Age 45 · Your life report</span>
  <div class="verdict v${sc.tier}"><span class="eyebrow">Livability score ${sc.total} out of 100</span><h2>${tierText}</h2><p>${tierSub}</p></div>
  <div class="scores">
    <div class="score"><span class="eyebrow">Net worth at 45</span><b>${fmt(nw)}</b><span>Everything you own (savings${S.retire?', retirement':''}${S.home?', and your home':''}) minus everything you owe.</span></div>
    <div class="score"><span class="eyebrow">Housing</span><b>${S.home?'Homeowner':Math.round(burden*100)+'% of pay to rent'}</b><span>${S.home?`You own ${an(S.home.n)} ${S.home.n}.`:'Over 30% is "cost-burdened." Over 50% is "severely cost-burdened."'}</span></div>
    <div class="score"><span class="eyebrow">Average stress</span><b>${Math.round(avg('stress'))} / 100</b><span>Lower is better. ${avg('stress')>66?'Life was very hard to keep up with.':avg('stress')>40?'Manageable, with rough patches.':'You usually had room to breathe.'}</span></div>
    <div class="score"><span class="eyebrow">Average belonging</span><b>${Math.round(avg('belong'))} / 100</b><span>Higher is better. ${avg('belong')>=65?'Bellevue felt like home.':avg('belong')>=40?'Some connection, some distance.':'You often felt like an outsider.'}</span></div>
  </div>
  <div class="panel stack"><h3>Your net worth, age 18 to 80</h3><div class="chart">${chartSVG()}</div>
    <p>Dots mark big life events (hover or tap to see them). ${kidLine} ${S.partner?'You live with your partner.':'You are single.'} You were laid off ${S.layoffs} time${S.layoffs===1?'':'s'}.</p></div>
  <div class="panel stack"><h3>Your life, year by year</h3><ul class="timeline">${S.events.map(e=>`<li><span class="a">${e.age}</span><span>${e.text}</span></li>`).join('')}</ul></div>
  <div class="panel stack"><h3>The hand you were dealt</h3>
    <p>Every time your race, gender, family wealth, or parents' education changed something in your life, the game wrote it down. Your own choices and luck are listed last.</p>
    <ul class="ledger">${ledger}</ul></div>
  <div class="panel stack"><h3>Record your result</h3><p>Copy this line onto the class chart.${S.gentle?' This life was played in gentle mode, so it had no serious-illness or death surprises.':''}</p>
    <div class="resline" id="res">${resLine}</div>
    <div class="row"><button class="btn ghost" id="copy">Copy result</button><span id="cmsg" aria-live="polite"></span></div></div>
  <div class="panel stack"><h3>Bellevue wasn't always open to everyone</h3>
    <p>Before World War II, Bellevue was a farm town known for strawberries, and many of its farmers were Japanese immigrants. In 1942 the U.S. government forced them into incarceration camps. After the war, schemes kept many families from getting their land back.</p>${src('strawberry')}
    <p>Developers and real estate companies also wrote racial restrictive covenants into property deeds across the Seattle area, including in Clyde Hill next to Bellevue. These clauses barred people of color from buying homes. The 1968 federal Fair Housing Act made them illegal, but many are still printed in old deeds. Owning a home is how most American families pass down wealth, which helps explain why the "family wealth" card is dealt so differently by race today.</p>${src('covenants')}
  </div>
  <div class="panel stack"><h3>Talk it over</h3><ol class="qs">
    <li>Which part of your card mattered most for your life? Which mattered least?</li>
    <li>Find someone who made similar choices but got a very different score. What was different about the cards you were dealt?</li>
    <li>Which outcomes came from your choices, which from luck, and which from your card?</li>
    <li>For whom is Bellevue "livable"? Use at least two numbers from the class chart.</li>
    <li>Pick one thing Bellevue or Washington already does (like the College Grant or paid sick leave) or could do to make the city more livable. Who would it help most?</li>
  </ol></div>
  <div class="row"><button class="btn" id="again">Deal a new life</button><button class="btn ghost" id="same">Replay this card</button></div>
  <details class="panel"><summary>All sources and game estimates</summary>
  <ul class="sources" style="margin-top:12px">
    ${Object.values(SRC).map(s=>`<li><a href="${s.u}" target="_blank" rel="noopener">${s.t}</a></li>`).join('')}
    <li><b>Game estimates</b> (not from one source): family-wealth and parent-education odds (shaped to match King County patterns); beginner pay at the 10th percentile, reaching the median after 10 years; promotion steps (halfway to the 90th percentile, then the 90th) and promotion titles and odds; the 2-month cash reserve for buying a home; divorce mediation ($3,000) and child support ($800 a month); adoption costs used ($1,000 and $30,000); foster children's food and spending; 47% foster reunification applied as a coin flip next chapter; paid-leave pay uses the state formula with a $1,830 average weekly wage; gender pay factors (90% and 108%); completion odds for Bellevue College, apprenticeships, each major, and going back to school; a $14,000 part-time job for full-time students; used-car costs ($700 a month); shared-room rent ($1,300); groceries (close to USDA's moderate-cost plan); the 10% early-withdrawal tax is real, but plans' hardship rules are simplified; everyday spending levels (built from the BLS Seattle-area spending shares); utilities; surprise costs each year; insurance, dental, and medical costs by benefit level; layoff chances (4%, 12%, 22% per chapter, rising for jobs exposed to AI); severance; 6 months of job searching; how often each group meets rental discrimination; breakup chance (7% per chapter); promotion odds; credit card interest (18% a year); rent and home values rising 1% a year faster than inflation; family gifts ($30,000 and $100,000); the 43% lending limit and 3% closing costs; soccer, tutoring, vacation, and pet costs; the chance of a big surprise (about 55% per chapter); the $30 pay-in-4 late fee and how often it happens; car repair, air conditioner, air purifier, and kid phone prices; how long a laid-off partner takes to find work (4 months); bonus size (5% of pay); 4% yearly growth for retirement savings above inflation; the stress level (75) that leads to burnout; how often a friend repays a loan. Taxes use 2026 federal brackets for single filers with the $2,200 child tax credit; each partner is taxed separately.</li>
  </ul></details>
  </section>`);
  $('#again').onclick=()=>start(newCode());
  $('#same').onclick=()=>{ settings.mode=S.mode; settings.gentle=S.gentle; start(S.code) };
  $('#copy').onclick=async()=>{ try{ await navigator.clipboard.writeText(resLine); $('#cmsg').textContent='Copied.' }catch(e){ const rg=document.createRange(); rg.selectNodeContents($('#res')); const sel=getSelection(); sel.removeAllRanges(); sel.addRange(rg); $('#cmsg').textContent='Selected. Press Ctrl+C or ⌘C to copy.' } };
}

title();


function activitiesScene(){show('<section class="scene"><span class="eyebrow">Activities</span><h2>Side activities and mini-games</h2><p>Choose an activity to pass the time and earn extra money or gain benefits.</p><div class="choices">' + choiceBtn('sidegig','Take a side gig','Earn extra money on the side. Available gigs vary by age and skills.','') + '' + choiceBtn('garagesale','Have a garage sale','Sell unwanted items at home. Good for clearing clutter and making quick cash.','') + '' + choiceBtn('train','Job training','Participate in workplace training to improve your skills and increase future pay.','') + '' + choiceBtn('donate','Charitable donation','Donate to charity. Reduces your savings but may increase belonging.','') + '' + choiceBtn('petadopt','Pet adoption','Adopt a pet from the shelter. Provides companionship and stress relief.','') + '' + choiceBtn('stockmarket','Stock market event','Invest in the stock market. Prices may rise or fall based on economic conditions.','') + '' + choiceBtn('promotion','Job promotion','Seek a promotion at work. Extra projects and weekend prep for a month.','') + '' + choiceBtn('back','Back to game','Return to the main life simulation.','') + '</div></section>');bindChoices(k=>{if(k==='back'){reveal(); return }if(k==='sidegig'){ sideGigScene(); return }if(k==='garagesale'){ garageSaleScene(); return }if(k==='train'){ trainingScene(); return }if(k==='donate'){ donateScene(); return }if(k==='petadopt'){ petAdoptScene(); return }if(k==='stockmarket'){ stockMarketScene(); return }if(k==='promotion'){ promotionScene(); return }})}

/* Permanent activities button */
document.addEventListener('DOMContentLoaded', function() { var btn = document.createElement('button'); btn.id = 'permaActivitiesBtn'; btn.className = 'btn'; btn.style.cssText = 'position:fixed;top:10px;right:10px;padding:6px 12px;font-size:1rem;background:#0066cc;color:white;border:none;border-radius:4px;z-index:1000'; btn.textContent = 'Activities'; btn.onclick = function() { activitiesScene(); }; document.body.appendChild(btn); });
