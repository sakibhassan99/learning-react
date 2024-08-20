import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountryList from "./CountryList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [isDark] = useTheme();
  const [query, setQuery] = useState("");
  return (
    <section id="countries_section" className={`${isDark ? "dark-mode" : ""}`}>
      <div className="query_section">
        <SearchBar query={setQuery} />
        <FilterBar setQuery={setQuery} />
      </div>
      <CountryList query={query} />
    </section>
  );
}
