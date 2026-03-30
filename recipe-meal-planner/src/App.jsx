import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;