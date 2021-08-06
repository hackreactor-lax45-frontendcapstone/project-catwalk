import Redux from 'redux';

const initialState = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_FILTERS':
    if (state[action.payload]) {
      state[action.payload] = false;
    } else {
      state[action.payload] = true;
    }
    return state;
  default:
    return state;
  }
};