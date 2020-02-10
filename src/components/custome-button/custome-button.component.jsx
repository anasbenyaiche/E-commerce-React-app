import React from "react";
import "./custome-button.style.scss";

const CustomeButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button className={`${isGoogleSignin?'google-sign-in':''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomeButton;
