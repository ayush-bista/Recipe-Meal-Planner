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

          {uniqueIngredients.length > 0 && (
            <p className="shopping-count">
              Total items: {uniqueIngredients.length}
            </p>
          )}
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
          <div className="empty-state">
            <h3>No shopping items yet</h3>
            <p>Add recipes to your meal planner to generate a shopping list.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShoppingList;