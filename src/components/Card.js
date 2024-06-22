import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card">
      <h2>{meal.strMeal}</h2>
      <p>{meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"picture" + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </li>
  );
};

export default Card;
