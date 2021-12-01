import {ActionTypes} from '../constants/actionType';
import productService from '../../services/ProductService';

export const getProducts = () => async dispatch => {
  try {
    //get request
    productService.getProductList().then(data => {
      dispatch({type: ActionTypes.GET_PRODUCTS, payload: data});
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_GET_PRODUCTS,
      payload: error,
    });
  }
};
