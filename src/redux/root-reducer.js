import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartRedcuer from './cart/cart.reducers'


export default combineReducers({
    user: userReducer ,
    cart: cartRedcuer
})