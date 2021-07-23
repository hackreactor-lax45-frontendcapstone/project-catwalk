import Redux from 'redux';

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_CART':
    state.push(action.payload);
    return state;
  default:
    return state;
  }
};

export default reducer;