import * as CONSTANTS from './constants';

const initialState = {
  productList:[],
  cartList:[],
  loading:false,
  error:false
};
export default function getProducts(state = initialState,action = {}) {
  switch (action.type) {
    case  CONSTANTS.GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        productList:[],
        error: false,
      };
    case  CONSTANTS.GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
        error: false,
      };
    case  CONSTANTS.GET_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case  CONSTANTS.ADD_PRODUCT_REQUEST:

      return {
        ...state,
        productList:action.productList,
        cartList:action.cartList
      };
     case  CONSTANTS.REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        productList:action.paylaod.productList,
        cartList:action.payload.cartList
      };
    default:
      return state;
  }
}
