import Redux from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
  case 'SELECT_THUMBNAIL':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;