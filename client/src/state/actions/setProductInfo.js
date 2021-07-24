import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

const productQuery = (dispatch, product) => {
  if (product) {
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
  } else {
    console.warn('No Product ID entered into Product API request.');
  }
};

export default productQuery;