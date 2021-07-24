import Redux from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_THUMBNAIL':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;