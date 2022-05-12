import React from "react";
import "../Footer/footer.scss";

const footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <div className="title">Fit Together</div>
        <div className="app">MOBILE APP</div>
        <div className="social-medias">
          <div>fb</div>
          <div>insta</div>
          <div>tiktok</div>
        </div>
        <div className="touch">get in touch</div>
        <div className="career">careers</div>
      </div>
      <div className="section2">
        <a
          href=""
          style={{ textDecoration: "none", color: "white", fontWeight: "600" }}
        >
          Privacy Policy
        </a>{" "}
        2022, Fit Together International, LLC.
      </div>
    </div>
  );
};

export default footer;
