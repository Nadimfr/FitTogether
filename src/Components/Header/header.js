import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.scss";

const header = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="left">Fit Together</div>
      </Link>
      <div className="menu">
        <Link to="/quiz" style={{ textDecoration: "none" }}>
          <li>Take your quiz</li>
        </Link>
        <li>Pricing</li>
        <Link to="/store" style={{ textDecoration: "none" }}>
          <li>Store</li>
        </Link>
        <li>About Us</li>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <li>FAQ</li>
        </Link>
      </div>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="right">Sign Up</div>
      </Link>
    </div>
  );
};

export default header;
