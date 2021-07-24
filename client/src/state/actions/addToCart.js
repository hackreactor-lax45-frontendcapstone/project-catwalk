export default (product, style, size, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      product, style, size, quantity
    }
  };
};