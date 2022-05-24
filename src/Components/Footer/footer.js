import React from "react";
import "../Footer/footer.scss";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <div
          className="title"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Fit Together
        </div>
        <a href="https://appstore.com" style={{ textDecoration: "none" }}>
          <div className="app">MOBILE APP</div>
        </a>
        <div className="social-medias">
          <a className="to" href="https://facebook.com">
            <AiFillFacebook size={30} color="white" />
          </a>
          <a className="to" href="https://instagram.com">
            <AiFillInstagram size={30} color="white" />
          </a>
          <a className="to" href="https://tiktok.com">
            <FaTiktok size={30} color="white" />
          </a>
        </div>
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <div className="touch">get in touch</div>
        </Link>
        <div className="career">careers</div>
      </div>
      <div className="section2">
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "#703d57",
            fontWeight: "600",
          }}
        >
          Privacy Policy
        </a>{" "}
        2022, Fit Together International, LLC.
      </div>
    </div>
  );
};
export default footer;
