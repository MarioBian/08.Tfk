import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-[#f5f2ee] flex flex-col">
        {/* Top banner */}
        <div className="bg-[#2d4a2d] text-[#c8d9b8] text-xs text-center py-2 tracking-widest uppercase">
          Gratis offert — Vi återkommer inom 24 timmar
        </div>

        <div className="flex flex-col lg:flex-row flex-1">
          {/* Left panel */}
          <div className="lg:w-2/5 bg-[url('/forest.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-[#1a2e1a]/75" />
            <div className="relative z-10 flex flex-col justify-between h-full px-10 py-16 text-white min-h-[400px]">
              <div>
                <p className="text-[#8fba6f] uppercase tracking-widest text-xs font-medium mb-6">
                  Trädfällarkompisarna
                </p>
                <h1 className="text-4xl font-bold leading-snug mb-4">
                  Låt oss ta hand om jobbet
                </h1>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  Berätta vad du behöver hjälp med så skräddarsyr vi en lösning
                  för dig.
                </p>
              </div>

              <div className="space-y-5 mt-12">
                {[
                  { icon: "📞", label: "Telefon", value: "070-123 45 67" },
                  { icon: "✉️", label: "E-post", value: "info@tfk.se" },
                  {
                    icon: "📍",
                    label: "Område",
                    value: "Stockholm & Mälardalen",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="text-[#8fba6f] text-xs uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="lg:w-3/5 flex items-center justify-center px-8 py-16 bg-[#f5f2ee]">
            <div className="w-full max-w-lg">
              <h2 className="text-2xl font-bold text-[#1f2e1f] mb-1">
                Skicka en förfrågan
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Alla fält är valfria utom e-post.
              </p>

              <form action="#" method="POST" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
                    >
                      Förnamn
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Erik"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d4a2d] transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
                    >
                      Efternamn
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder="Svensson"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d4a2d] transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    E-post *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="erik@example.se"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d4a2d] transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="070-000 00 00"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d4a2d] transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
                  >
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Beskriv jobbet – typ av träd, storlek, plats, önskad tidpunkt..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#2d4a2d] transition resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setAgreed(!agreed)}
                    className={`mt-0.5 w-5 h-5 rounded shrink-0 border-2 flex items-center justify-center transition ${
                      agreed
                        ? "bg-[#2d4a2d] border-[#2d4a2d]"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {agreed && (
                      <span className="text-white text-xs font-bold">✓</span>
                    )}
                  </button>
                  <label className="text-sm text-gray-500 leading-relaxed">
                    Jag godkänner att mina uppgifter används för att kontakta
                    mig.{" "}
                    <a href="#" className="text-[#2d4a2d] underline">
                      Integritetspolicy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2d4a2d] hover:bg-[#3a5e3a] text-white font-semibold py-3.5 rounded-lg transition text-sm tracking-wide"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
