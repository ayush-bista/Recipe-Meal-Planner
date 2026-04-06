function ShoppingList({ mealPlan }) {
  const plannedRecipes = Object.values(mealPlan);

  const allIngredients = plannedRecipes.flatMap((recipe) =>
    recipe?.ingredients || []
  );

  const uniqueIngredients = [...new Set(allIngredients)];

  return (
    <section className="shopping-section">
      <div className="container">
        <div className="shopping-header">
          <p className="section-tag">Shopping list</p>
          <h2>Your weekly ingredients</h2>
          <p className="section-description">
            Ingredients collected automatically from your planned meals.
          </p>
        </div>

        {uniqueIngredients.length > 0 ? (
          <div className="shopping-list">
            {uniqueIngredients.map((ingredient, index) => (
              <label key={index} className="shopping-item">
                <input type="checkbox" />
                <span>{ingredient}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="no-results">
            No shopping items yet. Add recipes to your planner first.
          </p>
        )}
      </div>
    </section>
  );
}

export default ShoppingList;