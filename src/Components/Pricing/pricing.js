import React from "react";
import "../Pricing/pricing.scss";

const pricing = () => {
  return (
    <>
      <div className="Pricing">Pricing</div>
      <div className="cards">
        <div className="card">
          <div className="plan">Plan A</div>
          <div className="price">USD$ 39.99</div>
          <div className="list">
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
          </div>

          <div className="subscribe">Subscribe</div>
        </div>
        <div className="card">
          <div className="plan">Plan B</div>
          <div className="price">USD$ 69.99</div>
          <div className="list">
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
          </div>

          <div className="subscribe">Subscribe</div>
        </div>
        <div className="card">
          <div className="plan">Plan C</div>
          <div className="price">USD$ 99.99</div>
          <div className="list">
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
            <li>OK</li>
          </div>

          <div className="subscribe">Subscribe</div>
        </div>
      </div>
    </>
  );
};

export default pricing;
