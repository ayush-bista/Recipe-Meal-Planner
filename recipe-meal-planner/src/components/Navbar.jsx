function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">Recipe Planner</h1>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Planner</a>
          <a href="#">Favorites</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;