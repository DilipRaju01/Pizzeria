import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemPizza,
  removeItemPizza,
  reducePricePizza,
} from "../Stores/CartSlice";

const CartPizza = (props) => {
  let [noOfPizzas, setNoOfPizzas] = useState(1);
  const quantity = useSelector((store) => store.cart.quantity);
  const dispatch = useDispatch();
  const handleAdd = () => {
    setNoOfPizzas(noOfPizzas + 1);
    dispatch(addItemPizza(props.pizza));
  };
  const handleRemove = () => {
    if (quantity.get(props.pizza.id) === 1) {
      dispatch(removeItemPizza(props.pizza));
    } else {
      dispatch(reducePricePizza(props.pizza));
      setNoOfPizzas(noOfPizzas - 1);
    }
  };
  return (
    <tr
      className=""
      style={{
        margin: "auto",
        padding: "20px",
        border: "1px solid #fcd6b8",
      }}
    >
      <td
        style={{
          textAlign: "center",
          padding: "5px",
          width: "150px",
        }}
      >
        <p className="h4">{props.pizza.name}</p>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: props.pizza.type === "veg" ? "green" : "red",
            margin: "auto",
            marginBottom: "20px",
          }}
        ></div>
      </td>
      <td style={{ textAlign: "center", padding: "5px", width: "150px" }}>
        <img
          src={props.pizza.image}
          alt="pizzaImage"
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />
      </td>
      <td style={{ padding: "5px", width: "150px" }}>
        <button className="btn btn-warning" onClick={() => handleRemove()}>
          -
        </button>
        <p
          style={{
            display: "inline-block",
            padding: "20px",
          }}
          className="h2"
        >
          {quantity.get(props.pizza.id) > 0
            ? quantity.get(props.pizza.id)
            : noOfPizzas}
        </p>
        <button className="btn btn-warning" onClick={() => handleAdd()}>
          +
        </button>
      </td>
      <td style={{ padding: "5px", width: "150px" }}>
        <p className="h5">
          ₹{props.pizza.price.toFixed(2) * quantity.get(props.pizza.id)}
        </p>
      </td>
    </tr>
  );
};

export default CartPizza;
