import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem1, removeItem1 } from "../Stores/CartSlice";

const PizzaCard = (props) => {
  const dispatch = useDispatch();
  let [isAddedToCart, setIsAddedToCart] = useState(false);
  const handleClickAdd = (item) => {
    setIsAddedToCart(true);
    dispatch(addItem1(item));
    // console.log(item);
  };
  const handleClickRemove = (item) => {
    setIsAddedToCart(false);
    // dispatch(removeItem1(item));
    // console.log(item);
  };
  return (
    <div className="col-lg-6" style={{ margin: "auto", padding: "0px" }}>
      <table
        style={{
          display: "inline-block",
          marginBottom: "20px",
          verticalAlign: "top",
          border: "2px",
          borderStyle: "outset",
          height: "320px",
          //   padding: "0px",
        }}
      >
        <td style={{ textAlign: "center", padding: "5px" }}>
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
          <p className="h5">₹{props.pizza.price.toFixed(2)}</p>
        </td>
        <td style={{ padding: "5px" }}>
          <p>{props.pizza.description}</p>
          <p>
            <strong>Ingredients : </strong>
            {props.pizza.ingredients.join(",")}
          </p>
          <p>
            <strong>Toppings : </strong>
            {props.pizza.topping.join(",")}
          </p>
        </td>
        <td style={{ textAlign: "center", padding: "5px" }}>
          <img
            src={props.pizza.image}
            style={{ width: "150px", height: "150px" }}
          />
          {!isAddedToCart ? (
            <button
              onClick={() => handleClickAdd(props.pizza)}
              className="btn btn-warning"
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={() => handleClickRemove(props.pizza)}
              className="btn btn-success"
            >
              Added to Cart
            </button>
          )}
        </td>
      </table>
    </div>
  );
};

export default PizzaCard;
