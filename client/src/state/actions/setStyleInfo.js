import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

const styleQuery = (dispatch, product) => {
  axios({
    url: `${AtelierAPI.url}/products/${product}/styles`,
    method: 'get',
    headers: AtelierAPI.headers,
  })
    .then(response => {
      dispatch({
        type: 'SET_STYLE_INFO',
        payload: response.data,
      });
    })
    .catch(err => console.error(err));
};

export default styleQuery;