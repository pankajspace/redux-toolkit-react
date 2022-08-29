import React from "react";
import { useSelector } from "react-redux";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button>Order Cakes</button>
      <button>Restock Cakes</button>
    </div>
  );
}

export default CakeView;
