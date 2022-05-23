import React, { useEffect, useState } from "react";
import "../Shop/shop.scss";
import ItemsCarousel from "react-items-carousel";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import * as ProductsApi from "../../Core/apis/products";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Shop = () => {
  const [gymtools, setGymtools] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [packages, setPackages] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndex1, setActiveItemIndex1] = useState(0);
  const [activeItemIndex2, setActiveItemIndex2] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    ProductsApi.getGymTools().then((res) => {
      setGymtools(res);
      console.log(res);
    });

    ProductsApi.getDrinks().then((res) => {
      setDrinks(res);
      console.log("Fitness", res);
    });

    ProductsApi.getPackages().then((res) => {
      setPackages(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="store">
      <div className="sec1">
        <div className="title">Gym Tools</div>
        <div>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={window.innerWidth > 700 ? 4 : 1}
            gutter={20}
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {gymtools.map((product) => (
              <Link
                to={`/product-details/${product._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card">
                  <img className="product-image" src={product.image} />
                  <div className="product-title">{product.name}</div>
                  <div className="product-price">{product.price} $</div>
                </div>
              </Link>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div className="sec1">
        <div className="title">Fitness Drinks</div>
        <div>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex1}
            activeItemIndex={activeItemIndex1}
            numberOfCards={window.innerWidth > 700 ? 4 : 1}
            gutter={20}
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {drinks.map((product) => (
              <Link
                to={`/product-details/${product._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card">
                  <img className="product-image" src={product.image} />
                  <div className="product-title">{product.name}</div>
                  <div className="product-price">{product.price} $</div>
                </div>
              </Link>
            ))}
          </ItemsCarousel>
        </div>
      </div>
      <div className="sec1">
        <div className="title">
          Packages{" "}
          <span>
            (<Countdown date={Date.now() + 570070000} />)
          </span>
        </div>
        <div>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex2}
            activeItemIndex={activeItemIndex2}
            numberOfCards={window.innerWidth > 700 ? 4 : 1}
            gutter={20}
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {packages.map((product) => (
              <Link
                to={`/product-details/${product._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card">
                  <img className="product-image" src={product.image} />
                  <div className="product-title">{product.name}</div>
                  <div className="product-price">{product.price} $</div>
                </div>
              </Link>
            ))}
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
};

export default Shop;
