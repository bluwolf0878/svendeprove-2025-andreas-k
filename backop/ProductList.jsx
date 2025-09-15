import React, { useMemo, useState } from "react";

// ✨ Dummy-produkter (læg evt. billeder i Frontend/public/products/…)
const ALL_PRODUCTS = [
  { id: 1, title: "Surdejsbrød Klassisk", teaser: "Knasende skorpe, blød krumme.", image: "/products/bread1.jpg", likes: 42, category: "brød", slug: "surdejsbrod-klassisk" },
  { id: 2, title: "Rugbrød Deluxe",        teaser: "Dybt smagfuldt med kerner.",  image: "/products/bread2.jpg", likes: 31, category: "brød", slug: "rugbrod-deluxe" },
  { id: 3, title: "Kanel-snegl",            teaser: "Blød dej, masser af remonce.", image: "/products/pastry1.jpg", likes: 67, category: "kager", slug: "kanel-snegl" },
  { id: 4, title: "Croissant",              teaser: "Sprød og smørfyldt.",         image: "/products/pastry2.jpg", likes: 25, category: "kager", slug: "croissant" },
];

const CATEGORIES = ["brød", "kager"];

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [sortBy, setSortBy] = useState("alpha"); // "alpha" | "popular"
  const [likes, setLikes] = useState(() =>
    Object.fromEntries(ALL_PRODUCTS.map(p => [p.id, p.likes]))
  );

  // Filtrér + sorter produkter
  const products = useMemo(() => {
    const filtered = ALL_PRODUCTS.filter(p => p.category === activeCategory);
    if (sortBy === "alpha") {
      return filtered.slice().sort((a, b) => a.title.localeCompare(b.title, "da"));
    }
    // popular
    return filtered.slice().sort((a, b) => (likes[b.id] ?? b.likes) - (likes[a.id] ?? a.likes));
  }, [activeCategory, sortBy, likes]);

  // Toggle like lokalt (kan kobles til API senere)
  const toggleLike = (id) => {
    setLikes(prev => {
      const next = { ...prev };
      next[id] = (next[id] ?? 0) + (prev.__liked?.[id] ? -1 : 1);
      // husk liked-state pr. id
      const liked = { ...(prev.__liked || {}) };
      liked[id] = !liked[id];
      next.__liked = liked;
      return next;
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Kategori-tabs */}
      <div className="flex gap-2 mb-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition
              ${activeCategory === cat ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sortering */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-600">Sorter:</span>
        <button
          onClick={() => setSortBy("alpha")}
          className={`px-3 py-1 rounded border text-sm ${sortBy === "alpha" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-100"}`}
        >
          Alfabetisk
        </button>
        <button
          onClick={() => setSortBy("popular")}
          className={`px-3 py-1 rounded border text-sm ${sortBy === "popular" ? "bg-gray-900 text-white" : "bg-white text-gray-900 hover:bg-gray-100"}`}
        >
          Popularitet
        </button>
      </div>

      {/* Liste (2 kolonner på md+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(p => (
          <article key={p.id} className="bg-white rounded-xl shadow p-4 flex gap-4">
            <img src={p.image} alt={p.title} className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.teaser}</p>
              <div className="mt-auto flex items-center justify-between">
                <button
                  className="text-sm px-3 py-1 rounded bg-gray-900 text-white hover:bg-gray-800"
                  // TODO: link til /product/:slug når du laver routing
                  onClick={() => alert(`Læs mere om: ${p.slug}`)}
                >
                  Læs mere
                </button>
                <button
                  onClick={() => toggleLike(p.id)}
                  className="text-sm flex items-center gap-2 px-3 py-1 rounded border hover:bg-gray-50"
                  aria-label="Like produkt"
                >
                  <span>❤️</span>
                  <span>{likes[p.id] ?? p.likes}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
