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



// in another file

// export default (isOutOfStock) => {
//   dispatch({
//     type: 'OUT_OF_STOCK',
//     payload: isOutOfStock,
//   })
// }