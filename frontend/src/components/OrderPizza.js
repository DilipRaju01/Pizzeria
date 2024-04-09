import React, { useEffect, useState } from "react";
import axios from "axios";
// import Footer from "./Footer";
import PizzaCard from "./PizzaCard";
const OrderPizza = () => {
  let [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pizza/order-pizza")
      .then((res) => {
        setPizzas(res.data);
        // console.log(pizzas);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="row"
      style={{ width: "90%", margin: "auto", marginTop: "20px" }}
    >
      {pizzas.map((pizza, index) => {
        return <PizzaCard pizza={pizza} key={index} />;
      })}
    </div>
  );
};

export default OrderPizza;
