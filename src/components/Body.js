import React from "react";
import Cards from "./card";
import "../styles/Body.css";
import list from "../data";

const Body = ({ data,check,cart,setCart}) => {


  return (
    <section>
      {
       check===0?(

        list.map((item) => (
            <Cards key={item.id} item={item} cart={cart} setCart={setCart} />
          ))

       ):(
        data.map((item) => (
            <Cards key={item.id} item={item}  cart={cart} setCart={setCart}/>
          ))
       )
      }
    </section>
  );
};

export default Body;