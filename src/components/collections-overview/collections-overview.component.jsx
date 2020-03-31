import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import { selectShopCollection } from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProp }) => (
        <CollectionPreview {...otherCollectionProp} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection
});
export default connect(mapStateToProps)(CollectionsOverview);
