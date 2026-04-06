import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import MealPlanner from './components/MealPlanner';
import Footer from './components/Footer';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealPlan, setMealPlan] = useState({});

  useEffect(() => {
    const savedMealPlan = localStorage.getItem('mealPlan');

    if (savedMealPlan) {
      setMealPlan(JSON.parse(savedMealPlan));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <RecipeList
        setSelectedRecipe={setSelectedRecipe}
        selectedRecipe={selectedRecipe}
      />

      <MealPlanner
        selectedRecipe={selectedRecipe}
        mealPlan={mealPlan}
        setMealPlan={setMealPlan}
      />

      <Footer />
    </div>
  );
}

export default App;