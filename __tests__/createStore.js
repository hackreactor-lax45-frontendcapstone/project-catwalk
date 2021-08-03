import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/src/state/reducers/index';
import initialState from '../data/index';

export const newStore = () => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);