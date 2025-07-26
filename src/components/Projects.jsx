// src/components/Projects.jsx
import React from "react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    name: "Grading Analysis",
    description:
      "Maintain, analyze & visualize grading data from lead assistants.",
    tags: ["Python", "Machine Learning", "Streamlit", "SQL"],
    url:
      "https://github.com/Chris-D-Jose-Castaneda/Lead_Assistant_Grading_Analysis",
    imgSrc: "/assets/Grade_Analysis.png",
    imgAlt: "Lead Analysis",
  },
  {
    name: "SWFL Forecasting Model",
    description:
      "Quantitative case study of Southwest Florida home sales with interactive maps & stats.",
    tags: ["Python", "Time Series Analysis", "Machine Learning", "Stochastic Processes"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL_Analysis_V2",
    imgSrc: "/assets/SWFL%20Forecasting%20Analysis.png",
    imgAlt: "SWFL Forecasting Analysis",
  },
  {
    name: "My Portfolio",
    description:
      "My portfolio site, V2—built with React, Vite, TailwindCSS & React Router.",
    tags: ["React", "Vite", "TailwindCSS", "React Router"],
    url: "https://github.com/Chris-D-Jose-Castaneda/my-portfolio",
    imgSrc: "/assets/portfolio.png",
    imgAlt: "Portfolio Screenshot",
  },
];

export default function Projects() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold dark:text-gray-100">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group block bg-white dark:bg-gray-800
              p-6 rounded-lg shadow
              transition-transform duration-200
              hover:-translate-y-1
              hover:shadow-xl
              hover:ring-4 hover:ring-cyan-500/50
            "
          >
            {/* Image */}
            <img
              src={proj.imgSrc}
              alt={proj.imgAlt}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />

            {/* Title & GitHub icon */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {proj.name}
              </h2>
              <FiGithub className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition-colors text-2xl" />
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {proj.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-sm font-medium
                    bg-gray-100 dark:bg-gray-700
                    text-gray-800 dark:text-gray-200
                    px-2 py-1 rounded
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
