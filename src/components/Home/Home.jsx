import React from "react";
import { GetProducts } from "../Getproducts/GetProducts.jsx";
import { Link } from "react-router-dom";
import { FetchApi } from "../../utils/fetch/FetchApi.jsx";

export const Home = () => {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Udvalgte produkter */}
      <GetProducts />

      {/* Mission banner */}
      <section
        className="relative bg-cover bg-center h-48 rounded-lg shadow-lg flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url(/assets/forest.jpg)" }}
      >
        <div className="bg-black/50 p-6 rounded">
          <h1 className="text-2xl font-bold">Den Grønne Avis</h1>
          <p>
            Vi går forrest i kampen om klimaet ved at give 2 kr. til klima-venlige
            formål, hver gang du handler brugt.
          </p>
        </div>
      </section>

      {/* Kategorier */}
      <FetchApi url="http://localhost:3306/api/categories">
        {(categories) => (
          <section>
            <h2 className="text-xl font-bold mb-4">Populære Kategorier</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((c) => (
                <Link
                  to={`/category/${c.id}`}
                  key={c.id}
                  className="group relative block overflow-hidden rounded shadow hover:shadow-lg"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="absolute bottom-0 bg-green-700 text-white text-sm w-full text-center">
                    {c.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </FetchApi>

      {/* Donationer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="relative bg-cover bg-center h-32 rounded-lg flex items-center justify-center text-white"
          style={{ backgroundImage: "url(/assets/donation1.jpg)" }}
        >
          <div className="bg-black/50 p-4 rounded text-center">
            <h3 className="font-semibold">Donationer til Dato</h3>
            <p className="text-xl font-bold">452.231,50 kr</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center h-32 rounded-lg flex items-center justify-center text-white"
          style={{ backgroundImage: "url(/assets/donation2.jpg)" }}
        >
          <div className="bg-black/50 p-4 rounded text-center">
            <h3 className="font-semibold">Donationer i år</h3>
            <p className="text-xl font-bold">112.452,75 kr</p>
          </div>
        </div>
      </section>

      {/* Opret annonce */}
      <div className="text-center">
        <Link
          to="/opret-annonce"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Opret annonce
        </Link>
      </div>
    </main>
  );
};
