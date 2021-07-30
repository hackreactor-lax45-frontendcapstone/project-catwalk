import Redux from 'redux';

const initialState = {
  returned: false,
  ids: [],
  products: [],
  styles: [],
  modal: false,
  compare: {},
  outfits: [],
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
      outfits: [],
    };
  case 'MODAL_VIEW':
    var stateObj = {
      returned: state.returned,
      ids: state.ids,
      products: state.products,
      styles: state.styles,
      modal: !state.modal,
      compare: action.payload,
      outfits: state.outfits,
    };
    if (!stateObj.modal) {
      stateObj.compare = {};
    }
    return stateObj;
  case 'ADD_OUTFIT':
    let existingOutfits = state.outfits;
    existingOutfits.push(action.payload);
    return { ...state,
      outfits: existingOutfits,
    }
  case 'REMOVE_OUTFIT':
    state.outfits.splice(action.payload, 1);
    return state;
  default:
    return state;
  }
};

export default reducer;