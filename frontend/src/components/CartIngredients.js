import React from "react";

const CartIngredients = (props) => {
  return (
    <tr style={{ margin: "auto" }}>
      <td style={{ width: "200px" }}>{props.ingredient.tname}</td>
      <td style={{ width: "200px" }}>₹{props.ingredient.price}</td>
    </tr>
  );
};

export default CartIngredients;
