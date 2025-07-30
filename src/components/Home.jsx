// src/components/Home.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import SocialLinks from "./SocialLinks";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

const GitHubCalendar = lazy(() => import("react-github-calendar"));

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const TRACK_ID = "0VdABGxYMKu8kh9aOw0X3e";
  const username = "Chris-D-Jose-Castaneda";

  useEffect(() => {
    // ensure calendar only renders in the browser
    setMounted(true);
  }, []);

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* HERO */}
      <section className="mb-16 flex flex-col md:flex-row items-start md:items-center">
        {/* Intro */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold dark:text-gray-100">
            <Typewriter
              words={["Hi, I’m Chris Jose!"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="mt-2 text-lg dark:text-gray-200">
            A{" "}
            <span className="font-semibold">
              <Typewriter
                words={["Statistician", "Data Scientist", "Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>{" "}
            From Naples, FL{" "}
            <GiPalmTree className="inline-block text-2xl text-teal-500" />
          </p>
          <p className="mt-6 text-base italic dark:text-gray-300">
            Mathematics | Economics | Machine Learning | Programming |
            Stochastic Processes | Time Series Analysis | Multivariate
            Analysis | Quantitative Analysis
          </p>
        </div>

        {/* Headshot & Spotify */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <img
            src="/assets/headshot.png"
            alt="Chris Jose"
            className="w-48 h-48 rounded-full mb-4 object-cover shadow-lg"
          />

          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
            >
              <FaPlay className="mr-2" />
              What I’m listening to
            </button>
          ) : (
            <iframe
              src={`https://open.spotify.com/embed/track/${TRACK_ID}`}
              width="320"
              height="100"
              frameBorder="0"
              allow="encrypted-media"
              className="rounded-lg shadow-lg mt-4"
              title="Spotify Player"
            />
          )}
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="mb-16 flex justify-center md:justify-start space-x-8 text-5xl">
        <SocialLinks />
      </section>

      {/* GITHUB CONTRIBUTIONS */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
          GitHub Contributions
        </h2>
        {mounted && (
          <Suspense
            fallback={
              <p className="text-center dark:text-gray-300">
                Loading contributions…
              </p>
            }
          >
            <GitHubCalendar
              username={username}
              blockSize={14}
              blockMargin={3}
              fontSize={12}
            />
          </Suspense>
        )}
      </section>

      {/* SKILLS & HOBBIES */}
      <div className="grid md:grid-cols-2 gap-12">
        <Skills />
        <Hobbies />
      </div>
    </main>
);
}
