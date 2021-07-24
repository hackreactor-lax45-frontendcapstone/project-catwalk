import Redux from 'redux';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STYLE_INFO':
    return action.payload;
  default:
    return state;
  }
};

export default reducer;