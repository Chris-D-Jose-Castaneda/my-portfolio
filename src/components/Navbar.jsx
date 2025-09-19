// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHome,
  FiFolder,
  FiInfo,
  FiMail,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiBookOpen, 
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // On mount: read theme preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Persist theme toggles
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { name: "Home", to: "/", icon: <FiHome size={18} /> },
    { name: "About", to: "/about", icon: <FiInfo size={18} /> },
    { name: "Skills", to: "/Skills", icon: <FiBookOpen size={18} /> }, 
    { name: "Projects", to: "/projects", icon: <FiFolder size={18} /> },
    {
      name: "Contact",
      to: "mailto:chris.jose.castaneda@gmail.com",
      icon: <FiMail size={18} />,
      external: true,
    },
  ];

  return (
    <nav className="fixed w-full z-20 bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Search */}
        <div className="flex items-center space-x-4">
          {/* Gradient CJ logo */}
          <NavLink
            to="/"
            className="
              text-2xl font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r 
              from-teal-500 via-teal-600 to-blue-500
              dark:from-teal-300 dark:via-teal-400 dark:to-teal-500
            "
          >
            CJ
          </NavLink>

          {/* Search button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            aria-label="Open search"
          >
            <FiSearch />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map(({ name, to, icon, external }) =>
            external ? (
              <li key={name}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ) : (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                >
                  {icon}
                  <span>{name}</span>
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Dark toggle + Mobile menu */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light switch */}
          <button
            onClick={() => setDarkMode((dm) => !dm)}
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <ul className="space-y-1">
            {navItems.map(({ name, to, icon, external }) =>
              external ? (
                <li key={name}>
                  <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                </li>
              ) : (
                <li key={name}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center space-x-2 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {icon}
                    <span>{name}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-start justify-center pt-24">
          <div className="bg-white dark:bg-gray-700 rounded-lg w-11/12 max-w-md p-4 shadow-lg">
            <div className="flex items-center mb-4">
              <input
                autoFocus
                type="text"
                placeholder="Find anything…"
                className="
                  flex-grow px-4 py-2 rounded-l-md border border-gray-300
                  focus:border-blue-500 focus:outline-none
                  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-300 dark:text-gray-100
                "
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="
                  px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-r-md
                  hover:bg-gray-200 dark:hover:bg-gray-500
                  focus:outline-none
                "
              >
                <FiX className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-600">
              {["Home", "Projects", "About", "Skills"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setSearchOpen(false)}
                    className="
                      block px-4 py-2 text-gray-700 dark:text-gray-200
                      hover:bg-gray-100 dark:hover:bg-gray-600
                    "
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
