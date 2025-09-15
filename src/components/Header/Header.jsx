import { Navbar } from "../Nav/nav.jsx";

export const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between gap-6">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-black whitespace-nowrap">
        Den Grønne <span className="bg-green-600 text-white px-1 rounded">Avis</span>
      </div>

      {/* Søgning */}
      <div className="flex items-center gap-2">
        <select className="border border-gray-300 rounded px-2 py-1">
          <option>Vælg kategori</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
          Søg
        </button>
      </div>

      {/* Ikoner */}
      <div className="flex items-center gap-4">
        <img src="/assets/user-icon.png" alt="Bruger" className="w-6 h-6" />
        <img src="/assets/cart-icon.png" alt="Kurv" className="w-6 h-6" />
      </div>

      {/* Navigation */}
      <div className="flex-1">
        <Navbar />
      </div>
    </header>
  );
};
