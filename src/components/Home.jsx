import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-[url('/forest.jpg')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-6xl mx-auto px-6 py-28 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trädfällning & byggtjänster
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Säker trädfällning och byggarbeten för privatpersoner och företag.
            </p>
            <button className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full font-semibold">
              Begär offert
            </button>
          </div>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Våra tjänster
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Trädfällning</h3>
              <p>Säker fällning av träd i alla miljöer.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Stubbfräsning</h3>
              <p>Vi tar bort stubbar snabbt och effektivt.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Bygg & snickeri</h3>
              <p>Altaner, staket, förråd och mindre byggprojekt.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Röjning</h3>
              <p>Tomtröjning, slyröjning och markarbete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VARFÖR OSS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Varför välja oss?</h2>
          <ul className="space-y-4 text-lg">
            <li>✔ Certifierade och försäkrade</li>
            <li>✔ Vi utför arbetet nogrant och ser till så kunden är nöjd.</li>
            <li>
              ✔ Snabb service & bra priser 10 procent rabatt på din befintliga
              offert
            </li>
            <li>✔ Gratis offert</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <marquee className="text-3xl font-bold mb-6">
            Behöver du hjälp med trädfällning? Känner du för och bygga om eller
            göra små renoveringar?
          </marquee>
          <p className="text-lg mb-8">
            Välkommen att kontakta oss idag så återkommer vi inom 24 timmar!
          </p>
          <button className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Kontakta oss
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
