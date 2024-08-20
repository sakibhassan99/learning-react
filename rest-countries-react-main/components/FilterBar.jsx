export default function FilterBar({ filter, setQuery }) {
  const [isFilter, setIsFilter] = filter;

  return (
    <div className="filter-by-region-container">
      <div
        className="label filer"
        onClick={() => {
          setIsFilter(!isFilter);
        }}
      >
        <p>Filter by Region</p>
        <i
          className={`fa-solid fa-angle-${
            isFilter ? "up" : "down"
          } filter-angle-icon`}
        ></i>
      </div>
      <div className={`options ${isFilter ? "show-filter" : ""}`}>
        <ul
          onClick={(e) => {
            if (e.target.tagName === "LI") {
              setQuery(e.target.innerText.toLowerCase());
              setIsFilter(false);
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
