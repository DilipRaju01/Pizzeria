import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Stores/CartSlice";
import CartPizza from "./CartPizza";
import CartIngredients from "./CartIngredients";
import Lottie from "react-lottie";
import emptyCartAnimation from "../animations/EmptyCartAnimation.json";
import orderPlacedAnimation from "../animations/OrderPlacedAnimation.json";
import { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderSummaryIngredients from "./OrderSummaryIngredients";

const Cart = () => {
  const defaultOptionsEmptyCart = {
    loop: true,
    autoplay: true,
    animationData: emptyCartAnimation,
    renderer: "svg",
  };
  const defaultOptionsPlaceOrder = {
    loop: true,
    autoplay: true,
    animationData: orderPlacedAnimation,
    renderer: "svg",
  };
  const pizzas = useSelector((store) => store.cart.pizzas);
  const ingredients = useSelector((store) => store.cart.ingredients);
  const totalAmount = useSelector((store) => store.cart.cartTotal);
  const ingredientsTotal = useSelector((store) => store.cart.ingredientsTotal);
  const pizzaTotal = useSelector((store) => store.cart.pizzaTotal);
  let [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const handleClickClear = () => {
    dispatch(clearCart());
  };
  const handleClickPlaceOrder = () => {
    setIsOrderPlaced(true);
  };
  return (
    <div
      className=""
      style={{
        display: "inline-block",
        margin: "auto",
        width: "100%",
        height: "200vh",
        backgroundColor: "#fcd6b8",
      }}
    >
      {!isOrderPlaced ? (
        pizzas.length + ingredients.length > 0 ? (
          <div>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h3>
                The Cart Total is :{" "}
                <span className="h3 text-success">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </h3>
              <button
                onClick={handleClickClear}
                style={{ margin: "20px" }}
                className="btn btn-danger"
              >
                Clear Cart
              </button>
              <button onClick={handleClickPlaceOrder} className="btn btn-info">
                Place Order
              </button>
            </div>
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
                  style={{
                    backgroundColor: "#fcb57e",
                    width: "600px",
                    margin: "auto",

                    display: "inline-block",

                    textAlign: "center",
                    verticalAlign: "middle",

                    borderRadius: "10px",
                  }}
                >
                  {pizzas.length > 0 ? (
                    pizzas.map((pizza, index) => {
                      return <CartPizza key={index} pizza={pizza} />;
                    })
                  ) : (
                    <tr>
                      <td style={{ padding: "20px" }}>
                        No pizzas are added to the cart. Try adding pizzas to
                        view them in the cart.
                      </td>
                    </tr>
                  )}
                  <p
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    className="h2"
                  >
                    Pizza's Total :{" "}
                    <span className="text-success">₹{pizzaTotal}</span>
                  </p>
                </table>
              </td>
              <td>
                <p className="h2">Toppings</p>
                <table
                  className=""
                  style={{
                    backgroundColor: "#fcb57e",
                    display: "inline-block",
                    width: "400px",
                    textAlign: "center",
                    margin: "auto",
                    verticalAlign: "middle",
                    border: "1px solid #fcd6b8",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => {
                      return (
                        <CartIngredients key={index} ingredient={ingredient} />
                      );
                    })
                  ) : (
                    <tr>
                      <td>
                        No Toppings are added to the cart. Try adding Toppings
                        to customise your pizza.
                      </td>
                    </tr>
                  )}
                  <p style={{ marginTop: "20px" }} className="h2">
                    Toppings Total :{" "}
                    <span className="text-success">₹{ingredientsTotal}</span>
                  </p>
                </table>
              </td>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Lottie
              options={defaultOptionsEmptyCart}
              height={300}
              width={300}
            />
            <p className="h3">
              Cart is Empty. Try adding Pizza's from our collection or customize
              your own pizza.
            </p>
          </div>
        )
      ) : (
        <div>
          <Lottie options={defaultOptionsPlaceOrder} height={500} width={500} />
          <table
            style={{
              borderRadius: "10px",
              width: "400px",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <thead>
              <tr style={{ border: "1px solid black" }}>
                <th style={{ width: "200px" }}>Name</th>
                <th style={{ width: "100px" }}>Quantity</th>
                <th style={{ width: "100px" }}>Price</th>
              </tr>
            </thead>
            {pizzas.map((pizza, index) => (
              <OrderSummary key={index} pizza={pizza} />
            ))}
            {ingredients.map((ingredient, index) => (
              <OrderSummaryIngredients key={index} ingredient={ingredient} />
            ))}
            <tr style={{ border: "1px solid black" }}>
              <td>Total Amount Paid : {totalAmount}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
