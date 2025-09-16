
import React, { useEffect, useState } from "react";

// custom hook til data hentning
export const useSliderData = () => {
  // tilstandhåndtering: data til at gemme det jeg vil have fat i og loading til at styrer inlæsnings tilstanden
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // jeg bruger en hook useeffect til at sører for at den kun henter 1 gang efter første randering
  useEffect(() => {
    fetch("http://localhost:3000/api/slides")
      .then((res) => {
        console.log("status", res.status);
        console.log("content-type", res.headers.get("content-type"));
        
        if (!res.ok) {
          throw new Error(`server-fejl: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        // en error handling til at logge fejlen og stoppe loading
        console.error("Fejl ved hentning af data: ", err);
        setLoading(false);
      });
  }, []);
  // retunerer bode data of loding-status til den komponent der kalder på den
  return { data, loading };
};
