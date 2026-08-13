import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Hem" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/bilder", label: "Bilder" },
  { to: "/prislista-tradfallning", label: "Prislista Trädfällning" },
  { to: "/prislista-bygg", label: "Prislista Bygg & Snickeri" },
  { to: "/kontakt", label: "Kontakt" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#1a2e1a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🌲</span>
          <span className="text-white font-bold text-sm tracking-wide leading-tight">
            Trädfällar
            <br />
            <span className="text-green-400">Kompisarna</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="hidden md:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
          >
            Gratis offert
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl p-1"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobilmeny */}
      {isOpen && (
        <div className="md:hidden bg-[#1a2e1a] border-t border-white/10 px-6 pb-4 pt-2 flex flex-col gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/kontakt"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center transition"
          >
            Gratis offert
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
