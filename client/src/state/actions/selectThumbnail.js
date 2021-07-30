const defaultView = (index, max, galleryWidth) => {
  return {
    type: 'SELECT_DEFAULT_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
    }
  };
};

const expandedView = (index, max, galleryWidth) => {
  return {
    type: 'SELECTED_EXPANDED_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
    }
  };
};

export default { defaultView, expandedView };