import React from "react";

const CERTS = [
  { label: "S&P Capital IQ 201", file: "CapIQ_201_Certificate.pdf" },
  { label: "FactSet Core Products", file: "FactSet_Core_Products.pdf" },
  { label: "PitchBook Core Foundations", file: "Pitchbook_Core_Foundations_Certificate.pdf" },
  { label: "Microsoft Excel 2019 Associate", file: "Excel2019_Associate.pdf" },
  { label: "LSEG Finance Essentials", file: "LSEG_Finance_Essentials_Certification.pdf" },
];

export default function Certs() {
  // No index: keep it hidden from search engines
  document.title = "Certificates";
  return (
    <main className="min-h-screen mx-auto max-w-3xl p-6">
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>

      <h1 className="text-2xl font-semibold mb-4">Certificates</h1>
      <p className="text-sm text-gray-600 mb-6">
        Direct links to PDF credentials. This page isn’t linked in the site nav.
      </p>

      <ul className="space-y-3">
        {CERTS.map(({ label, file }) => (
          <li key={file}>
            <a
              className="underline hover:no-underline"
              href={`/Assets/Cert/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
