import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.errors, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
