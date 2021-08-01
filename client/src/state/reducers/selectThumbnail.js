import Redux from 'redux';

// these are set in ImageGallery.css

const initialState = {
  index: 0,
  scrollLeft: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_DEFAULT_THUMBNAIL':
    var { index, max, galleryWidth, IMAGE_WIDTH } = action.payload;
    var oldIndex = state.index;
    if (index > max) {
      state.index = max;
    } else if (index < 0) {
      state.index = 0;
    } else {
      state.index = index;
    }

    var divLeft = state.scrollLeft;
    var divRight = divLeft + galleryWidth;

    var imageLeft = index * IMAGE_WIDTH;
    var imageRight = imageLeft + IMAGE_WIDTH;

    if (imageLeft < divLeft) {
      state.scrollLeft = imageLeft;
    } else if (imageRight > divRight) {
      state.scrollLeft = imageRight - galleryWidth;
    }
    return state;
  case 'SELECTED_EXPANDED_THUMBNAIL':
    var { index, max, galleryWidth } = action.payload;
    if (index > max) {
      state.index = max;
    } else if (index < 0) {
      state.index = 0;
    } else {
      state.index = index;
    }
    return state;
  default:
    return state;
  }
};

export default reducer;