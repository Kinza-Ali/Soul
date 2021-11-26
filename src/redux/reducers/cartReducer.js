import {ActionTypes} from '../constants/actionType';
const initialState = {
  // products: [],
  cart: [],
  currentItem: null,
};

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const product = payload.product;
      const qty = payload.qty;

      const inCart = state.cart.find(item => item._id === product._id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item._id === product._id ? {...item, quantity: qty} : item,
            )
          : [...state.cart, {...product, quantity: qty}],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== payload.id),
      };

    case ActionTypes.CHANGE_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item._id === payload.id ? {...item, quantity: +payload.qty} : item,
        ),
      };
    case ActionTypes.EMPTY_CART:
      return {...state, cart: initialState.cart};
    default:
      return state;
  }
};
