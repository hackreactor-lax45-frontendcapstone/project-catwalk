import Redux from 'redux';

const initialState = {
  "question": '',
  "page": undefined,
  "count": undefined,
  "results": [
    {
      "answer_id": undefined,
      "body": '',
      "date": '',
      "answerer_name": '',
      "helpfulness": undefined,
      "photos": [],
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ANSWERS':
      return action.payload;
    default:
      return state;
  }
}