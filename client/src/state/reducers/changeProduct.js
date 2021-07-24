import Redux from 'redux';

export default (state = { product: {}, style: {} }, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT':
    return action.payload;
  default:
    return state;
  }
};