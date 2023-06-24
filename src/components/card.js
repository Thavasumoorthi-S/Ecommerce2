import React from "react";

const Cards = ({ item,cart,setCart}) => {
  const { price,size,brand, img } = item;
  const shows= (item,id) => {
  
    if(cart.indexOf(item) === -1) 
     {
       setCart([...cart, item]);
     }
  else
  {
  const arr = cart.filter((item) => item.id !== id);
   setCart(arr);
 }
}
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div> 
      <div className="details">
        <p>BRAND:{brand.toUpperCase()}</p>
        <p>RAM:{size}</p>
        <p>PRICE:{price}</p>
        <button onClick={()=>shows(item,item.id)}>{!cart.includes(item)?"ADD TO CART":"REMOVE FROM CART"}</button>
      </div>
    </div>
  );
};

export default Cards;