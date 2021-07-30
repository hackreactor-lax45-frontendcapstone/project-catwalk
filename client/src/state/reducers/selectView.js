import Redux from 'redux';

const initialState = {
  default: true, zoomed: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_VIEW':
    var viewObject = {
      default: !state.default,
      zoomed: state.zoomed,
    };
    if (viewObject.default) {
      viewObject.zoomed = false;
    }
    return viewObject;
  case 'ZOOM_VIEW':
    var viewObject = {
      default: state.default,
      zoomed: !state.zoomed,
    };
    if (viewObject.default) {
      viewObject.zoomed = false;
    }
    return viewObject;
  default:
    return state;
  }
};

export default reducer;