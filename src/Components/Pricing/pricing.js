import React, { useEffect, useState } from "react";
import * as PlansApi from "../../Core/apis/plans";
import "../Pricing/pricing.scss";

const Pricing = () => {
  useEffect(() => {
    PlansApi.getAllPlans()
      .then((res) => {
        setPlans(res);
        console.log(res);
      }, [])
      .finally(() => {
        setLoading(!isLoading);
      });
  }, []);

  const [isLoading, setLoading] = useState(true);
  const [plans, setPlans] = useState([]);

  return (
    <>
      <div className="Pricing">Pricing</div>
      <div className="cards">
        {plans.map((plan) => (
          <div className="card">
            <div className="plan">{plan.name}</div>
            <div className="price">USD$ {plan.price}</div>
            <div className="list">
              {plan.content.map((x, i) => (
                <li>{x}</li>
              ))}
            </div>

            <div className="subscribe">Subscribe</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
