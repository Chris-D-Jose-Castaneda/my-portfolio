// src/components/Knowledge.jsx
import React from "react";
import { FiBookOpen, FiCpu, FiDatabase, FiBriefcase, FiMic, FiGlobe } from "react-icons/fi";
import { FaUniversity, FaTools } from "react-icons/fa";

/* ----------- Asset helper (works with /public) ----------- */
const img = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

/* ---------------- UI helpers ---------------- */
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm ${className}`}>
    {children}
  </div>
);

const Section = ({ icon, title, subtitle, children }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 inline-flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
    {children}
  </span>
);

const ExtLink = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`text-blue-600 dark:text-blue-400 hover:underline break-words ${className}`}>
    {children}
  </a>
);

/* ---------------- Cornell badge ---------------- */
const CornellBadge = ({ size = 44, subtitle = "B.S. in Statistics" }) => (
  <div className="flex items-center gap-3">
    <img src={img("/assets/Cornell_University_Logo.png")} alt="Cornell University seal" width={size} height={size} loading="lazy" className="object-contain" />
    <div className="text-sm leading-tight">
      <div className="font-medium text-gray-900 dark:text-gray-100">Cornell University</div>
      {subtitle && <div className="text-gray-600 dark:text-gray-300">{subtitle}</div>}
    </div>
  </div>
);

/* ---------------- Data ---------------- */
const timeline = [
  {
    skill: "Excel",
    years: 7,
    bullets: [
      "Spreadsheet modeling and finance templates with solid modeling hygiene",
      "Pivot Tables, Power Query, VBA",
      "VLOOKUP or XLOOKUP, INDEX or MATCH, common shortcuts",
    ],
  },
  {
    skill: "Python",
    years: 4,
    bullets: [
      "Data wrangling, ML, backtesting, automation, web scraping",
      "NumPy · pandas · scikit-learn · statsmodels · TensorFlow · Keras",
      "Matplotlib · Seaborn · Plotly",
    ],
  },
  {
    skill: "R",
    years: 4,
    bullets: [
      "Machine Learning, Time Series, Data Visualization",
      "tidyverse · forecast · prophet · caret · ggplot2 · shiny",
    ],
  },
  {
    skill: "SQL",
    years: 3,
    bullets: [
      "PostgreSQL · MySQL · Microsoft SQL Server · SQLite",
      "AWS RDS with query design and tuning",
    ],
  },
  {
    skill: "Front End Development",
    years: 3,
    bullets: ["React · Vite · Tailwind · HTML · CSS · JavaScript"],
  },
];

const languages = ["Python", "R", "SQL", "JavaScript", "C#"];
const databases = ["PostgreSQL", "MySQL", "Microsoft SQL Server", "SQLite", "AWS RDS"];
const libs = [
  "NumPy",
  "Pandas",
  "scikit-learn",
  "Statsmodels",
  "TensorFlow",
  "Keras",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "QuantLib",
  "BeautifulSoup",
  "Selenium",
  "Spark",
  "Docker",
  "Shiny",
  "ggplot2",
  "tidyverse"
];
const devTools = [
  "Git",
  "CI/CD",
  "A/B Testing",
  "Jira",
  "AWS S3",
  "AWS Redshift",
  "AWS QuickSight",
  "React",
  "Vite",
  "Tailwind",
  "Flask",
  "LaTeX",
  "Microsoft Word",
  "PowerPoint",
  "JMP",
  "Tableau",
  "Power BI",
];

const coreAreas = ["Data Science", "Data Engineering", "Data Analysis", "Machine Learning", "Quantitative Analysis", "Data Visualizations"];

const coursework = [
  "Machine Learning",
  "Time Series Analysis",
  "Econometrics",
  "Probability Models & Inference",
  "Statistical Modeling",
  "Multivariate Analysis",
  "Statistical Sciences II",
  "Data Science & Mining",
  "Python Programming and its Applications in Statistics",
  "Causal Inference",
  "Linear Algebra",
  "Multivariable Calculus",
  "Theory of Statistics",
  "Business Computing",
];

/* ---------- Finance platforms (home pages) ---------- */
const platforms = {
  dataApis: [
    { label: "FRED API", url: "https://fred.stlouisfed.org/docs/api/fred/" },
    { label: "US Census Data", url: "https://data.census.gov/" },
    { label: "Treasury FX Rates", url: "https://fiscaldata.treasury.gov/datasets/treasury-reporting-rates-exchange/treasury-reporting-rates-of-exchange" },
    { label: "Polygon", url: "https://polygon.io/" },
    { label: "Yahoo Finance", url: "https://finance.yahoo.com/" },
    { label: "Alpaca Markets", url: "https://alpaca.markets/" },
    // moved here per request:
    { label: "FINRA Fixed Income", url: "https://www.finra.org/finra-data/fixed-income" },
    { label: "Backtrader", url: "https://www.backtrader.com/" },
  ],
  marketData: [
    { label: "Bloomberg", url: "https://www.bloomberg.com/" },
    { label: "S&P Capital IQ Pro", url: "https://www.spglobal.com/marketintelligence/en/solutions/sp-capital-iq-pro" },
    { label: "LSEG", url: "https://www.lseg.com/en" },
    { label: "Capital IQ", url: "https://www.capitaliq.com/" },
    { label: "PitchBook", url: "https://pitchbook.com/" },
    { label: "CEIC Data", url: "https://www.ceicdata.com/en" },
    { label: "The Economist Intelligence Unit", url: "https://www.eiu.com/" },
    { label: "FDI Markets", url: "https://www.fdimarkets.com/" },
  ],
};

/* ---------- Logos ---------- */
const newsLogos = [
  { alt: "WSJ", src: "/assets/Wall_Street_Journal.png", url: "https://www.wsj.com/" },
  { alt: "Financial Times", src: "/assets/Financial_Times.png", url: "https://www.ft.com/" },
  { alt: "The Economist", src: "/assets/The_Economist_Logo.png", url: "https://www.economist.com/" },
  { alt: "Bloomberg", src: "/assets/Bloomberg.png", url: "https://www.bloomberg.com/" },
  { alt: "NYTimes", src: "/assets/NYT-Logo.png", url: "https://www.nytimes.com/section/business" },
];

const podcastLogos = [
  { alt: "Morning Brew Daily", src: "/assets/Morning_Brew_Daily.png", url: "https://www.morningbrew.com/stories/morning-brew-podcasts" },
  { alt: "Bloomberg Daybreak: US", src: "/assets/Bloomberg_DayBreak.png", url: "https://www.bloomberg.com/podcasts" },
  { alt: "The Rundown", src: "/assets/The_Rundown.png", url: "https://open.spotify.com/show/0VYfS0q26zf0cFc5VuCjwG" },
  { alt: "The Journal (WSJ)", src: "/assets/The_Journal.png", url: "https://www.wsj.com/podcasts/the-journal" },
];

/* ---------------- Small components ---------------- */
const Timeline = () => (
  <Card className="p-6">
    <ol className="relative ml-3 border-s-2 border-gray-200 dark:border-gray-800">
      {timeline.map((t, i) => (
        <li key={t.skill} className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-white dark:ring-gray-900 text-white text-xs font-bold">
            {i + 1}
          </span>
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t.skill}</h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">{t.years}+ yrs</span>
          </div>
          <ul className="mt-2 list-disc ps-5 text-sm text-gray-700 dark:text-gray-300">
            {t.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Card>
);

const ChipGroup = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((x) => (
      <Pill key={x}>{x}</Pill>
    ))}
  </div>
);

const LinkList = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
    {items.map(({ label, url }) => (
      <li key={label} className="flex items-start gap-2">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700" aria-hidden />
        <ExtLink href={url}>{label}</ExtLink>
      </li>
    ))}
  </ul>
);

const GridCards = ({ children }) => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;

/* -------- Seamless marquee belt (never restarts) -------- */
function MarqueeBelt({ items, height = 56, duration = 24000 }) {
  // 3x list + translateX(-33.333%) keeps the sequence continuous with no visual jump
  const extended = [...items, ...items, ...items];

  return (
    <div className="relative mx-auto max-w-5xl">
      <style>{`
        @keyframes beltScroll33 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="overflow-hidden rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">
        <div
          className="flex items-center gap-10 py-4 px-6"
          style={{
            width: "300%",
            animation: `beltScroll33 ${duration}ms linear infinite`,
          }}
        >
          {extended.map((l, i) => (
            <a key={`${l.alt}-${i}`} href={l.url} target="_blank" rel="noopener noreferrer" className="shrink-0 opacity-90 hover:opacity-100 transition">
              <img src={img(l.src)} alt={`${l.alt} logo`} className="object-contain" style={{ height }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
export default function Knowledge() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Hero */}
      <header className="rounded-2xl bg-gradient-to-b from-teal-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200/70 dark:border-gray-800 p-6 sm:p-10 text-center">
        <img src={img("/assets/Cornell_University_Logo.png")} alt="Cornell University seal" className="mx-auto h-14 w-14 object-contain mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Knowledge & Skills</h1>

        <p className="mt-4 max-w-4xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Graduated with a Bachelor of Science in Statistics in five semesters. Coursework in time series, econometrics, and machine learning highlighted how data drives markets sparking curiosity.
          I am studying CFA material that covers financial statement analysis, equity investments, fixed income, and derivatives so I can evaluate value and risk with greater discipline and sharpen portfolio models.
          I am drawn to the intersection of quantitative data, markets, and technology by building research pipelines, testing hypotheses, and translating insights into decisions.
          Over the next five years I hope to have a career in finance or tech (or both!) to improve my risk management, scale production data and machine learning pipelines, and contribute to a buy side or markets team where I can combine research, engineering, and portfolio thinking.
          
        </p>

        {/* Daily stack quick chips */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Pill>Python</Pill>
          <Pill>R</Pill>
          <Pill>SQL</Pill>
          <Pill>Excel</Pill>
        </div>

        {/* Looping news logos */}
        <div className="mt-6">
          <MarqueeBelt items={newsLogos} height={56} duration={26000} />
        </div>
      </header>

      {/* Education */}
      <Section icon={<FaUniversity className="text-teal-500" />} title="Education">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CornellBadge />
            <div className="flex flex-wrap gap-2">
              {["Statistical Modeling", "Probability", "Machine Learning", "Time Series", "Econometrics"].map((m) => (
                <Pill key={m}>{m}</Pill>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Technical Timeline */}
      <Section icon={<FiCpu className="text-teal-500" />} title="Main Technical Skills Timeline">
        <Timeline />
      </Section>

      {/* Skills Inventory */}
      <Section icon={<FaTools className="text-teal-500" />} title="Skills Inventory">
        <GridCards>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Languages</h3>
            <ChipGroup items={languages} />
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Libraries / Frameworks</h3>
            <ChipGroup items={libs} />
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Databases</h3>
            <ChipGroup items={databases} />
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Developer Tools & BI</h3>
            <ChipGroup items={devTools} />
          </Card>
        </GridCards>
      </Section>

      {/* foundations & coursework */}
      <Section icon={<FiBookOpen className="text-teal-500" />} title="Foundations & Coursework">
        <GridCards>
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Core Areas</h3>
            <ChipGroup items={coreAreas} />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-2">Additional Foundations</h3>
            <div className="flex flex-wrap gap-2">
              <Pill>Stochastic Processes & Calculus</Pill>
              <Pill>Differential Equations</Pill>
              <Pill>Financial Accounting</Pill>
              <Pill>Finance</Pill>
              <Pill>Financial Analysis</Pill>
              <Pill>Spreadsheet Modeling</Pill>
            </div>
          </Card>

          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Representative Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          </Card>
        </GridCards>
      </Section>

      {/* Finance Platforms (Data/APIs + Market Data) */}
      <Section icon={<FiDatabase className="text-teal-500" />} title="Finance Data & Platforms" subtitle="APIs, market data, and fixed-income resources I use. I primarily use LSEG and Capital IQ for market data platforms and alpaca markets API for data.">
        <GridCards>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Data & APIs</h3>
            <LinkList items={platforms.dataApis} />
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Market Data Platforms</h3>
            <LinkList items={platforms.marketData} />
          </Card>
        </GridCards>
      </Section>

      {/* Market Monitoring — News & Podcasts */}
      <Section icon={<FiMic className="text-teal-500" />} title="Market Monitoring — News & Podcasts">
        <GridCards>
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">News</h3>
            <MarqueeBelt items={newsLogos} height={48} duration={30000} />
          </Card>
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Podcasts</h3>
            <MarqueeBelt items={podcastLogos} height={48} duration={32000} />
          </Card>
        </GridCards>
      </Section>

      {/* Professional Interests & Markets */}
      <Section icon={<FiBriefcase className="text-teal-500" />} title="Professional Interests & Markets">
        <Card className="p-6 space-y-6">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            I am pursuing these credentials to develop market knowledge ,
            I’m open to pursue and take these or other relevant exams.
            I’m focused on roles across both buy side and sell side by applying research and engineering on the buy side for portfolio construction and systematic strategies and sharpening market acumen on the sell side across coverage, trading, execution, and client advisory.
          </p>

          <GridCards>
            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Roles</h3>
              <div className="space-y-3">
                {[
                  { cat: "Sales & Trading", roles: ["Trader", "Sales", "Broker"] },
                  { cat: "Research / Analyst", roles: ["Quant", "Market/Research Analyst", "Data Scientist", "Data Analyst"] },
                  { cat: "Portfolio Management", roles: ["Portfolio Manager"] },
                  { cat: "M&A / Capital Raising", roles: ["ECM/DCM", "M&A Coverage", "Investment Banking"] },
                ].map(({ cat, roles }) => (
                  <div key={cat}>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{cat}</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {roles.map((r) => (
                        <Pill key={`${cat}-${r}`}>{r}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Markets</h3>
              <div className="space-y-4">
                {[
                  { cat: "Equities", items: ["Cash Equity", "ETFs", "Options"] },
                  { cat: "Fixed Income", items: ["Rates", "Credit", "US Municipals"] },
                  { cat: "FX", items: ["Spot", "Forwards/Futures", "Options"] },
                  { cat: "Commodities", items: ["Crude", "Nat Gas", "Metals"] },
                  { cat: "Alternatives", items: ["Hedge Funds", "Private Credit", "Real Estate", "Infrastructure"] },
                ].map(({ cat, items }) => (
                  <div key={cat}>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{cat}</div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {items.map((it) => (
                        <Pill key={`${cat}-${it}`}>{it}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </GridCards>

          {/* Certifications in progress — now linked */}
          <div className="pt-2">
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Certifications in progress</div>
            <div className="flex flex-wrap gap-2">
              <ExtLink href="https://www.cfainstitute.org/programs/cfa">
                <Pill>Chartered Financial Analyst (CFA) Program Level I (prep)</Pill>
              </ExtLink>
              <ExtLink href="https://www.finra.org/registration-exams-ce/qualification-exams/securities-industry-essentials-exam">
                <Pill>FINRA SIE Securities Industry Essentials</Pill>
              </ExtLink>
              <ExtLink href="https://www.finra.org/registration-exams-ce/qualification-exams/series7">
                <Pill>Series 7 General Securities Representative (GSRE)</Pill>
              </ExtLink>
              <ExtLink href="https://www.finra.org/registration-exams-ce/qualification-exams/series63">
                <Pill>Series 63 Uniform Securities Agent State Law</Pill>
              </ExtLink>
              <ExtLink href="https://www.finra.org/registration-exams-ce/qualification-exams/series57">
                <Pill>Series 57 Securities Trader Representative</Pill>
              </ExtLink>
              <ExtLink href="https://www.finra.org/registration-exams-ce/qualification-exams/series79">
                <Pill>Series 79 Investment Banking Representative</Pill>
              </ExtLink>
            </div>
          </div>
        </Card>
      </Section>

      {/* Strengths & Interests */}
      <Section icon={<FiGlobe className="text-teal-500" />} title="Strengths & Interests">
        <GridCards>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Active Strength Traits</h3>
            <ChipGroup items={["Curious", "Collaborative", "Independent", "Analytical", "Execution oriented", "Clear communicator"]} />
          </Card>
          <Card className="p-6 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Interests</h3>
            <ChipGroup items={["Tech", "Finance", "Portfolio Management", "Quant Research", "Alternative Investments"]} />
          </Card>
        </GridCards>
      </Section>
    </div>
  );
}
