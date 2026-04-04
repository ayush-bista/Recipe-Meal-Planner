function MealSlot({ mealType }) {
  return (
    <div className="meal-slot">
      <p className="meal-type">{mealType}</p>
      <div className="meal-placeholder">+ Add meal</div>
    </div>
  );
}

export default MealSlot;