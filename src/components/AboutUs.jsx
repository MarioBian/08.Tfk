import React from "react";
import { Link } from "react-router-dom";

const team = [
  { name: "Erik Svensson", role: "Grundare & Trädfällare", emoji: "🪓" },
  { name: "Marcus Lindgren", role: "Klättrare & Riggare", emoji: "🧗" },
  { name: "Johan Karlsson", role: "Bygg & Snickeri", emoji: "🔨" },
];

const values = [
  {
    icon: "🛡️",
    title: "Säkerhet först",
    desc: "Vi följer alla säkerhetsföreskrifter och är fullt försäkrade.",
  },
  {
    icon: "🌿",
    title: "Miljömedvetna",
    desc: "Vi återvinner material och minimerar påverkan på naturen.",
  },
  {
    icon: "⭐",
    title: "Kvalitet",
    desc: "Vi lämnar aldrig ett jobb halvfärdigt — kunden ska alltid vara nöjd.",
  },
  {
    icon: "🤝",
    title: "Ärlighet",
    desc: "Inga dolda kostnader. Gratis offert och transparenta priser.",
  },
];

function AboutUs() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[url('/forest.jpg')] bg-cover bg-center min-h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 pt-24 text-white">
          <p className="text-green-400 uppercase tracking-widest text-xs font-semibold mb-3">
            Trädfällarkompisarna
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Om oss
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Ett lokalt företag med passion för träd, hantverk och nöjda kunder.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#f5f2ee] py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-green-700 uppercase tracking-widest text-xs font-semibold mb-3">
              Vår historia
            </p>
            <h2 className="text-3xl font-bold text-[#1f2e1f] mb-6">
              Vi började som kompisar med en motorsåg
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Trädfällarkompisarna grundades av 5 vänner som delade en passion
              för skogsarbete och hantverk. Det som började som Hobby arbete
              bland vänner har vuxit till ett fullskaligt företag med ett
              dedikerat team.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Idag utför vi trädfällning, stubbfräsning, röjning och
              byggtjänster i hela Stockholm och Mälardalen — alltid med samma
              noggrannhet och yrkesstolthet som från dag ett.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex bg-[#2d4a2d] hover:bg-[#3a5e3a] text-white text-sm font-semibold px-6 py-3 rounded-xl transition"
            >
              Kontakta oss →
            </Link>
          </div>
          <div className="bg-[#1a2e1a] rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "2+", label: "År i branschen" },
                // { num: "500+", label: "Nöjda kunder" },
                { num: "5", label: "Certifierade yrkesmän" },
                { num: "100%", label: "Gratis offert" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-green-400">
                    {stat.num}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VÄRDERINGAR */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 uppercase tracking-widest text-xs font-semibold text-center mb-3">
            Vad vi står för
          </p>
          <h2 className="text-3xl font-bold text-center text-[#1f2e1f] mb-14">
            Våra värderingar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f5f2ee] rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      {/* <section className="bg-[#f5f2ee] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-700 uppercase tracking-widest text-xs font-semibold text-center mb-3">
            Teamet
          </p>
          <h2 className="text-3xl font-bold text-center text-[#1f2e1f] mb-14">
            Personerna bakom jobbet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#1a2e1a] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{member.role}</p>
              </div>
            ))} */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}
    </>
  );
}

export default AboutUs;
