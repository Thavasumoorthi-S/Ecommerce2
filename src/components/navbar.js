import React from "react";
import "../styles/navbar.css";


const Navbar = ({ setDisplay, size }) => {
  return (
    <nav>
      <div className="nav_box">
        {/* <span><img width="40" height="40" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/></span>     */}
        {/* <img width="50px" height="50px" src="https://img.icons8.com/ios/50/000000/home--v1.png" style={{cursor:'ponter'}} onClick={()=>setDisplay(true)} alt="home--v1"/> */}
        <p className="my_shop" onClick={() => setDisplay(true)} style={{paddingLeft:"35%"}}>
          KANNAN ONLINE SHOPPING
        </p>
        <img width="40px" height="40px" src="https://img.icons8.com/ios/50/000000/home--v1.png" style={{cursor:'ponter'}} onClick={()=>setDisplay(true)} alt="home--v1"/>
        <span className="cart" style={{padding:"2px",textAlign:'right'}} onClick={() => setDisplay(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        <span>{size}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
