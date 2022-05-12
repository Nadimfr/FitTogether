import React from "react";
import "../Pricing/pricing.scss";

const pricing = () => {
  return (
    <>
      <div className="Pricing">Pricing</div>
      <div className="cards">
        <div className="card">
          <div className="plan">1-month plan</div>
          <div className="price">USD$ 19.99</div>
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
          <div className="plan">3-month plan</div>
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
          <div className="plan">6-month plan</div>
          <div className="price">USD$ 49.99</div>
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
