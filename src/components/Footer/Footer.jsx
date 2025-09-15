

import React from "react";

// Footer component
export const Footer = () => {
  return (
    <footer className="bg-green-100 text-black py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Nyhedsbrev */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Nyhedsbrev</h4>
          <p className="mb-4 text-sm">Tilmeld dig vores nyhedsbrev og få inspiration</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Din e-mail"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Tilmeld
            </button>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Kontakt</h4>
          <p className="text-sm">info@dengronneavis.dk</p>
        </div>

        {/* FN’s Verdensmål */}
        <div>
          <h4 className="font-semibold text-lg mb-2">FN’s Verdensmål</h4>
          <a
            href="#"
            className="text-green-700 underline text-sm hover:text-green-900"
          >
            Læs mere om verdensmålene
          </a>
        </div>

      </div>
    </footer>
  );
};
