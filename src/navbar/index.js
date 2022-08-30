import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar_wrapper">
        <div className="navbar_text">
            <button>Login</button>
            <p>Pricing</p>
            <p> Who We Are</p>
            <p>How It Works</p>
            <p>Credit Repair</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
