export default (size) => {
  return (dispatch) => {
    dispatch({
      type: 'SELECT_SIZE',
      payload: size
    })
  }
};

// return {
//   type: 'SELECT_SIZE',
//   payload: size
// };