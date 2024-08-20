import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDarkMode] = useTheme();
  const [isFilter, setIsFilter] = useState(false);

  return (
    <section
      id="countries_section"
      className={`${isDarkMode ? "dark-mode" : ""}`}
    >
      <div className="query_section">
        <SearchBar setQuery={setQuery} />
        <FilterBar filter={[isFilter, setIsFilter]} setQuery={setQuery} />
      </div>
      <div className="countries-container">{<CountryList query={query} />}</div>
    </section>
  );
}
