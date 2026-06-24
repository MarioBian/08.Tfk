import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 px-4 -py-2">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4 text-white">
          <Link className="hover:underline" to="/">
            Hem
          </Link>
          <Link className="hover:underline" to="/om-oss">
            Om oss
          </Link>
          <Link className="hover:underline" to="/bilder">
            Bilder
          </Link>
          <Link className="hover:underline" to="/prislista-tradfallning">
            Prislista Trädfällning
          </Link>
          <Link className="hover:underline" to="/prislista-bygg">
            Prislista Bygg & Snickeri
          </Link>
          <Link className="hover:underline" to="/kontakt">
            Kontakt
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobilmeny */}
      {isOpen && (
        <div className="flex flex-col gap-2 mt-2 text-white md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Hem
          </Link>
          <Link to="/om-oss" onClick={() => setIsOpen(false)}>
            Om oss
          </Link>
          <Link to="/bilder" onClick={() => setIsOpen(false)}>
            Bilder
          </Link>
          <Link to="/kontakt" onClick={() => setIsOpen(false)}>
            Kontakt
          </Link>
          <Link to="/prislista-tradfallning" onClick={() => setIsOpen(false)}>
            Prislista Trädfällning
          </Link>
          <Link to="/prislista-bygg" onClick={() => setIsOpen(false)}>
            Prislista Bygg & Snickeri
          </Link>
          <Link to="/offerter" onClick={() => setIsOpen(false)}>
            Offerter
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
