export default (size, qty) => {
  let sizeSelectedFlag = size === '' ? false : true;
  return (dispatch) => {
    dispatch({
      type: 'SELECT_SIZE',
      payload: {
        size: size,
        qty: qty,
        isSizeSelected: sizeSelectedFlag,
      }
    })
  }
};
