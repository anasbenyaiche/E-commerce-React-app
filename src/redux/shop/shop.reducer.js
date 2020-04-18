// import SHOP_DATA from "./shop.data"
import ShopActionTypes from "./shop.types";

const INITAL_STATE = {
    collections: null
}

const shopReducer = (state = INITAL_STATE, aciton) => {
    switch(aciton.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: aciton.payload 
            }
        default:
           return state
    }
}
export default shopReducer