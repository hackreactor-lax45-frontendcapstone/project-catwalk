import axios from 'axios';
import { url, config } from '../../lib/Server';

export default (dispatch, productID) => {
  config.url = `${url.products}/${productID}`;
  let productResponse = axios.get(
    `${url.products}/${productID}`,
    config
  );

  let stylesResponse = axios.get(
    `${url.products}/${productID}/styles`,
    config
  );

  return Promise.all([
    ,
    Server.instance.get(`${Server.URLs.products}/${productID}/styles`),
  ])
    .then(info => {
      let [productInfo, styleInfo] = info;
      Server.instance({
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