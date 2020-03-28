import React from "react";
import { connect } from 'react-redux'
import "./collection-item.style.scss";
import CustomeButton from "../custome-button/custome-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item , addItem} ) => {

  const {id, name, price, imageURL} = item

  return (
    <div key={id} className="collection-item">
      <div style={{ background: `url(${imageURL})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomeButton inverted onClick={()=>addItem(item)} >Add to Cart</CustomeButton>
      
    </div>
  );
};
const mapDispatchToProps = dipstach => ({
  addItem: item => dipstach(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);
