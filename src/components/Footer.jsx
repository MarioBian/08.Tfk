import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a2e1a] text-gray-400 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        {/* Varumärke */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🌲</span>
            <span className="text-white font-bold text-sm leading-tight">
              Trädfällar
              <br />
              <span className="text-green-400">Kompisarna</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500">
            Professionell trädfällning och byggtjänster i Stockholm och
            Mälardalen. Vi får jobbet gjort.
          </p>
        </div>

        {/* Snabblänkar */}
        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
            Navigering
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Hem" },
              { to: "/om-oss", label: "Om oss" },
              {
                to: "/prislista-tradfallning",
                label: "Prislista Trädfällning",
              },
              { to: "/prislista-bygg", label: "Prislista Bygg & Snickeri" },
              { to: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
            Kontakt
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span>📞</span> 070-123 45 67
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> info@tfk.se
            </li>
            <li className="flex items-center gap-2">
              <span>📍</span> Stockholm & Mälardalen
            </li>
          </ul>
        </div>
      </div>

      {/* Bottenlinje */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>&copy; 2026 Trädfällarkompisarna. Alla rättigheter förbehållna.</p>
        <Link
          to="/kontakt"
          className="text-green-500 hover:text-green-400 transition font-medium"
        >
          Begär gratis offert →
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
