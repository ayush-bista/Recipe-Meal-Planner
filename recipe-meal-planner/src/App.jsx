import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import MealPlanner from './components/MealPlanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RecipeList />
      <MealPlanner />
      <Footer />
    </div>
  );
}

export default App;