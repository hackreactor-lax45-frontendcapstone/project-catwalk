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
    .then(info => {
      dispatch({
        type: 'GET_QUESTIONS',
        payload: questions: info.data
      })
    })
    .catch(err => console.error(err));
}