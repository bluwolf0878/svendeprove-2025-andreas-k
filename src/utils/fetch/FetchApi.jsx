// import { useState, useEffect } from "react";

export const url = "http://localhost:3000/api/slides"

// export function FetchApi({ url, children }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Fejl ved fetch:", error);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return children(data); //
//     // Returner children som en funktion, der modtager data som argumen
// }