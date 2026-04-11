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
  const [apiRecipes, setApiRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        const data = await response.json();

        if (data.meals) {
          const formattedRecipes = data.meals.slice(0, 12).map((meal) => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory || 'Dinner',
            time: '30 min',
            difficulty: 'Medium',
            image: meal.strMealThumb,
            ingredients: [
              meal.strIngredient1,
              meal.strIngredient2,
              meal.strIngredient3,
              meal.strIngredient4,
              meal.strIngredient5,
            ].filter(Boolean),
            instructions: meal.strInstructions || 'No instructions available.',
          }));

          setApiRecipes(formattedRecipes);
        }
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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

  const recipeSource = apiRecipes.length > 0 ? apiRecipes : recipes;

  const filteredRecipes = recipeSource.filter((recipe) => {
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

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <FilterBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {selectedRecipe && (
            <p className="selected-recipe-indicator">
              Selected: {selectedRecipe.title}
            </p>
          )}

          {loading ? (
            <p className="no-results">Loading recipes...</p>
          ) : filteredRecipes.length > 0 ? (
            <div className="recipe-grid">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => {
                    setSelectedRecipe(recipe);
                    setModalRecipe(recipe);
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

          <RecipeModal
            recipe={modalRecipe}
            onClose={() => setModalRecipe(null)}
          />
        </div>
      </section>

      <FavoritesSection
        favorites={favorites}
        onSelectRecipe={setSelectedRecipe}
      />
    </>
  );
}

export default RecipeList;