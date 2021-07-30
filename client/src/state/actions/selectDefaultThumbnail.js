export default (index, max, galleryWidth) => {
  return {
    type: 'SELECT_DEFAULT_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
    }
  };
};