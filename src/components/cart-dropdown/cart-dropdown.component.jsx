import React from "react";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect'
import "./cart-dropdown.style.scss";
import CustomeButton from "../custome-button/custome-button.component";
import { connect } from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from 'react-router-dom'
const CartDropDown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { 
          cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>):
          <span className="empty-message">Your cart is empty  </span>
      }
    </div>
    <CustomeButton onClick={()=>history.push('checkout')}>Go to checkout</CustomeButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropDown));
