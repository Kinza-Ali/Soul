import orderService from '../../services/OrderServices';
import {ActionTypes} from '../constants/actionType';

export const addOrder = orderList => async dispatch => {
  try {
    orderService.postOrder(orderList);
    alert('Order Sucessfully placed');
    dispatch({type: ActionTypes.EMPTY_CART});
  } catch (error) {
    dispatch({
      type: ActionTypes.FAILED_Order,
      payload: error,
    });
    console.log(error);
    alert('Could not place order try again');
  }
};
