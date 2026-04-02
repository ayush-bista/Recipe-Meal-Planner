import { useState } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import RecipeModal from './RecipeModal';
import recipes from '../data/recipes';

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="recipe-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Popular picks</p>
          <h2>Discover delicious recipes for every moment</h2>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      </div>
    </section>
  );
}

export default RecipeList;