 import CartActionTypes from './cart.types'
import CartActionsTypes from './cart.types';
import { addItemToCart } from './cart.utils';
 
const INITITAL_STATE = {
  hidden: true,
  cartItems:[],

};
console.log(INITITAL_STATE.cartItems)

const cartRedcuer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionsTypes.ADD_ITEM:
        
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }

    default:
      return state;
  }
};
export default cartRedcuer