import React from "react";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";
import CustomeButton from "../custome-button/custome-button.component";
import { connect } from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
    <CustomeButton>Go to checkout</CustomeButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropDown);
