function Hero() {
  return (
    <main className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-tag">Your smart kitchen companion</p>
          <h2>Find delicious recipes and plan your meals with ease.</h2>
          <p className="hero-description">
            Explore tasty meal ideas, organize your weekly plan, and make cooking
            feel simple, fun, and stress-free.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Recipes</button>
            <button className="secondary-btn">Start Planning</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Today’s Inspiration</h3>
          <p className="dish-name">Creamy Garlic Pasta</p>
          <p className="dish-info">Quick • Comforting • Family Favorite</p>
        </div>
      </div>
    </main>
  );
}

export default Hero;