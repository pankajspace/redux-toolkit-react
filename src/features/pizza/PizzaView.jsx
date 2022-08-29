import React from "react";
import { useSelector } from "react-redux";

function PizzaView() {
  const numOfPizzas = useSelector((state) => state.pizza.numOfPizzas);
  return (
    <div>
      <h2>Number of Pizzas: {numOfPizzas}</h2>
      <button>Order Pizzas</button>
      <button>Restock Pizzas</button>
    </div>
  );
}

export default PizzaView;
