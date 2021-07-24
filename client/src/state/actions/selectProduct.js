import axios from 'axios';
import AtelierAPI from '../../lib/atelierAPI';

export default (dispatch, productID) => {

  var productQuery = axios({
    url: `${AtelierAPI.url}/products/${productID}`,
    method: 'get',
    headers: AtelierAPI.headers,
  });

  var styleQuery = axios({
    url: `${AtelierAPI.url}/products/${productID}/styles`,
    method: 'get',
    headers: AtelierAPI.headers,
  });

  Promise.all([
    productQuery,
    styleQuery,
  ])
    .then(info => {
      let [productInfo, styleInfo] = info;
      dispatch({
        type: 'SELECT_PRODUCT',
        payload: {
          productID,
          productInfo: productInfo.data,
          styleInfo: styleInfo.data,
        }
      });
    })
    .catch(err => console.error(err));
};