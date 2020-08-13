import * as types from "../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));

var initialState = data ? data : [];

// var initialState = [
//   {
//     product: {
//       id: 2,
//       name: "Iphone XS Max",
//       image:
//         "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_xs_max_64gb.jpg",
//       description: "By Apple",
//       price: 1000,
//       inventory: 5,
//       rating: 3,
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: 1,
//       name: "Samsung Note 10",
//       image:
//         "https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/17/637148516615700174_SS-note10-lite-den-1.png",
//       description: "By Samsung",
//       price: 890,
//       inventory: 9,
//       rating: 5,
//     },
//     quantity: 1,
//   },
// ];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1; // -1 <=> not found, 1 <=> found
  switch (action.type) {
    case types.ADD_TO_CART: {
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      //Convert state and set state into LocalStorage
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case types.DELETE_PRODUCT: {
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      //Convert state and set state into LocalStorage
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case types.UPDATE_PRODUCT: {
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        console.log(i);
        break;
      }
    }
  }
  return index;
};

export default cart;
