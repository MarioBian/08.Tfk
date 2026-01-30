import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between bg-stone-600 px-4 py-2 cursor-pointer">
      <div className="flex items-center gap-4">
        <a className="hover:underline">Hem</a>
        <a className="hover:underline">Om oss</a>
        <a className="hover:underline">Bilder</a>
        <a className="hover:underline">Kontakt</a>
        <a className="hover:underline">Prislista</a>
        <a className="hover:underline">Offerter</a>
      </div>

      <div className="mr-5">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-sm"
        />
      </div>
    </div>
  );
};

export default Nav;
