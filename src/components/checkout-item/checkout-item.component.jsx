import React from "react";
import "./checkout-item.style.scss";
const CheckoutItem = ({ cartItem: { imageURL, name, price, quantity } }) => {

    return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageURL} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
      <div className="remove-button"><span role="img" aria-label="cross" onClick={() => {}}>❌</span></div>  
  </div>
)};
export default CheckoutItem;
