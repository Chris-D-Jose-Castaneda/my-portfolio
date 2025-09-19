// src/components/SocialLinks.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

export default function SocialLinks() {
  const socials = [
    { icon: <FaGithub size={28} />, url: "https://github.com/Chris-D-Jose-Castaneda" },
    { icon: <FaLinkedin size={28} />, url: "https://www.linkedin.com/in/chris-d-jose" },
    { icon: <SiKaggle size={28} />, url: "https://www.kaggle.com/chrisjosecastaneda" },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
