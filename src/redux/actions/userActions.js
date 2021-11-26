import {ActionTypes} from '../constants/actionType';
import userService from '../../services/UserService';
import jwtDecode from 'jwt-decode';

export const loginUser = (email, password) => async dispatch => {
  userService
    .login(email, password)
    .then(data => {
      // console.log(JSON.stringify(data) + ' ' + ' user data');
      const userData = jwtDecode(data.token);
      dispatch({
        type: ActionTypes.LOGIN_USER,
        payload: {
          user: userData,
          token: data.token,
        },
      });
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.FAILED_USER,
        payload: error,
      });
    });
};

export const addUserData = data => async dispatch => {
  userService
    .register(data)
    .then(data => {
      dispatch({type: ActionTypes.ADD_USER, payload: data.data});
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.FAILED_USER,
        payload: error,
      });
    });
};
export const logout = () => async dispatch => {
  dispatch({type: ActionTypes.REMOVE_USER});
};
