import React from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    alt: "Trädfällning i skogen",
    label: "Trädfällning",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    alt: "Skogsarbete",
    label: "Skogsarbete",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    alt: "Skog och natur",
    label: "Röjning",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
    alt: "Vedkapning",
    label: "Vedkapning",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1567093322787-90a61a8b14bb?w=800&q=80",
    alt: "Byggarbete",
    label: "Bygg & Snickeri",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Konstruktion",
    label: "Konstruktion",
  },
];

const Pictures = () => {
  return (
    <section className="bg-[#f5f2ee] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-green-700 uppercase tracking-widest text-xs font-semibold text-center mb-3">
          Vårt arbete
        </p>
        <h2 className="text-3xl font-bold text-center text-[#1f2e1f] mb-4">
          Bilder från jobben
        </h2>
        <p className="text-gray-500 text-sm text-center mb-14 max-w-md mx-auto">
          Ett urval av projekt vi genomfört — trädfällning, röjning och
          byggtjänster.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Unsplash credit */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Bilder från{" "}
          <a
            href="https://unsplash.com"
            className="underline hover:text-gray-600"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>{" "}
          — ersätt gärna med egna projektfoton.
        </p>
      </div>
    </section>
  );
};

export default Pictures;
