export default (index, max, galleryWidth) => {
  return {
    type: 'SELECT_THUMBNAIL',
    payload: {
      index,
      max,
      galleryWidth,
    }
  };
};