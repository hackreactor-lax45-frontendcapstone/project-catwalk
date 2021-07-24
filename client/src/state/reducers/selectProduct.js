import Redux from 'redux';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_PRODUCT':
    return action.payload;
  default:
    return state;
  }
};