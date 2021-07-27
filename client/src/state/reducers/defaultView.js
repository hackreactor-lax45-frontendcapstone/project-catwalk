import Redux from 'redux';

const initialState = true;

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'DEFAULT_VIEW':
    return !state;
  default:
    return state;
  }
};

export default reducer;