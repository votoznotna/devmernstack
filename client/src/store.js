import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const thunkMiddleware = [thunk];

// const middleware = [
//   applyMiddleware(...thunkMiddleware),
//   ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : (a) => a)
// ];

const middleware = [
  applyMiddleware(...thunkMiddleware)
];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(...middleware)
);

export default store;
