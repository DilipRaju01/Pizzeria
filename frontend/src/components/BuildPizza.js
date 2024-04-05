import React, { useEffect, useState } from 'react';
import axios from "axios"
import TableRow from './TableRow';

const BuildPizza = () => {
    let [ingredients,setIngredients]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/pizza/build-pizza")
        .then((res)=>{
            setIngredients(res.data);
            // console.log(ingredients);
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div className='container'>
        <p>Pizzeria now gives you options to build your own pizza. Customise your pizza by choosing ingredients from the list given below</p>
        <table style={{width:"600px",marginInline:"auto"}} className="table table-light table-hover table-striped">
  {/* <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">ID</th>
      <th scope="col">Rating</th>
    </tr>
  </thead> */}
  <tbody>
    {ingredients.map((i,index)=>(
        <TableRow ingredient={i} key={index}/>
    ))}
  </tbody>
</table>
<h1 className='h1'>Total Cost :</h1>
<button className='btn btn-outline btn-outline-warning'>Build Ur Pizza</button>
    </div>
  )
}

export default BuildPizza