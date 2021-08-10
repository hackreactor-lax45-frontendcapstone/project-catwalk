import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

export default (dispatch, productID, page, count) => {
  axios({
    method: 'get',
    url: `${AtelierAPI.url}/qa/questions/`,
    headers: AtelierAPI.headers,
    params: {
      product_id: productID,
      page,
      count
    }
  })
    .then(res => {
      dispatch({
        type: 'GET_QUESTIONS',
        payload: res.data
      });
      return res.data;
    })
    .then(question => {
      question.results.map(q => {
        axios({
          method: 'get',
          url: `${AtelierAPI.url}/qa/questions/${q.question_id}/answers`,
          headers: AtelierAPI.headers,
          params: {
            page: 1,
            count: 2
          }
        })
          .then(res => dispatch({
            type: 'GET_ANSWERS',
            payload: res.data
          }))
      })
    })
    .catch(err => console.error(err));
};