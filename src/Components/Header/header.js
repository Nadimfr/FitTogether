import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Header/header.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const hideSignup = () => {
    if (!sessionStorage.getItem("SESSION")) setHide(true);
    else setHide(false);
  };

  const logout = () => {
    sessionStorage.clear();
    window.location("/");
  };

  useEffect(() => {
    setInterval(() => {
      hideSignup();
    }, []);
  }, 5000);
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="left">Fit Together</div>
      </Link>
      <div className="menu">
        <Link to="/quiz" style={{ textDecoration: "none" }}>
          <li>Take your quiz</li>
        </Link>
        <Link to="/store" style={{ textDecoration: "none" }}>
          <li>Store</li>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <li>FAQ</li>
        </Link>
      </div>

      {hide ? (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="right">Sign Up</div>
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="right" onClick={() => logout()}>
            Log Out
          </div>
        </Link>
      )}

      <div className="RespMenu">
        <div className="burger" onClick={() => setShow(!show)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {show ? (
          <>
            <Link to="/quiz" style={{ textDecoration: "none" }}>
              <li>Take your quiz</li>
            </Link>
            <Link to="/store" style={{ textDecoration: "none" }}>
              <li>Store</li>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <li>FAQ</li>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="sign">Sign Up</div>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
