import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

export default initialState => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
};