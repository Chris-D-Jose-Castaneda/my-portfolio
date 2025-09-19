import React, { useEffect, useState } from "react";
import { FiWatch } from "react-icons/fi";
import { GiPerfumeBottle } from "react-icons/gi";
import { FaFutbol } from "react-icons/fa";

/* ---------- tiny UI primitives ---------- */
const Card = ({ title, rightIcon = null, children, className = "" }) => (
  <div
    className={`rounded-xl border border-gray-200/60 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm ${className}`}
  >
    {(title || rightIcon) && (
      <div className="px-5 pt-4 pb-2 flex items-center justify-center gap-2">
        {rightIcon ? (
          <div className="flex items-center gap-2">
            <span className="text-teal-600 dark:text-teal-300">{rightIcon}</span>
            <h3 className="text-[18px] font-semibold text-teal-600 dark:text-teal-300">
              {title}
            </h3>
          </div>
        ) : (
          <h3 className="text-[18px] font-semibold text-teal-600 dark:text-teal-300 text-center">
            {title}
          </h3>
        )}
      </div>
    )}
    <div className="p-5">{children}</div>
  </div>
);

function Carousel({ items, renderItem, interval = 5000 }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!items?.length) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % items.length), interval);
    return () => clearTimeout(t);
  }, [idx, items?.length, interval]);

  if (!items?.length) return null;

  return (
    <div className="relative">
      {renderItem(items[idx])}

      <button
        type="button"
        aria-label="Prev"
        onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 px-2.5 py-1 text-sm ring-1 ring-gray-300 dark:ring-gray-700 shadow hover:bg-white dark:hover:bg-gray-700"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => setIdx((i) => (i + 1) % items.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 px-2.5 py-1 text-sm ring-1 ring-gray-300 dark:ring-gray-700 shadow hover:bg-white dark:hover:bg-gray-700"
      >
        ›
      </button>
    </div>
  );
}

/* ---------- data ---------- */
const favoriteSpots = [
  {
    name: "John's of Bleecker Street",
    city: "New York, NY",
    img: "/assets/johns_of_bleeker.png",
    url: "https://johnsofbleecker.com/",
  },
  {
    name: "RPM Italian",
    city: "Washington, D.C.",
    img: "/assets/rpm_Italian.png",
    url: "https://www.rpmrestaurants.com/rpm-italian-d-c/",
  },
  {
    name: "Tacqueria San Julian",
    city: "Fort Myers, FL",
    img: "/assets/tacqueria_san_julian.png",
    url: "https://www.google.com/maps?&daddr=11601+S+Cleveland+Ave+%231,+Fort+Myers,+FL+33907",
  },
];

const cookingFavorites = [
  { name: "Ribeye w/ Chimichurri & Mashed Potatoes", img: "/assets/Ribeye.png" },
  { name: "Grilling Steak & Wings", img: "/assets/Grilled_Wings_Steak.png" },
  { name: "Vodka Rigatoni w/ Baked Chicken", img: "/assets/vodka_rigatoni.png" },
];

const bayernGames = [
  "Bayern vs Chelsea: 3-1 (UCL Group Stage)",
  "Bayern vs VFB Stuttgart: 2-1 (DFB Supercup)",
  "Bayern vs Leipzig: 6-0 (MD 1)",
];

const gardening = [
  { name: "Mango / Palm", icon: "🌴" },
  { name: "Coconuts", icon: "🥥" },
  { name: "Tomatoes", icon: "🍅" },
  { name: "Herbs", icon: "🌿" },
  { name: "Irrigation & Care", icon: "🚿" },
];

const gymPRs = [
  { name: "Squat: 455 lb", icon: "🏋️" },
  { name: "Bench Press: 255 lb", icon: "💪" },
  { name: "Deadlift: 551 lb", icon: "🏋️‍♂️" },
];

const kitchenToolkit = [
  "🍳 Stainless pan",
  "🫒 Olive oil",
  "🧂 Seasonings",
  "🔥 Preheated oven",
];

/* ---------- page ---------- */
export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 space-y-10">
      {/* About header card (like Skills) */}
      <section className="rounded-2xl bg-gradient-to-b from-teal-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-gray-200/70 dark:border-gray-800 p-6 sm:p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-3">
          About Me
        </h1>
        <p className="max-w-3xl mx-auto text-[15px] sm:text-base leading-7 text-gray-700 dark:text-gray-200 text-center">
          I’m Chris Jose, an aspiring quantitative analyst with a foundation in
          econometrics, statistics, machine learning, time series, and stochastic
          processes. Coursework in Calculus I–III, Linear Algebra, and Differential
          Equations gave me the quantitative tools to tackle data problems. I enjoy
          the intersection of stats, technology, and finance where data-driven
          insights shape decisions. Outside analytics I cook, keep up with watches,
          and grow produce in my backyard. I’ll occasionally keep up with Masterchef
          USA.
        </p>
        <div className="text-center mt-3">
          <a
            href="https://www.google.com/maps/contrib/110458568758509827524/reviews?hl=en-US&ved=1t%3A139470&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-teal-600 dark:text-teal-300 hover:underline text-sm"
          >
            Click to check out my Google reviews!
          </a>
        </div>
      </section>

      {/* Main grid: Eats (2 cols) + sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column (spans 2) */}
        <div className="space-y-6 lg:col-span-2">
          <Card title="Eats & Cooking">
            <Carousel
              items={[...favoriteSpots, ...cookingFavorites]}
              renderItem={(item) => (
                <a
                  href={item.url || "#"}
                  target={item.url ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200/70 dark:ring-gray-700">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </div>
                    {"city" in item && item.city && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.city}
                      </div>
                    )}
                  </div>
                </a>
              )}
            />
          </Card>

          {/* Row under Eats — no wasted space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card title="Gardening" className="h-full min-h-[243px]">
              <Carousel
                items={gardening}
                renderItem={(g) => (
                  <div className="flex flex-col items-center py-3">
                    <div className="text-5xl">{g.icon}</div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100 font-medium">
                      {g.name}
                    </div>
                  </div>
                )}
              />
            </Card>

            <Card title="Gym Personal Records">
              <Carousel
                items={gymPRs}
                renderItem={(p) => (
                  <div className="flex flex-col items-center py-3">
                    <div className="text-5xl">{p.icon}</div>
                    <div className="mt-2 text-gray-900 dark:text-gray-100 font-medium">
                      {p.name}
                    </div>
                  </div>
                )}
              />
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Favorite Cologne (icon + link) */}
          <Card title="Favorite Cologne">
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://parfums-de-marly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center"
              >
                {/* CHANGED COLOR HERE */}
                <GiPerfumeBottle className="text-5xl text-rose-500/90 group-hover:text-rose-400 transition-colors" />
                <span className="mt-2 font-medium text-gray-900 dark:text-gray-100">
                  Parfums De Marly Greenly
                </span>
              </a>
            </div>
          </Card>

          {/* Watches (icon + link) */}
          <Card title="Watches">
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.exquisitetimepieces.com/watch-brands/seiko-presage.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center"
              >
                {/* CHANGED COLOR HERE */}
                <FiWatch className="text-5xl text-sky-500/90 group-hover:text-sky-400 transition-colors" />
                <span className="mt-2 font-medium text-gray-900 dark:text-gray-100">
                  Seiko Presage
                </span>
              </a>
            </div>
          </Card>

          {/* Bayern section */}
          <Card
            title={
              <h3 className="text-[18px] font-semibold text-teal-600 dark:text-teal-300 text-center">
                {/* First part can wrap */}
                <span>Best 25/26 Season Bayern Munich </span>
                {/* “Games + ball” never breaks */}
                <span className="inline-flex items-center gap-2 whitespace-nowrap align-middle">
                  Games
                  <FaFutbol className="text-lg text-teal-600 dark:text-teal-300" />
                </span>
              </h3>
            }
          >
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {bayernGames.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Card>



          {/* Kitchen Toolkit keeps the column filled (replaces Current Read) */}
          <Card title="Kitchen Toolkit">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-gray-900 dark:text-gray-100">
              {kitchenToolkit.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}
