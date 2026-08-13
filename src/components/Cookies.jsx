import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="text-2xl">🍪</div>

        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            Vi använder cookies
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Vi använder cookies för att förbättra din upplevelse på vår
            webbplats. Nödvändiga cookies krävs för att sidan ska fungera.
            Analytiska cookies hjälper oss förstå hur besökare använder sidan.
            Du kan välja att endast tillåta nödvändiga cookies.{" "}
            <a href="#" className="text-[#2d4a2d] underline hover:no-underline">
              Läs mer om vår integritetspolicy
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition font-medium"
          >
            Endast nödvändiga
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl bg-[#2d4a2d] text-white text-sm font-semibold hover:bg-[#3a5e3a] transition"
          >
            Acceptera alla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
