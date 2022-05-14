import React, { useState } from "react";
import "../Shop/shop.scss";
import ItemsCarousel from "react-items-carousel";

const Shop = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="store">
      <div className="sec1">
        <div className="title">Gym Tools</div>
        <div>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<div>back</div>}
            rightChevron={<div>next</div>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div className="card">First card</div>
            <div className="card">Second card</div>
            <div className="card">Third card</div>
            <div className="card">Fourth card</div>
            <div className="card">Fourth card</div>
            <div className="card">Fourth card</div>
            <div className="card">Fourth card</div>
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
};

export default Shop;
