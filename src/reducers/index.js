import {combineReducers} from 'redux';
import cart from './cart';

import products from './products';
import message from './message';

const appReducer = combineReducers({
    products: products,
    cart: cart,
    message: message
});

export default appReducer;