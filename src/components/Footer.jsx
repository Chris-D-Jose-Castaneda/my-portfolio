// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import {
  FaDrumstickBite, // 🥩 steak
  FaAppleAlt,      // 🍎 fruit
  FaTint,          // 💧 water
  FaCoffee,        // ☕ coffee
  FaIceCream       // 🍦 shake
} from "react-icons/fa";

const ICONS = [
  FaDrumstickBite,
  FaAppleAlt,
  FaTint,
  FaCoffee,
  FaIceCream,
];

export default function Footer() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % ICONS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = ICONS[idx];

  return (
    <footer className="border-t-2 border-red-600 dark:border-red-400 py-4">
      <p className="text-center text-red-600 dark:text-red-400 text-xl">
        made with {""}
        <ActiveIcon className="inline mx-1" />
        {" by Chris Jose"}
      </p>
    </footer>
  );
}
