import AtelierAPI from '../../lib/atelierAPI';
import axios from 'axios';

export default (dispatch, productID) => {

  axios({
    url: `${AtelierAPI.url}/products/${productID}/related`,
    method: 'get',
    headers: AtelierAPI.headers,
  })
    .then(response => {
      dispatch({
        type: 'SET_RELATED',
        payload: {
          returned: true,
          products: response.data
        }
      });
    })
    .catch(err => console.error(err));
};