function FavoritesSection({ favorites, onSelectRecipe }) {
  if (favorites.length === 0) {
    return (
      <section className="favorites-section">
        <div className="container">
          <div className="favorites-header">
            <p className="section-tag">Your favorites</p>
            <h2>Saved recipes will appear here</h2>
            <p className="section-description">
              Start adding recipes to your favorites by clicking the heart icon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="favorites-section">
      <div className="container">
        <div className="favorites-header">
          <p className="section-tag">Your favorites</p>
          <h2>Your saved recipes</h2>
          <p className="section-description">
            Quickly access the meals you liked the most.
          </p>
        </div>

        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              className="favorite-mini-card"
              onClick={() => onSelectRecipe(recipe)}
            >
              <img src={recipe.image} alt={recipe.title} />
              <div className="favorite-mini-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavoritesSection;