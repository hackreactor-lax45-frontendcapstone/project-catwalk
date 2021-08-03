import Redux from 'redux';

const initialState = {
  size: '',
  qty: 0,
  isSizeSelected: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_SIZE':
    return {
      size: action.payload.size,
      qty: action.payload.qty,
      isSizeSelected: action.payload.isSizeSelected,
    };


  default:
    return state;
  }
};

export default reducer;