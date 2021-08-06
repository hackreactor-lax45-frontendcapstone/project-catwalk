import Redux from 'redux';

const initialState = 'relevant';

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_SORTMETHOD':
    return action.payload;
  default:
    return state;
  }
};