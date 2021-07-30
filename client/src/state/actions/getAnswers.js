import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

export default (dispatch, questionID, page, count) => {
  axios({
    method: 'get',
    url: `${AtelierAPI.url}/qa/questions/${questionID}/answers`,
    headers: AtelierAPI.headers,
    params: {
      page,
      count
    }
  })
    .then(info => {
      dispatch({
        type: 'GET_ANSWERS',
        payload: info.data
      });
    })
    .catch(err => console.error(err));
};