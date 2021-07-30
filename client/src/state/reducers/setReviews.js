import Redux from 'redux';

const initialState = {
  reviewInfo: {},
  metadataInfo: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_REVIEW':
    return {
      reviewInfo: action.payload.reviewInfo,
      metadataInfo: action.payload.metadataInfo
    };
  default:
    return state;
  }
};

export default reducer;