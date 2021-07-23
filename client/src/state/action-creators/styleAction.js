export default styleIndex => {
  return dispatch => {
    dispatch({
      type: 'SELECT_STYLE',
      payload: styleIndex
    });
  };
};