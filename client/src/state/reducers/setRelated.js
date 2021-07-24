import Redux from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_RELATED':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;