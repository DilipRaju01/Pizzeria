import React from "react";

const OrderSummaryIngredients = (props) => {
  return (
    <tr style={{ border: "1px solid" }}>
      <td style={{ width: "200px" }}>{props.ingredient.tname}</td>
      <td style={{ width: "100px" }}>{1}</td>
      <td style={{ width: "100px" }}>₹{props.ingredient.price}</td>
    </tr>
  );
};

export default OrderSummaryIngredients;
