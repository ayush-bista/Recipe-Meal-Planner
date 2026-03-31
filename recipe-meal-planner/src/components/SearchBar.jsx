function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        placeholder="Search recipes by name..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;