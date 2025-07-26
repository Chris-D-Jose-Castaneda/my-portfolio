// src/components/About.jsx
import React, { useState, useEffect } from "react";
import { GiFruitTree, GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";

// A simple auto‑advancing carousel with ‹ › controls
function Carousel({ items, renderItem, interval = 5000 }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % items.length), interval);
    return () => clearTimeout(t);
  }, [idx, items.length, interval]);

  return (
    <div className="relative my-4">
      {renderItem(items[idx])}
      <button
        onClick={() => setIdx((idx - 1 + items.length) % items.length)}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 dark:bg-gray-800/50 p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition"
      >
        ‹
      </button>
      <button
        onClick={() => setIdx((idx + 1) % items.length)}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 dark:bg-gray-800/50 p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition"
      >
        ›
      </button>
    </div>
  );
}

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
    url: "https://www.google.com/maps?s=web&sca_esv=716e28d2d22fbf12&client=firefox-b-1-d&lqi=ChBzYW4ganVsaWFuIHRhY29zSML0vZyYgoCACFoeEAAQARACGAAYARgCIhBzYW4ganVsaWFuIHRhY29zkgESbWV4aWNhbl9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5LYkdGTGFEQjNSUkFCqgFOCggvbS8wN2NyYxABKgkiBXRhY29zKAAyHxABIhsUDCsq_iCtcG01klemvBIqDDgsuTr7brJ8cKAyFBACIhBzYW4ganVsaWFuIHRhY29zugEHCgV0YWNvc-ABAPoBBAgAEEs&phdesc=jY78aOobxkQ&vet=12ahUKEwiQ3f3EpdmOAxWVQjABHf9kNGUQ1YkKegQIKhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KWsKeuQDQNuIMYx18G-4ABG-&daddr=11601+S+Cleveland+Ave+%231,+Fort+Myers,+FL+33907",
  },
];

const cookingFavorites = [
  { name: "Ribeye w/ Chimichurri & Mashed Potatoes", img: "/assets/Ribeye.png" },
  { name: "Steak", img: "/assets/Grilled_Wings_Steak.png" },
  { name: "Vodka Rigatoni w/ Baked Chicken", img: "/assets/vodka_rigatoni.png" },
];

const bayernGames = [
  "Bayern vs PSG: 1–0 (UCL Group Stage)",
  "Bayern vs Bayer Leverkusen: 3–0 (UCL Ro16)",
  "Bayern vs Leipzig: 5–1 (MD 15)",
];

const gardening = [
  { name: "Mango Trees", icon: <GiFruitTree /> },
  { name: "Coconut Trees", icon: <GiFruitTree /> },
  { name: "Passion Fruit", icon: <GiFruitTree /> },
  { name: "Papayas", icon: <GiFruitTree /> },
  { name: "Tomatoes", icon: <GiFruitTree /> },
];

const gymPRs = [
  { name: "Squat: 455 lb", icon: <GiWeightLiftingUp /> },
  { name: "Bench Press: 255 lb", icon: <FaDumbbell /> },
  { name: "Deadlift: 551 lb", icon: <GiWeightLiftingUp /> },
];

export default function About() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Bio */}
      <section>
        <h1 className="text-3xl font-bold mb-4 dark:text-white">About Me</h1>
        <p className="italic leading-loose text-gray-800 dark:text-white">
          I’m Chris Jose, an aspiring quantitative analyst with a solid grounding
          in econometrics, statistics, machine learning, time series modeling,
          and stochastic processes. My academic journey through Calculus I–III,
          Linear Algebra, and Differential Equations has equipped me with the
          quantitative tools to tackle complex data challenges. I thrive at the
          intersection of statistical analysis, cutting‑edge technology, and
          finance, where data‑driven insights can fuel impactful decisions. Beyond
          analytics, I’m an avid cook and watch enthusiast, while continuing to
          improve my skills. I believe that combining rigorous quantitative
          methods with creative problem‑solving unlocks transformative
          opportunities across industries.
        </p>
        <p className="mt-2">
          <a
            href="https://www.google.com/maps/contrib/110458568758509827524/reviews?hl=en-US&ved=1t%3A139470&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline dark:text-teal-300"
          >
            Fun Fact: Check out my Google reviews!
          </a>
        </p>
      </section>

      {/* Grid layout */}
      <section className="grid md:grid-cols-3 md:grid-rows-3 gap-12">
        {/* Eats & Cooking spans 2 columns × 3 rows */}
        <div className="md:col-span-2 md:row-span-3 text-center">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Eats & Cooking
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700">
            <Carousel
              items={[...favoriteSpots, ...cookingFavorites]}
              renderItem={(item) => (
                <a href={item.url || "#"} target="_blank" rel="noopener noreferrer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-185 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    {item.city && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.city}
                      </p>
                    )}
                  </div>
                </a>
              )}
            />
          </div>
        </div>

        {/* Favorite Cologne */}
        <div className="text-center md:col-start-3 md:row-start-1">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Favorite Cologne
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700 flex flex-col items-center">
            <img
              src="/assets/parfums_de_marly_greenly.png"
              alt="Parfums De Marly Greenly"
              className="w-24 h-24 rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Parfums De Marly Greenly
            </h3>
          </div>
        </div>

        {/* Watches */}
        <div className="text-center md:col-start-3 md:row-start-2">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Watches
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700 flex flex-col items-center">
            <img
              src="/assets/seiko_presage.png"
              alt="Seiko Presage"
              className="w-20 h-20 rounded mb-4"
            />
            <a
              href="https://www.exquisitetimepieces.com/watch-brands/seiko-presage.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-900 dark:text-white hover:text-teal-500 transition"
            >
              Seiko Presage
            </a>
          </div>
        </div>

        {/* Bayern Games */}
        <div className="text-center md:col-start-3 md:row-start-3">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Best 24/25 Season Bayern Munich Games
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700">
            <ul className="list-none space-y-1 text-gray-800 dark:text-gray-200">
              {bayernGames.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gardening & Gym PR */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Gardening
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700">
            <Carousel
              items={gardening}
              renderItem={(g) => (
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-4xl text-green-600 dark:text-green-400">
                    {g.icon}
                  </span>
                  <span className="text-lg text-gray-900 dark:text-white">
                    {g.name}
                  </span>
                </div>
              )}
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-300">
            Gym Personal Records
          </h2>
          <div className="p-6 rounded-lg shadow dark:shadow-none dark:border dark:border-gray-700">
            <Carousel
              items={gymPRs}
              renderItem={(p) => (
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-4xl text-red-600 dark:text-red-400">
                    {p.icon}
                  </span>
                  <span className="text-lg text-gray-900 dark:text-white">
                    {p.name}
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
