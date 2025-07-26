// src/components/Skills.jsx
import React from "react";

export default function Skills() {
  const categories = [
    {
      title: "Scripting",
      tags: ["C#", "JavaScript", "Python", "R", "SQL"],
    },
    {
      title: "Frameworks",
      tags: ["React", "Django", "TensorFlow", "Tailwind"],
    },
    {
      title: "Tools",
      tags: ["Apache Spark", "Tableau", "JMP", "Excel"],
    },
    {
      title: "Databases",
      tags: ["MySQL", "PostgreSQL", "SQLite"],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 dark:text-gray-100">
        Technical Skills
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="italic font-medium mb-2 dark:text-gray-100">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-sm font-medium
                    bg-gray-100 dark:bg-gray-700
                    text-teal-700 dark:text-teal-300
                    px-3 py-1 rounded-full
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
