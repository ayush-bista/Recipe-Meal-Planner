import MealSlot from './MealSlot';

function MealPlanner() {
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

  return (
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

              {meals.map((meal) => (
                <MealSlot key={meal} mealType={meal} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MealPlanner;