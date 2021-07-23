import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
  reducers, // combined reducers
  {}, // default state
  applyMiddleware(thunk) // allows async calls
);

export default store;