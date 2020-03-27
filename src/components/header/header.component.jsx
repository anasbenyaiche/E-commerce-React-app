import React from "react";
import "./header.style.scss";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden}) => {
  return (

    <div className="header">
   
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {
          currentUser ?
          <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
          <Link to="/signinandsignup" className="option">SIGN IN</Link>
        }

        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <CartIcon/>
      </div>
      {
        hidden ? null :<CartDropDown/>
      }
      
    </div>
  );
};
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden

})
export default connect(mapStateToProps)(Header);
