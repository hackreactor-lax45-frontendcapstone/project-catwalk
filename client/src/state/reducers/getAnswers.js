import Redux from 'redux';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ANSWERS':
      state[action.payload.question] = action.payload;
      return state;
    default:
      return state;
  }
}