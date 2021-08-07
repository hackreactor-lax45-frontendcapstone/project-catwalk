import axios from 'axios';
import { url, Server } from '../../lib/Server';

export default (dispatch, productID) => {

  let productResponse = Server.get(`${url.products}/${productID}`);
  let stylesResponse = Server.get(`${url.products}/${productID}/styles`);

  return Promise.all([
    productResponse,
    stylesResponse,
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
