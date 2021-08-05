import Redux from 'redux';

const initialState = {
  "product_id": "",
  "results": [{
        "question_id": 0,
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
    case 'GET_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
}