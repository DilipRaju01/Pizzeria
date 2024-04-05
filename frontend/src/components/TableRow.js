
export default function TableRow(props) {
    return (
      <tr style={{verticalAlign:"middle"}}>
          <td style={{border:"1px solid"}} width="200px"><img width="60px" height="60px" src={props.ingredient.image} /></td>
          <td style={{border:"1px solid",marginLeft:"500px"}} width="200px"><strong>{props.ingredient.tname} &nbsp;&nbsp;₹{props.ingredient.price.toFixed(2)}</strong></td>
          <td style={{border:"1px solid",marginLeft:"5px"}} width="100px"><input type="checkbox"/><p className="text-warning" style={{display:"inline-block"}}> &nbsp; Add</p></td>
          {/* <td>{props.ingredient.rating}</td> */}
      </tr>
    )
  }
  