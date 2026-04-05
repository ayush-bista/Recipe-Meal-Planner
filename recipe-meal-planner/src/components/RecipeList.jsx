import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import RecipeModal from './RecipeModal';
import FavoritesSection from './FavoritesSection';
import recipes from '../data/recipes';

function RecipeList({ setSelectedRecipe, selectedRecipe }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalRecipe, setModalRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (recipe) => {
    const alreadyFavorite = favorites.some((item) => item.id === recipe.id);

    if (alreadyFavorite) {
      setFavorites(favorites.filter((item) => item.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  const isFavorite = (recipeId) => {
    return favorites.some((item) => item.id === recipeId);
  };

  // Filtering logic
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="recipe-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Popular picks</p>
            <h2>Discover delicious recipes for every moment</h2>
          </div>

          {/* Search */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          {/* Filters */}
          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Selected Recipe Indicator */}
          {selectedRecipe && (
            <p className="selected-recipe-indicator">
              Selected: {selectedRecipe.title}
            </p>
          )}

          {/* Recipe Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="recipe-grid">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => {
                    setSelectedRecipe(recipe);   // for planner
                    setModalRecipe(recipe);      // for modal
                  }}
                >
                  <RecipeCard
                    recipe={recipe}
                    isFavorite={isFavorite(recipe.id)}
                    toggleFavorite={toggleFavorite}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">
              No recipes found for "{searchTerm}" in {selectedCategory}.
            </p>
          )}

          {/* Modal */}
          <RecipeModal
            recipe={modalRecipe}
            onClose={() => setModalRecipe(null)}
          />
        </div>
      </section>

      {/* Favorites */}
      <FavoritesSection
        favorites={favorites}
        onSelectRecipe={setSelectedRecipe}
      />
    </>
  );
}

export default RecipeList;