import Redux from 'redux';

const initialState = {
  reviewInfo: {
    product: undefined,
    page: undefined,
    count: undefined,
    results: [
      {
        review_id: undefined,
        rating: undefined,
        summary: "",
        recommend: false,
        response: null,
        body: "",
        date: "",
        reviewer_name: "",
        helpfulness: undefined,
        photos: [{
          id: undefined,
          url: ""
        }
        ]
      }
    ]
  },
  metadataInfo: {
    product: undefined,
    page: undefined,
    count: undefined,
    results: [
      {
        review_id: undefined,
        rating: undefined,
        summary: "",
        recommend: false,
        response: null,
        body: "",
        date: "",
        reviewer_name: "",
        helpfulness: undefined,
        photos: [{
            id: undefined,
            url: ""
          }
        ]
      }
    ]
  }
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