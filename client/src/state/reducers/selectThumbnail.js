import Redux from 'redux';

const initialState = {
  index: 0,
  scrollLeft: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_THUMBNAIL':
    let { index, max, galleryWidth } = action.payload;
    if (index > max) {
      return { index: max, scrollLeft: 0 };
    } else if (index < 0) {
      return { index: 0, scrollLeft: 0 };
    }
    return { index, scrollLeft: 0 };
  default:
    return state;
  }
};

export default reducer;