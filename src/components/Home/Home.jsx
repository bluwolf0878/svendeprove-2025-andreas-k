import { useState, useEffect } from "react";
import { useSliderData } from "../Getslides/Getslides.jsx";

export const Home = () => {
  const { data, loading } = useSliderData();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
      prev === data.length - 1 ? 0 : prev + 1);

    }, 5000);
    return () => clearInterval(interval);
    
    
  }, [data]);

  if (loading) return <p>Indlæser billeder...</p>;
  if (data.length === 0) return <p>Ingen billeder fundet</p>;
  
return (
  <div className="relative w-full h-screen overflow-hidden">
    {data.map((item, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <img src={`http://localhost:3000${item.imageUrl}`} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center px-4">
              {item.text}
            </p>
          </div>
      </div>
    ))}
  </div>
);
}
