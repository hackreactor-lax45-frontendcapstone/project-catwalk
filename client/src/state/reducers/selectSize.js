import Redux from 'redux';

const reducer = (state = '', action) => {
  switch (action.type) {
  case 'SELECT_SIZE':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;