export default quantity => {
  return dispatch => {
    dispatch({
      type: 'SELECT_QUANTITY',
      payload: quantity
    });
  };
};