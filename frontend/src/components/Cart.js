import { useDispatch, useSelector } from "react-redux";
// import { ProductsCard } from "./ProductsCard";
import { clearCart } from "../Stores/CartSlice";
// import Card from "./Card";
// import CakeCard from "./CakeCard";
// import PizzaCard from "./PizzaCard";
import CartPizza from "./CartPizza";
import TableRow from "./TableRow";
import CartIngredients from "./CartIngredients";
// import { useState } from "react";

const Cart = () => {
  const items1 = useSelector((store) => store.cart.items1);
  const items2 = useSelector((store) => store.cart.items2);
  const totalAmount = useSelector((store) => store.cart.cartTotal);
  //   console.log(items2);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div
      className=""
      style={{ display: "inline-block", margin: "auto", width: "100%" }}
    >
      <table
        style={{
          width: "100%",
          verticalAlign: "top",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <td>
          <p className="h2">Pizzas</p>
          <table
            // className="table table-striped"
            style={{
              width: "600px",
              // marginLeft: "10%",
              margin: "auto",
              // marginTop: "50px",
              display: "inline-block",
              // marginBottom: "20px",
              textAlign: "center",
              verticalAlign: "middle",
              // border: "1px solid",
              // padding: "auto",
              // borderRadius: "2%",
              // borderStyle: "outset",
              // height: "150px",

              //   padding: "0px",
            }}
          >
            {items1.length > 0 ? (
              items1.map((pizza, index) => {
                return <CartPizza key={index} pizza={pizza} />;
              })
            ) : (
              <tr>
                <td>
                  No pizzas are added to the card. Try adding pizzas to view
                  them in the cart.
                </td>
              </tr>
            )}
          </table>
        </td>
        <td>
          <p className="h2">Toppings</p>
          <table
            className=""
            style={{
              display: "inline-block",
              // marginLeft: "10%",
              width: "400px",
              textAlign: "center",
              margin: "auto",
              // marginTop: "50px",

              // width: "600px",
              // marginTop: "50px",
              // display: "inline-block",
              // marginBottom: "20px",
              // textAlign: "center",
              verticalAlign: "middle",
              border: "1px solid",
              // padding: "auto",
            }}
          >
            {items2.length > 0 ? (
              items2.map((ingredient, index) => {
                console.log(items2);
                return <CartIngredients key={index} ingredient={ingredient} />;
              })
            ) : (
              <tr>
                <td>
                  No Toppings are added to the card. Try adding Toppings to
                  customise your pizza.
                </td>
              </tr>
            )}
            <p className="h2">Toppings Total : {}</p>
          </table>
        </td>
      </table>
      {items1.length + items2.length === 0 ? (
        <h3>The Cart is empty.</h3>
      ) : (
        <h3>
          The Cart Total is :{" "}
          <span className="h3 text-success">₹{totalAmount.toFixed(2)}</span>
        </h3>
      )}
      <button onClick={handleClick} className="btn btn-info">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
