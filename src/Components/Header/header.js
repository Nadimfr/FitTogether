import React from "react";
import "../Header/header.scss";

const header = () => {
  return (
    <div className="Header">
      <div className="left">Fit Together</div>
      <div className="menu">
        <li>Take your quiz</li>
        <li>Pricing</li>
        <li>Store</li>
        <li>About Us</li>
        <li>Blog</li>
      </div>
      <div className="right">Sign Up</div>
    </div>
  );
};

export default header;
