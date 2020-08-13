import * as types from '../constants/ActionTypes';
import message from '../reducers/message';

export const actionAddToCart = (product, quantity) => {
    return {type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const actionChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message
    }
}

export const actionDeleteProduct =  (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product: product
    }
}

export const actionUpdateProductInCart = (product, quantity) => 
{
    return  {
        type: types.UPDATE_PRODUCT,
        product: product,
        quantity: quantity
}
}