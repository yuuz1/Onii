import { HomeActionTypes } from "./actionTypes";

export const setProduct = (products) => {
  return {
    type: HomeActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (singleProduct) => {
  // console.log(singleProduct)
  return {
    type: HomeActionTypes.SELECTED_PRODUCT,
    payload: singleProduct,
  };
};
export const displayImg = (selectedImg) => {
  // console.log(selectedImg);
  return {
    type: HomeActionTypes.DISPLAY_IMG,
    payload: selectedImg,
  };
};
export const addCartProduct = (product) => {
  // console.log(cart);
  return {
    type: HomeActionTypes.ADD_CART_PRODUCT,
    payload: product
  };
};
export const removeOneCart = (product) => {
  // console.log(cart);
  return {
    type: HomeActionTypes.REMOVE_ONE_CART,
    payload: product
  };
};


export const removeCartProduct = (product) => {
  // console.log(cart);
  return {
    type: HomeActionTypes.REMOVE_CART_PRODUCT,
    payload: product
  };
};



