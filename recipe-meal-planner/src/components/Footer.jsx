function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3 className="footer-logo">Recipe Planner</h3>
          <p className="footer-text">
            A simple and modern recipe finder and meal planner built with React.
          </p>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Planner</a>
          <a href="#">Favorites</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;