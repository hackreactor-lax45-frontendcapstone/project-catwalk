import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

export default (dispatch, productID) => {
  const questionsQuery = axios({
    method: 'get',
    url: `${AtelierAPI.url}/qa/questions`,
    headers: AtelierAPI.headers
  });

  const answersQuery = axios({
    method: 'get',
    url: `${AtelierAPI.url}/qa/questions/${productID}/answers`,
    headers: AtelierAPI.headers
  });

  Promise.all([
    questionsQuery,
    answersQuery
  ])
    .then(info => {
      let [questions, answers] = info;
      dispatch({
        type: 'SELECT_PRODUCT',
        payload: {
          questions: questions.data,
          answers: answers.data
        }
      });
    })
    .catch(err => console.error(err));
}