import { useState } from "react";

export default function FilterBar({ setQuery }) {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div
      className="filter-by-region-container"
      onClick={(e) => {
        setIsFilter(!isFilter);
      }}
    >
      <div className="label filer">
        <p>Filter by Region</p>
        <i
          className={`fa-solid fa-angle-${
            isFilter ? "up" : "down"
          } filter-angle-icon`}
        />
      </div>
      <div className={`options ${isFilter ? "show-filter" : ""}`}>
        <ul
          onClick={(e) => {
            if (e.target.tagName === "LI") {
              setQuery(e.target.innerText.toLowerCase());
            }
          }}
        >
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
