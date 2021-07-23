export default thumbnailIndex => {
  return dispatch => {
    dispatch({
      type: 'SELECT_THUMBNAIL',
      payload: thumbnailIndex
    });
  };
};