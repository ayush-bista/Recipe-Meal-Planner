import { useState } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';
import recipes from '../data/recipes';

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="recipe-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Popular picks</p>
          <h2>Discover delicious recipes for every moment</h2>
          <p className="section-description">
            Start exploring a selection of easy and tasty meals for breakfast,
            lunch, dinner, and sweet cravings.
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {filteredRecipes.length > 0 ? (
          <div className="recipe-grid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="no-results">No recipes found for "{searchTerm}".</p>
        )}
      </div>
    </section>
  );
}

export default RecipeList;