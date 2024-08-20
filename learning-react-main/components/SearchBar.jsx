export default function SearchBar({ query }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        onChange={(e) => {
          query(e.target.value.toLowerCase());
        }}
        type="text"
        id="search_input"
        placeholder="Search for a country..."
      />
    </div>
  );
}
