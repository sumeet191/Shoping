import * as CONSTANTS from './constants';

export function getProductRequest() {
  return {
    type: CONSTANTS.GET_LIST_REQUEST,
  };
}

export function getProductSuccess(res) {
  return {
    type: CONSTANTS.GET_LIST_SUCCESS,
    payload: res,
  };
}

export function getProductError(err) {
  return {
    type:  CONSTANTS.GET_LIST_ERROR,
    payload: err,
  };
}

export function addProductRequest({productList,cartList}) {
  return {
    type: CONSTANTS.ADD_PRODUCT_REQUEST,
    productList,
    cartList
  };
}
export function removeProductRequest({productList,cartList}) {
  return {
    type: CONSTANTS.REMOVE_PRODUCT_REQUEST,
    productList,
    cartList
  };
}