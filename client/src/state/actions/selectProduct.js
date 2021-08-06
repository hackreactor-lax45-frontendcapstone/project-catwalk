import axios from 'axios';
import { url, config } from '../../lib/Server';

export default (dispatch, productID) => {

  let productResponse = axios.get(`/api/${url.products}/${productID}`);
  let stylesResponse = axios.get( `/api/${url.products}/${productID}/styles`);

  return Promise.all([
    productResponse,
    stylesResponse,
  ])
    .then(info => {
      console.log(info);
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
