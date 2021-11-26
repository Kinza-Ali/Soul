import {ActionTypes} from '../constants/actionType';

export const addToCart = (product, value) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product: product,
      qty: value,
    },
  };
};

export const removeFromCart = prodId => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: prodId,
    },
  };
};

export const changeQuantity = (prodId, value) => {
  return {
    type: ActionTypes.CHANGE_QTY,
    payload: {
      id: prodId,
      qty: value,
    },
  };
};

export const getItem = () => {
  return {
    type: ActionTypes.GET_CART_ITEMS,
  };
};
