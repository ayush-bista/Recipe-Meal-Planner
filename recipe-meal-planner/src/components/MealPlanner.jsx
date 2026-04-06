import MealSlot from './MealSlot';
import ShoppingList from './ShoppingList';

function MealPlanner({ selectedRecipe, mealPlan, setMealPlan }) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const meals = ['Breakfast', 'Lunch', 'Dinner'];

  const handleAssign = (day, mealType) => {
    if (!selectedRecipe) {
      alert('Select a recipe first!');
      return;
    }

    const key = `${day}-${mealType}`;

    setMealPlan({
      ...mealPlan,
      [key]: selectedRecipe,
    });
  };

  return (
    <>
      <section className="planner-section">
        <div className="container">
          <div className="planner-header">
            <p className="section-tag">Meal planner</p>
            <h2>Plan your weekly meals</h2>
            <p className="section-description">
              Organize your meals for the week and make cooking effortless.
            </p>
          </div>

          <div className="planner-grid">
            {days.map((day) => (
              <div key={day} className="planner-day">
                <h3 className="day-title">{day}</h3>

                {meals.map((meal) => {
                  const key = `${day}-${meal}`;

                  return (
                    <MealSlot
                      key={meal}
                      day={day}
                      mealType={meal}
                      onAssign={handleAssign}
                      assignedRecipe={mealPlan[key]}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShoppingList mealPlan={mealPlan} />
    </>
  );
}

export default MealPlanner;