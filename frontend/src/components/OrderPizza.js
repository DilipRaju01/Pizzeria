import React, { useEffect, useState } from 'react';
import axios from "axios"
const OrderPizza = () => {
    let [pizzas,setPizzas]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/pizza/order-pizza")
        .then((res)=>{
            setPizzas(res.data);
            // console.log(pizzas);
        })
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>OrderPizza</div>
  )
}

export default OrderPizza