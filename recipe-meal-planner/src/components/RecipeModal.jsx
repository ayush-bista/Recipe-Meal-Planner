function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img src={recipe.image} alt={recipe.title} />

        <h2>{recipe.title}</h2>

        <p className="modal-meta">
          {recipe.category} • {recipe.time} • {recipe.difficulty}
        </p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeModal;