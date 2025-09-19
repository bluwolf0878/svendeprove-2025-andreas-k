import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper.jsx";
import { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar.jsx";
import { FilterBoks } from "../components/FilterBoks/FilterBoks.jsx";
import { LiftCard } from "../components/liftcard/liftcard.jsx";
import { LiftFilter } from "../components/LiftFilter/LiftFilter.jsx";

export default function LiftPage() {
  const [lifts, setLifts] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState({ from: "", to: "" });

  useEffect(() => {
    fetch("http://localhost:3000/api/trips")
      .then((res) => res.json())
      .then((data) => setLifts(data))
      .catch((error) => console.error("Error fetching lifts:", error));
  }, []);

  return (
    <ContentWrapper>
      <SearchBar onSearch={setSearch}/>

      <div className="flex mt-4">
        <div className="w-1/4 p-4">
          <FilterBoks onChange={setFilters} />
        </div>

        <div className="w-3/4 p-4"> 
          <LiftFilter trips={lifts} filters={{ ...filters, ...search }} />
        </div>
      </div>
    </ContentWrapper>
  );
}
