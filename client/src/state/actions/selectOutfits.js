const addOutfit = outfit => ({
  type: 'ADD_OUTFIT',
  payload: outfit,
});

const removeOutfit = outfitIndex => ({
  type: 'REMOVE_OUTFIT',
  payload: outfitIndex,
});

export default { addOutfit, removeOutfit };