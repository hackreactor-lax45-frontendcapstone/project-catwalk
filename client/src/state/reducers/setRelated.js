import Redux from 'redux';

const initialState = {
  returned: false,
  products: [],
  styles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_RELATED':
    return {
      returned: action.payload.returned,
      products: action.payload.products,
      styles: action.payload.styles,
    };
  default:
    return state;
  }
};

export default reducer;