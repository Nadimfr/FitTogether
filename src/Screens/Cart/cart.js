import React, { useState } from "react";
import Dumbells from "../../Assets/Images/Dumbells.png";
import { AiFillDelete } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";

import CustomPopup from "../../Components/Popup/CustomPopup";
import "../Cart/cart.scss";

const Cart = () => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="cart">
      <div className="user">Hello (Username),</div>

      <div className="cart">
        <div className="left">
          <div className="added">
            <img className="p-img" src={Dumbells} />
            <div className="product">
              <div className="name">Dumbells</div>
              <div className="description">20Kgs</div>
            </div>

            <div className="price">$30.00 USD</div>

            <AiFillDelete className="delete" size={30} />
          </div>
          <div className="added">
            <img className="p-img" src={Dumbells} />
            <div className="product">
              <div className="name">Dumbells</div>
              <div className="description">20Kgs</div>
            </div>

            <div className="price">$30.00 USD</div>

            <AiFillDelete className="delete" size={30} />
          </div>
          <div className="added">
            <img className="p-img" src={Dumbells} />
            <div className="product">
              <div className="name">Dumbells</div>
              <div className="description">20Kgs</div>
            </div>

            <div className="price">$30.00 USD</div>

            <AiFillDelete className="delete" size={30} />
          </div>
        </div>
        <div className="separator"></div>
        <div className="pay">
          <div className="right">
            <div className="head">
              <div>Product Name</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>
            <div className="row">
              <div>Dumbells</div>
              <div>1</div>
              <div>30.00</div>
            </div>
            <div className="row">
              <div>Dumbells</div>
              <div>1</div>
              <div>30.00</div>
            </div>
            <div className="row">
              <div>Dumbells</div>
              <div>1</div>
              <div>30.00</div>
            </div>
            <div className="row">
              <div>Dumbells</div>
              <div>1</div>
              <div>30.00</div>
            </div>

            <div className="total">
              <div>Total Price</div>
              <div>USD 1,200.00$</div>
            </div>
          </div>

          <div className="order" onClick={(e) => setVisibility(!visibility)}>
            Order
          </div>
        </div>
      </div>

      <CustomPopup onClose={popupCloseHandler} show={visibility}>
        <div className="pop">
          <GrStatusGood color="blue" size={100} />
          <div className="text">Order made successfully !</div>
        </div>
      </CustomPopup>
    </div>
  );
};

export default Cart;
