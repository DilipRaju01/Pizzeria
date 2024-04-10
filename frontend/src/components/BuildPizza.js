import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemIngredients } from "../Stores/CartSlice";

const BuildPizza = () => {
  let [toppingsTotal, setToppingsTotal] = useState(0);
  let [ingredients, setIngredients] = useState([]);
  let [toppings, setToppings] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/pizza/build-pizza")
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleCheck = (event, item) => {
    if (event.target.checked) {
      setToppings([...toppings, item]);
      setToppingsTotal(toppingsTotal + item.price);
    } else {
      setToppings(
        toppings.filter((topping) => {
          return item.id !== topping.id;
        })
      );
      setToppingsTotal(toppingsTotal - item.price);
    }
  };
  const handleClick = () => {
    toppings.map((topping) => dispatch(addItemIngredients(topping)));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Pizzeria now gives you options to build your own pizza. Customise your
        pizza by choosing ingredients from the list given below
      </p>
      <table
        style={{ width: "600px", textAlign: "left", marginInline: "auto" }}
        className="table table-light table-striped"
      >
        <tbody>
          {ingredients.map((i) => {
            return (
              <tr style={{ verticalAlign: "middle" }}>
                <td style={{ border: "1px solid #bdbbbf" }} width="200px">
                  <img
                    width="60px"
                    height="60px"
                    src={i.image}
                    alt="toppingImage"
                  />
                </td>
                <td
                  style={{ border: "1px solid #bdbbbf", marginLeft: "500px" }}
                  width="200px"
                >
                  <strong>
                    {i.tname} &nbsp;&nbsp;₹
                    {i.price.toFixed(2)}
                  </strong>
                </td>
                <td
                  style={{ border: "1px solid #bdbbbf", marginLeft: "5px" }}
                  width="100px"
                >
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheck(event, i)}
                  />
                  <p
                    className="text-warning"
                    style={{ display: "inline-block" }}
                  >
                    {" "}
                    &nbsp; Add
                  </p>
                </td>
              </tr>
            );
          })}
          <tr>
            <td
              style={{
                backgroundColor: "white",
                borderLeft: "0px",
                borderBottom: "0px",
                color: "#4603a3",
              }}
            >
              <p className="h4">Total Cost : {toppingsTotal}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <button
          onClick={() => handleClick()}
          className="btn btn-outline btn-outline-warning"
        >
          Build Ur Pizza
        </button>
      </div>
    </div>
  );
};

export default BuildPizza;
