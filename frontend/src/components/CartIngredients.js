import React from "react";
import { useDispatch } from "react-redux";
import { removeItemIngredients } from "../Stores/CartSlice";

const CartIngredients = (props) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItemIngredients(props.ingredient));
  };
  return (
    <tr style={{ margin: "auto" }}>
      <td style={{ width: "200px" }}>
        <strong>{props.ingredient.tname}</strong>
      </td>
      <td style={{ width: "100px" }}>
        <strong>₹{props.ingredient.price}</strong>
      </td>
      <td style={{ width: "100px" }}>
        <img
          style={{ cursor: "pointer", width: "20px" }}
          alt="toppingsImage"
          onClick={() => handleRemove()}
          src="/assets/icons8-delete.svg"
        />
      </td>
    </tr>
  );
};

export default CartIngredients;
