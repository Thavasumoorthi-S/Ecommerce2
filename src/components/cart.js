import React, {useState,useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart,setCart}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  const removeitem=(id)=>{
    setCart(cart.filter(item=>{return item.id!==id}))
  }

 useEffect(() => {
   handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
          </div>
          <div style={{display:"flex"}} >
            {/* <span>{item.brand}</span> */}
            <span style={{marginRight:"20px",color:"blue"}}>BRAND:{(item.brand).toUpperCase()}</span>
            <span style={{marginRight:"20px",color:"blue"}}>RAM:{(item.size).toUpperCase()}</span>
            <span style={{marginRight:"20px",color:"blue"}}>PRICE:{item.price}</span>
            <button onClick={()=>removeitem(item.id)}>REMOVE FROM CART</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span style={{marginTop:"7%"}}>Total Price of your Cart</span>
        <span style={{marginTop:"7%"}}>Rs = {price}/-</span>
      </div>
    </article>
  );
};

export default Cart;
