import Redux from 'redux';

// these are set in ImageGallery.css
const IMAGE_WIDTH = 140;
const IMAGE_HEIGHT = 90;
const BUFFER = 0;

const initialState = {
  index: 0,
  scrollLeft: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_THUMBNAIL':
    let { index, max, galleryWidth } = action.payload;

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
  default:
    return state;
  }
};

export default reducer;