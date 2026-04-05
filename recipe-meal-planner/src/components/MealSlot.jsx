function MealSlot({ mealType, day, onAssign, assignedRecipe }) {
  return (
    <div className="meal-slot" onClick={() => onAssign(day, mealType)}>
      <p className="meal-type">{mealType}</p>

      {assignedRecipe ? (
        <div className="meal-filled">
          <p>{assignedRecipe.title}</p>
        </div>
      ) : (
        <div className="meal-placeholder">+ Add meal</div>
      )}
    </div>
  );
}

export default MealSlot;