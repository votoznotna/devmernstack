import isEmpty from '../validation/is-empty';
import initialState from './initialState';
import { SET_CURRENT_USER } from '../actions/types';

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
