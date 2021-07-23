import Redux from 'redux';

const reducer = (state = 0, action) => {
  // action houses type + payload
  switch (action.type) {
  case 'SELECT_STYLE':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;