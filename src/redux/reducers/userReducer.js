import {ActionTypes} from '../constants/actionType';
const initialState = {
  user: [],
  selectedUser: {},
  token: '',
  error: '',
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        error: initialState.error,
      };
    // case ActionTypes.GET_USER:
    //   return { ...state, user: payload, error: initialState.error };
    case ActionTypes.ADD_USER:
      return {...state, user: payload, error: initialState.error};
    // case ActionTypes.GET_USER_BY_ID:
    //   return { ...state, selectedUser: payload, error: initialState.error };
    case ActionTypes.FAILED_USER: {
      // console.log('inside user: ' + payload);
      return {...state, user: initialState.user, error: payload};
    }
    case ActionTypes.REMOVE_USER:
      return {...state, user: initialState.user};
    default:
      return state;
  }
};
