import isEmpty from '../validation/is-empty';
import initialState from './initialState';
import { SET_CURRENT_USER, PROGRESS, GET_ERRORS } from '../actions/types';

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case PROGRESS:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case GET_ERRORS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
