import { url, Server } from '../../lib/Server';
const URL = url.questions;

export default (dispatch, product_id, page, count) => {
  Server.get(URL, { params: {
    product_id, page, count,
  }})
    .then(res => {
      dispatch({
        type: 'GET_QUESTIONS',
        payload: res.data
      });
      return res.data;
    })
    .then(question => {
      question.results.map(q => {
        Server.get(`${URL}/${q.question_id}/answers`, { params: {
          page: 1, count: 2,
        }})
          .then(res => dispatch({
            type: 'GET_ANSWERS',
            payload: res.data
          }));
      });
    })
    .catch(err => console.error(err));
};