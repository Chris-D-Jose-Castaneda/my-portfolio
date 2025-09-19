// src/components/Projects.jsx
import React from "react";
import { FiGithub } from "react-icons/fi";

const projects = [
  // Row 1
  {
    name: "SWFL Urban Market Analysis V1",
    description:
      "Listed-home analytics for April 2025 with pricing, inventory, and geospatial views.",
    tags: ["Python", "R","EDA", "Time Series","GIS"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL-Real-Estate-Analytical-Project",
    imgSrc: "/assets/SWFL_Urban_Housing.png",
    imgAlt: "SWFL Urban Housing analysis cover",
  },
  {
    name: "SWFL Forecasting Model (V2)",
    description:
      "Sold-home forecasting over the past five years with interactive maps and stats.",
    tags: ["Python", "Time Series", "Machine Learning", "GIS"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL_Analysis_V2",
    imgSrc: "/assets/SWFL%20Forecasting%20Analysis.png",
    imgAlt: "SWFL Forecasting Analysis",
  },
  {
    name: "My Portfolio",
    description:
      "Version II built using React, Vite, TailwindCSS, and React Router.",
    tags: ["React", "Vite", "TailwindCSS", "React Router"],
    url: "https://github.com/Chris-D-Jose-Castaneda/my-portfolio",
    imgSrc: "/assets/portfolio.png",
    imgAlt: "Portfolio Screenshot",
  },

  // Row 2
  {
    name: "Premier League 2025/26 Prediction",
    description:
      "Match outcome and table projections for the 2025/26 season.",
    tags: ["Python", "Modeling", "Sports Analytics"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Premier_League_2025_26_Prediction",
    imgSrc: "/assets/Cole_Palmer.png",
    imgAlt: "Premier League model",
  },
  {
    name: "Grading Analysis",
    description:
      "Track, analyze, and visualize grading data from a spreadsheet modeling course from the past 5 semesters.",
    tags: ["Python", "Machine Learning", "Streamlit", "SQL"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Lead_Assistant_Grading_Analysis",
    imgSrc: "/assets/Grade_Analysis.png",
    imgAlt: "Lead Analysis",
  },
  {
    name: "Portfolio Strategy Comparison",
    description:
      "Backtests and compares multi-asset strategies vs SPY.",
    tags: ["Python", "Backtesting", "Pandas"],
    url: "https://github.com/Chris-D-Jose-Castaneda/portfolio-strategy-comparison",
    imgSrc: "/assets/SPY.png",
    imgAlt: "Portfolio strategy comparison",
  },

  // New card (wraps to next row)
  {
    name: "Options Pricing Calculator",
    description:
      "Interactive options pricer: BSM vs Monte Carlo w/ live controls, Greeks, CIs, and heatmaps.",
    tags: ["Streamlit", "Python", "BSM", "Monte Carlo"],
    url: "https://options-pricing-calc.streamlit.app/",
    imgSrc: "/assets/options.png",
    imgAlt: "Options pricing app",
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
            <img
              src={proj.imgSrc}
              alt={proj.imgAlt}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {proj.name}
              </h2>
              <FiGithub className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition-colors text-2xl" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {proj.description}
            </p>
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
