import {combineReducers} from 'redux';
import {productReducer} from './productReducer';
import {orderReducer} from './orderReducer';
import {userReducer} from './userReducer';
import {cartReducer} from './cartReducer';

// export default combineReducers({ post: postReducer });
const reducer = combineReducers({
  allProducts: productReducer,
  allOrder: orderReducer,
  allUser: userReducer,
  allCart: cartReducer,
});
export default reducer;
