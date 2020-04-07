import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../logo.svg";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  // const publishableKey = "pk_test_wtsdu7m6OuPsA2Wd6Eip8g0K0088b1i6bn";
  const onToken = token => {
    console.log(token);
    alert("payment succesful");
  };
  return (
    <StripeCheckout
      label="pay now"
      name="Anas Shop"
      billingAddress
      shippingAddress
      image={logo}
      bitcoin
      description={`Your total is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
    />
  );
};
export default StripeCheckoutButton