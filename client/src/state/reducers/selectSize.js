import Redux from 'redux';

const initialState = 'whatsizeisthis';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_SIZE':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;