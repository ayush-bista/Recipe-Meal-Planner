import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeList from './components/RecipeList';
import MealPlanner from './components/MealPlanner';
import Footer from './components/Footer'; 

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [mealPlan, setMealPlan] = useState({});

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