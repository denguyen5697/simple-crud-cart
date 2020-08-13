import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import {actionAddToCart, actionChangeMessage} from '../actions/index';
import message from "../reducers/message";
class ProductsContainer extends Component {
  showProducts = (products) => {
    var result = null;
    var {onAddToCart, onChangeMessage} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>;
      });
    }
    return result;
  };
  render() {
    var { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actionAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actionChangeMessage(message));
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
