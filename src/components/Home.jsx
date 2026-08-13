import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "🪓",
    title: "Trädfällning",
    desc: "Säker fällning av träd i alla miljöer och storlekar.",
  },
  {
    icon: "🌀",
    title: "Stubbfräsning",
    desc: "Vi tar bort stubbar snabbt, effektivt och spårfritt.",
  },
  {
    icon: "🔨",
    title: "Bygg & snickeri",
    desc: "Altaner, staket, förråd och mindre byggprojekt.",
  },
  {
    icon: "🌿",
    title: "Röjning",
    desc: "Tomtröjning, slyröjning och markarbete.",
  },
];

const reasons = [
  { icon: "🛡️", text: "Certifierade och försäkrade" },
  { icon: "⭐", text: "Noggrant arbete — kunden alltid nöjd" },
  {
    icon: "💸",
    text: "15% rabatt på befintlig offert (trädfällning)",
  },
  { icon: "⚡", text: "Snabb service & bra priser" },
  { icon: "📋", text: "Gratis offert utan förpliktelser" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[url('/forest.jpg')] bg-cover bg-center min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block bg-green-600/30 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Stockholm & Mälardalen
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Trädfällning &
            <br />
            <span className="text-green-400">Byggtjänster</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Säker trädfällning och byggarbeten för privatpersoner och företag.
            Vi får jobbet gjort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition text-sm"
            >
              Begär gratis offert →
            </Link>

            <a
              href="tel:0701234567"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition text-sm"
            >
              📞 070-123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section className="py-24 bg-[#f5f2ee]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-green-700 uppercase tracking-widest text-xs font-semibold text-center mb-3">
            Vad vi erbjuder
          </p>

          <h2 className="text-3xl font-bold text-center text-[#1f2e1f] mb-14">
            Våra tjänster
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARFÖR OSS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-green-700 uppercase tracking-widest text-xs font-semibold text-center mb-3">
            Våra fördelar
          </p>

          <h2 className="text-3xl font-bold text-center text-[#1f2e1f] mb-14">
            Varför välja oss?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.text}
                className="flex items-start gap-4 bg-[#f5f2ee] rounded-2xl px-6 py-5"
              >
                <span className="text-2xl shrink-0">{r.icon}</span>

                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1a2e1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/forest.jpg')] bg-cover bg-center opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a] via-[#1a2e1a]/80 to-[#1a2e1a]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block bg-green-600/30 text-green-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Gratis offert — inga dolda kostnader
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Behöver du hjälp med
            <br />
            <span className="text-green-400">trädfällning eller bygg?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Vi återkommer inom 24 timmar med ett skräddarsytt prisförslag — helt
            utan förpliktelser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-xl transition text-sm"
            >
              Begär gratis offert →
            </Link>

            <a
              href="tel:0701234567"
              className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition text-sm"
            >
              📞 070-123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
