import React, { useEffect, useState } from "react";
import "../Product/product.scss";
import { TextField } from "@mui/material";
import Dumbells from "../../Assets/Images/Dumbells.png";
import Drink from "../../Assets/Images/drink.png";
import Package from "../../Assets/Images/package.jpg";
import CustomPopup from "../../Components/Popup/CustomPopup";
import * as ProductsApi from "../../Core/apis/products";
import { Link } from "react-router-dom";

const Product = () => {
  const [visibility, setVisibility] = useState(false);
  const [each, setEach] = useState();
  const [isLoading, setLoading] = useState(true);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  useEffect(() => {
    let id = window.location.href.split("/");
    id = id[id.length - 1];

    ProductsApi.getProductDetails(id)
      .then((res) => {
        setEach(res);
        console.log(each);
      }, [])
      .finally(() => {
        setLoading(!isLoading);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="tailSpin">
        {/* <TailSpin height="60" width="60" color="#4ba4f0" ariaLabel="loading" /> */}
      </div>
    );
  } else {
    return (
      <div className="product-page">
        <div className="left">
          <img className="product-image" src={each.image} />
          <div className="others">
            <img className="image" src={each.image} />
            <img className="image" src={each.image} />
            <img className="image" src={each.image} />
          </div>
        </div>
        <div className="separator"></div>
        <div className="right">
          <div className="product-title">{each.name}</div>
          <div className="product-price">{each.price} USD</div>
          <div className="quantity">
            <div className="label">Quantity :</div>
            <TextField className="input" type={"number"} placeholder={0} />
          </div>
          <div className="process">
            <Link to="/login">
              <div className="buy">Buy Now</div>
            </Link>
            <div className="add" onClick={(e) => setVisibility(!visibility)}>
              Add to cart
            </div>
          </div>

          <div className="similar">
            <div className="sim-title">Similar Products</div>
            <div className="sim-prod">
              <img className="sim" src={Dumbells} />
              <img className="sim" src={Drink} />
              <img className="sim" src={Package} />
            </div>
          </div>
        </div>

        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Product Added to cart"
        >
          <div className="pop">
            <img className="p-image" src={Dumbells} />

            <div className="text">
              This product has successfully been added to your cart !
            </div>

            <div className="buttons">
              <Link to="/cart">
                <div className="view">View Cart</div>
              </Link>

              <div className="continue" onClick={(e) => setVisibility(false)}>
                Continue Shopping
              </div>
              <div></div>
            </div>
          </div>
        </CustomPopup>
      </div>
    );
  }
};

export default Product;
