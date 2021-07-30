import Redux from 'redux';

const initialState = {
  returned: false,
  ids: [],
  products: [],
  styles: [],
  modal: false,
  compare: {},
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
      compare: {},
    };
  case 'MODAL_VIEW':
    var stateObj = {
      returned: state.returned,
      ids: state.ids,
      products: state.products,
      styles: state.styles,
      modal: !state.modal,
      compare: action.payload,
    };
    if (!stateObj.modal) {
      stateObj.compare = {};
    }
    return stateObj;
  default:
    return state;
  }
};

export default reducer;