import React from "react";
import "./custome-button.style.scss";

const CustomeButton = ({ children, isGoogleSignin,inverted, ...otherProps }) => (
  <button className={`${inverted?'inverted':''} ${isGoogleSignin?'google-sign-in':''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomeButton;
