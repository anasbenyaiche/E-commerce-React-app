import React from 'react'

import './cart-dropdown.style.scss';
import CustomeButton from '../custome-button/custome-button.component';

const CartDropDown = () => (
<div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomeButton>Go to checkout</CustomeButton>
</div>)

export default CartDropDown