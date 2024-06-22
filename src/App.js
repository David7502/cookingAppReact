import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [mealsData, setMealsData] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + selectedMeals
      )
      .then((res) => setMealsData(res.data.meals));
  }, [selectedMeals]);

  return (
    <div className="App">
      <div className="app">
        <form action="">
          <label htmlFor="search">Enter food</label>
          <br />
          <input
            type="text"
            name=""
            id="search"
            placeholder="ex: beef"
            onChange={(e) => setSelectedMeals(e.target.value)}
          />
        </form>
        <ul id="result">
          {mealsData && //we make sure mealsData bis not empty
            mealsData
              .slice(0, 24)
              .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
