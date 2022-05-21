import React, { useEffect, useState } from "react";
import "../Shop/shop.scss";
import ItemsCarousel from "react-items-carousel";
import Dumbells from "../../Assets/Images/Dumbells.png";
import Drink from "../../Assets/Images/drink.png";
import Package from "../../Assets/Images/package.jpg";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import * as ProductsApi from "../../Core/apis/products";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndex1, setActiveItemIndex1] = useState(0);
  const [activeItemIndex2, setActiveItemIndex2] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    ProductsApi.getAllProducts().then((res) => {
      setProducts(res);
      console.log(res);
    }, []);
  });

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
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {/* <Link to="/product-details" style={{ textDecoration: "none" }}> */}
            {/* </Link> */}
            {products.map((product) => (
              <div className="card">
                <img className="product-image" src={product.image} />
                <div className="product-title">{product.name}</div>
                <div className="product-price">{product.price} $</div>
              </div>
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
            numberOfCards={4}
            gutter={20}
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
            <div className="card">
              <img className="product-image" src={Drink} />
              <div className="product-title">Muscle Blaze Weigh Active</div>
              <div className="product-price">65.00 $</div>
            </div>
          </ItemsCarousel>
        </div>
      </div>
      <div className="sec1">
        <div className="title">
          Packages <span>( Ends in 23:43:21 hours )</span>
        </div>
        <div>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex2}
            activeItemIndex={activeItemIndex2}
            numberOfCards={4}
            gutter={20}
            leftChevron={<AiOutlineLeft size={30} color="white" />}
            rightChevron={<AiOutlineRight size={30} color="white" />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div className="card">
              <img
                src={Package}
                style={{ marginBottom: "0px", width: "70%" }}
              />
              <div className="product-title">Summer Package 1</div>
              <div className="product-price">1,099.00 $</div>
            </div>
            <div className="card">
              <img
                src={Package}
                style={{ marginBottom: "0px", width: "70%" }}
              />
              <div className="product-title">Summer Package 1</div>
              <div className="product-price">1,099.00 $</div>
            </div>
            <div className="card">
              <img
                src={Package}
                style={{ marginBottom: "0px", width: "70%" }}
              />
              <div className="product-title">Summer Package 1</div>
              <div className="product-price">1,099.00 $</div>
            </div>
            <div className="card">
              <img
                src={Package}
                style={{ marginBottom: "0px", width: "70%" }}
              />
              <div className="product-title">Summer Package 1</div>
              <div className="product-price">1,099.00 $</div>
            </div>
            <div className="card">
              <img
                src={Package}
                style={{ marginBottom: "0px", width: "70%" }}
              />
              <div className="product-title">Summer Package 1</div>
              <div className="product-price">1,099.00 $</div>
            </div>
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
};

export default Shop;
