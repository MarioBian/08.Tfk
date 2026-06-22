import React from "react";
import priceData from "../priceList/priceListConstruction.json";

function formatPrice(service) {
  if (service.textNote) return service.textNote;
  if (service.priceMin === 0 && service.priceMax === 0) return "Gratis";
  if (service.priceMin === 0)
    return `Ingår / ${service.priceMax.toLocaleString("sv-SE")} kr`;
  return `${service.priceMin.toLocaleString(
    "sv-SE"
  )} – ${service.priceMax.toLocaleString("sv-SE")} kr`;
}

function ServiceRow({ service }) {
  const isSpecial = service.priceMin === 0;
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
      <span className="text-gray-700 text-sm">{service.name}</span>
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

function CategoryCard({ category, services }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 text-base">{category}</h3>
      </div>
      <div className="px-5">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

const PriceListConstruction = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Prislista Bygg & Snickeri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {priceData.map((group) => (
            <CategoryCard
              key={group.category}
              category={group.category}
              services={group.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceListConstruction;
