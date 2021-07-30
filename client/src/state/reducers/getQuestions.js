import Redux from 'redux';

const initialState = {
  "product_id": "5",
  "results": [{
        "question_id": undefined,
        "question_body": '',
        "question_date": '',
        "asker_name": '',
        "question_helpfulness": undefined,
        "reported": null,
        "answers": {
          '': {
            "id": undefined,
            "body": '',
            "date": '',
            "answerer_name": '',
            "helpfulness": undefined,
            "photos": []
          }
        }
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return action.payload;
    default:
      return state;
  }
}