import React from "react";
import logo from "../../assets/logo.png";
import coin from "../../assets/dollar 1.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto p-4">
      <div className="navbar-start">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">
          <span className="text-black">60000000000</span>
          <span className="text-black">Coins</span>{" "}
          <span>
            <img src={coin} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
