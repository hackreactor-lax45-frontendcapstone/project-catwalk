import Redux from 'redux';

const initialState = {
  returned: false,
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_RELATED':
    return {
      returned: action.payload.returned,
      products: action.payload.products,
    };
  default:
    return state;
  }
};

export default reducer;