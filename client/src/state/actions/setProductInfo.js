import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

const productQuery = (dispatch, product) => {
  axios({
    url: `${AtelierAPI.url}/products/${product}`,
    method: 'get',
    headers: AtelierAPI.headers,
  })
    .then(response => {
      dispatch({
        type: 'SET_PRODUCT_INFO',
        payload: response.data,
      });
    })
    .catch(err => console.error(err));
};

export default productQuery;