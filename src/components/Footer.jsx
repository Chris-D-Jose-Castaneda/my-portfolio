// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Built & Updated by Chris Jose © {year}
        </p>
      </div>
    </footer>
  );
}
