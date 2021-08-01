const defaultView = (index, max, galleryWidth, IMAGE_WIDTH) => {
  return {
    type: 'SELECT_DEFAULT_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
      IMAGE_WIDTH,
    }
  };
};

const expandedView = (index, max, galleryWidth, IMAGE_WIDTH) => {
  return {
    type: 'SELECTED_EXPANDED_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
      IMAGE_WIDTH,
    }
  };
};

export default { defaultView, expandedView };