function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />

      <div className="recipe-content">
        <span className="recipe-category">{recipe.category}</span>
        <h3>{recipe.title}</h3>

        <div className="recipe-meta">
          <p>{recipe.time}</p>
          <p>{recipe.difficulty}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;