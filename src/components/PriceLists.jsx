import React, { useEffect, useState } from "react";
import priceData from "../priceList/priceListCompany.json";

function formatPrice(service) {
  if (service.textNote) return service.textNote;
  if (service.priceMin === 0 && service.priceMax === 0) return "Gratis";
  if (service.priceMin === 0)
    return `Ingår / ${service.priceMax.toLocaleString("sv-SE")} Kr`;
  return `${service.priceMin.toLocaleString(
    "sv-SE"
  )} – ${service.priceMax.toLocaleString("sv-SE")} kr`;
}
function serviceRow({ service }) {
  const isSpecial = service.priceMin === 0;
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
      <span className="text-gray-700 text-sm">(service.name)</span>
      <span
        className={`text-sm font-medium whitespace-nowrap ${
          isSpecial ? "text-green-600" : "text-gray-900"
        }`}
      >
        {formatPrice(service)}
      </span>
    </div>
  );
}

const PriceLists = () => {
  return <div>PriceLists</div>;
};

export default PriceLists;
