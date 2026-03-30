import RecipeCard from './RecipeCard';
import recipes from '../data/recipes';

function RecipeList() {
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

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeList;