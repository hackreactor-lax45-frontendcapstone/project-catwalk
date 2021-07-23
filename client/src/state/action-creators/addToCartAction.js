export default (product, style, size, quantity) => {
  return dispatch => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product, style, size, quantity
      }
    });
  };
};