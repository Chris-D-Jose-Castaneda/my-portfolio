import React, { useEffect } from "react";

/**
 * Only these five PDFs are linked.
 * They must live in: public/Assets/Cert/
 *   - CapIQ_201_Certificate.pdf
 *   - FactSet_Core_Products.pdf
 *   - Pitchbook_Core_Foundations_Certificate.pdf
 *   - Excel2019_Associate.pdf
 *   - LSEG_Finance_Essentials_Certification.pdf
 */
const CERTS = [
  { label: "S&P Capital IQ 201", file: "CapIQ_201_Certificate.pdf" },
  { label: "FactSet Core Products", file: "FactSet_Core_Products.pdf" },
  { label: "PitchBook Core Foundations", file: "Pitchbook_Core_Foundations_Certificate.pdf" },
  { label: "Microsoft Excel 2019 Associate", file: "Excel2019_Associate.pdf" },
  { label: "LSEG Finance Essentials", file: "LSEG_Finance_Essentials_Certification.pdf" },
];

export default function Certs() {
  // Set title + noindex meta (without bringing in Helmet)
  useEffect(() => {
    document.title = "Certificates";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold mb-1">Certificates</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Direct PDF links. This page is hidden from navigation.
      </p>

      <ul className="space-y-3">
        {CERTS.map(({ label, file }) => (
          <li key={file}>
            <a
              className="underline decoration-2 hover:no-underline focus:outline-none focus:ring"
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
