import React from "react";
import "../Home/home.scss";
import Gym1 from "../../Assets/Images/gym1.png";
import Gym2 from "../../Assets/Images/gym2.png";
import Gym3 from "../../Assets/Images/gym3.png";
import { Link } from "react-router-dom";
import Pricing from "../../Components/Pricing/pricing";

const home = () => {
  return (
    <div className="home">
      <div className="section1">
        <div className="bubbles">
          <div className="bubble1">
            <img src={Gym1} />
          </div>
          <div className="bubble2">
            <img src={Gym2} />
          </div>
          <div className="bubble3">
            <img src={Gym3} />
          </div>
        </div>
        <div className="banner">
          <div className="title">
            Let's Fit <br></br> Together
          </div>
          <div className="subtitle">
            The hard part isn't getting your body into shape. The hard <br></br>{" "}
            part is getting your mind into shape.
          </div>
        </div>
        <div className="bubbles">
          <div className="bubble1">
            <img src={Gym1} />
          </div>
          <div className="bubble2">
            <img src={Gym2} />
          </div>
          <div className="bubble3">
            <img src={Gym3} />
          </div>
        </div>
      </div>
      <Link to="/quiz">
        <div className="section2">Take your quiz</div>
      </Link>

      <Pricing />
    </div>
  );
};

export default home;
