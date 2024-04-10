import React from "react";
import { useSelector } from "react-redux";
const OrderSummary = (props) => {
  const quantity = useSelector((store) => store.cart.quantity);
  return (
    <tr style={{ border: "1px solid black" }}>
      <td style={{ width: "200px" }}>{props.pizza.name}</td>
      <td style={{ width: "100px" }}>{quantity.get(props.pizza.id)}</td>
      <td style={{ width: "100px" }}>
        ₹{quantity.get(props.pizza.id) * props.pizza.price}
      </td>
    </tr>
  );
};

export default OrderSummary;
