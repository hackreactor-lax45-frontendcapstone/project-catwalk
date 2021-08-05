const modalView = compare => ({
  type: 'MODAL_VIEW',
  payload: compare,
});

const defaultView = () => {
  return {
    type: 'DEFAULT_VIEW',
  };
};

const zoomView = () => {
  return {
    type: 'ZOOM_VIEW',
  };
};

export default { modalView, defaultView, zoomView };