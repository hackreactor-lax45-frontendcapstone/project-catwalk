const addOutfit = outfit => ({
  type: 'ADD_OUTFIT',
  payload: outfit,
});

const removeOutfit = outfit => ({
  type: 'REMOVE_OUTFIT',
  payload: outfit,
});

export default { addOutfit, removeOutfit };