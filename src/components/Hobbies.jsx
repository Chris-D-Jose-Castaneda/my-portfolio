// src/components/Hobbies.jsx
import React from "react";
import { GiWeightLiftingUp, GiGardeningShears } from "react-icons/gi";
import { FaFutbol, FaUtensils } from "react-icons/fa";

export default function Hobbies() {
  const hobbies = [
    { icon: <GiWeightLiftingUp />, label: "Powerlifting" },
    { icon: <GiGardeningShears />, label: "Gardening" },
    { icon: <FaFutbol />, label: "F.C. Bayern Munich Fan" },
    { icon: <FaUtensils />, label: "Cooking" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
        Interests
      </h2>
      <ul className="space-y-3">
        {hobbies.map(({ icon, label }) => (
          <li key={label} className="flex items-center space-x-2">
            <span className="text-2xl text-indigo-700 dark:text-indigo-300">{icon}</span>
            <span className="text-2xl text-indigo-700 dark:text-indigo-300">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
