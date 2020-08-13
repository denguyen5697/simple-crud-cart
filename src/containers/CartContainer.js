import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actionDeleteProduct, actionChangeMessage, actionUpdateProductInCart } from "../actions/index";
import message from "../reducers/message";
class CartContainer extends Component {
  showCartItem = (cart) => {
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
      return <CartItem key={index} item={item} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart}></CartItem>;
      });
    }
    return result;
  };
  showTotal = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
  render() {
    var { cart } = this.props;
    console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    );
  }
  
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actionDeleteProduct(product));
    },
    onChangeMessage: (message) => {
      dispatch(actionChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actionUpdateProductInCart(product, quantity));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
