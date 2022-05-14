import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.scss";

const header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <div className="left">Fit Together</div>
      </Link>
      <div className="menu">
        <Link to="/quiz">
          <li>Take your quiz</li>
        </Link>
        <li>Pricing</li>
        <Link to="/store">
          <li>Store</li>
        </Link>
        <li>About Us</li>
        <Link to="/faq">
          <li>FAQ</li>
        </Link>
      </div>

      <Link to="/login">
        <div className="right">Sign Up</div>
      </Link>
    </div>
  );
};

export default header;
