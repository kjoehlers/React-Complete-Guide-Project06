import React from "react";

import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = require("../../DummyData/dummy-meals.json");
// console.log(DUMMY_MEALS);

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
