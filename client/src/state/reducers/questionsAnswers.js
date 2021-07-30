import Redux from 'redux';
/*
{
  questions,
  answers
}
*/
const initialState = {
  questions: {
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
  },
  answers: {
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
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case: 'QUESTION_ANSWER':

    default:
      return state;
  }
}