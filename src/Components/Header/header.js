import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.scss";

const header = () => {
  return (
    <div className="Header">
      <div className="left">Fit Together</div>
      <div className="menu">
        <Link to="/quiz">
          <li>Take your quiz</li>
        </Link>
        <li>Pricing</li>
        <Link to="/store">
          <li>Store</li>
        </Link>
        <li>About Us</li>
        <li>Blog</li>
      </div>
      <div className="right">Sign Up</div>
    </div>
  );
};

export default header;
