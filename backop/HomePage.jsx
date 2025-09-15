import React from "react";

// midlertidige nyheder (byt til API-kald senere)
const newsItems = [
  {
    id: 1,
    title: "Moderne Surdejsbrød: En Kulinarisk Favorit",
    date: "18. august 2024",
    teaser:
      "Surdejsbrød har gennem de seneste år oplevet en bemærkelsesværdig renæssance...",
    image: "/news/brod1.jpg",
  },
  {
    id: 2,
    title: "Knasende skorpe, blød krumme",
    date: "17. august 2024",
    teaser: "Det perfekte surdejsbrød kræver tid, kærlighed og lidt vildgær.",
    image: "/news/brod1.jpg",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* baggrundsbillede */}
      <div className="absolute inset-0 z-0">
        <img
          src="/slides/bread-slidebg-01.jpg"
          alt="Bagning"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* overlay-indhold */}
      <div className="relative z-10 p-6 text-white">
        <h2 className="text-4xl font-bold mb-6">Nyheder</h2>

        <div className="bg-black/50 p-4 rounded-lg max-w-xl">
          {newsItems.map((news) => (
            <div key={news.id} className="mb-4 flex gap-4">
              <img
                src={news.image}
                alt={news.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-300">{news.date}</p>
                <h3 className="font-semibold">{news.title}</h3>
                <p className="text-sm text-gray-200">{news.teaser}</p>
              </div>
            </div>
          ))}
        </div>

        {/* dots (ikke interaktive endnu) */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          <span className="w-3 h-3 bg-white rounded-full opacity-70"></span>
          <span className="w-3 h-3 bg-white/50 rounded-full"></span>
          <span className="w-3 h-3 bg-white/50 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}