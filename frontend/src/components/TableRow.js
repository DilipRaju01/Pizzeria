import { useState } from "react";
import { addItem2 } from "../Stores/CartSlice";
import { useDispatch } from "react-redux";
export default function TableRow(props) {
  let [ingredients, setIngredients] = useState([]);

  // let [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      // setIsChecked(true);
      setIngredients([props.ingredient]);
      dispatch(addItem2(props.ingredient));
      // console.log(props.ingredient, ingredients);
      // } else {
      //   setIsChecked(false);
      //   setIngredients(
      //     ingredients.filter((ingredient) => {
      //       return ingredient !== props.ingredient;
      //     })
      //   );
      //   // dispatch(addItem2(ingredients));
    }
    // else {
    //   setIngredients(
    //     ingredients.filter((ingredient) => {
    //       return ingredient !== props.ingredient;
    //     })
    //   );
    //   dispatch(addItem2(ingredient));
    // }
  };
  return (
    <tr style={{ verticalAlign: "middle" }}>
      <td style={{ border: "1px solid #bdbbbf" }} width="200px">
        <img width="60px" height="60px" src={props.ingredient.image} />
      </td>
      <td
        style={{ border: "1px solid #bdbbbf", marginLeft: "500px" }}
        width="200px"
      >
        <strong>
          {props.ingredient.tname} &nbsp;&nbsp;₹
          {props.ingredient.price.toFixed(2)}
        </strong>
      </td>
      <td
        style={{ border: "1px solid #bdbbbf", marginLeft: "5px" }}
        width="100px"
      >
        <input type="checkbox" onChange={handleCheck} />
        <p className="text-warning" style={{ display: "inline-block" }}>
          {" "}
          &nbsp; Add
        </p>
      </td>
      {/* <td>{props.ingredient.rating}</td> */}
    </tr>
  );
}
