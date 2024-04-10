import { addItemIngredients, removeItemIngredients } from "../Stores/CartSlice";
import { useDispatch } from "react-redux";
export default function TableRow(props) {
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    if (e.target.checked) {
      dispatch(addItemIngredients(props.ingredient));
    } else {
      dispatch(removeItemIngredients(props.ingredient));
    }
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
    </tr>
  );
}
