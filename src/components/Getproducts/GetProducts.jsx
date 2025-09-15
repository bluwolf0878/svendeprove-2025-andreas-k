
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchApi } from "../../utils/fetch/FetchApi";

export const GetProducts = () => {
  const [products, setProducts] = useState([]);

  return (
    <FetchApi url="http://localhost:3306/api/products">
      {(data) => {
        // Shuffle og ta 6 tilfældige produkter
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 6);

        return (
          <section>
            <h2 className="text-xl font-bold mb-4">Udvalgte Produkter</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {selected.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="group relative block overflow-hidden rounded shadow hover:shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="absolute bottom-0 bg-black/60 text-white text-sm w-full text-center">
                    {product.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      }}
    </FetchApi>
  );
};
