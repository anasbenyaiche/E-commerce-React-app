import React from 'react'
import './collection.style.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'

const CollectionPage = ({ match}) => {
    console.log(match.params.collectionId)
    return (<div className="collection-page">
        <h2>{match.params.collectionId}</h2>
        
    </div>)
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)