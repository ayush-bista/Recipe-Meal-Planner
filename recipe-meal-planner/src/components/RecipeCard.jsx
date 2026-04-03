function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
  return (
    <div className="recipe-card">
      <div className="recipe-image-wrapper">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe);
          }}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

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