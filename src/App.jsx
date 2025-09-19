import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Knowledge from "./components/Knowledge"; // <-- fix: different name

export default function App() {
  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-gray-50 text-gray-800
        dark:bg-gray-900 dark:text-gray-100
      "
    >
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} /> {/* optional new page */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
