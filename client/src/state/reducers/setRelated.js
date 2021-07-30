import Redux from 'redux';

const initialState = {
  returned: false,
  ids: [],
  products: [],
  styles: [],
  modal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_RELATED':
    return {
      returned: action.payload.returned,
      ids: action.payload.ids,
      products: action.payload.products,
      styles: action.payload.styles,
      modal: false,
    };
  case 'MODAL_VIEW':
    return {
      ...state,
      modal: !state.modal,
    }
  default:
    return state;
  }
};

export default reducer;