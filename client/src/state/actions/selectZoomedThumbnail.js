export default (index, max, galleryWidth) => {
  return {
    type: 'SELECTED_EXPANDED_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
    }
  };
};