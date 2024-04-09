import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
// import Footer from './Footer';

const BuildPizza = () => {
  let [ingredients, setIngredients] = useState([]);
  const totalAmount = useSelector((store) => store.cart.ingredientsPrice);
  useEffect(() => {
    axios
      .get("http://localhost:5000/pizza/build-pizza")
      .then((res) => {
        setIngredients(res.data);
        // console.log(ingredients);
      })
      .catch((error) => console.log(error));
  }, []);
  // const dispatch = useDispatch();
  // const handleChange = (item) => {
  //   dispatch(addItem1(item));
  //   // console.log(item);
  // };
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
        {/* <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">ID</th>
      <th scope="col">Rating</th>
    </tr>
  </thead> */}
        <tbody>
          {ingredients.map((i, index) => (
            <TableRow ingredient={i} key={index} />
          ))}
          <tr>
            <td
              style={{
                backgroundColor: "white",
                borderLeft: "0px",
                borderBottom: "0px",
                color: "#4603a3",
              }}
            >
              <p className="h4">Total Cost : {totalAmount}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <button className="btn btn-outline btn-outline-warning">
          Build Ur Pizza
        </button>
      </div>
    </div>
  );
};

export default BuildPizza;
