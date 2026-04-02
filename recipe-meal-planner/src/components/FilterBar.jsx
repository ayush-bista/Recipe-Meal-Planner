function FilterBar({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${
            selectedCategory === category ? 'active-filter' : ''
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;