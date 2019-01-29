import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const thunkMiddleware = [thunk];

const middleware = [
  applyMiddleware(...thunkMiddleware),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : (a) => a)
];


const store = createStore(
  rootReducer,
  initialState,
  compose(...middleware)
);

export default store;
