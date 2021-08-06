import axios from 'axios';
import { url, config } from '../../lib/Server';

export default (dispatch, productID) => {

  console.log(`${config.baseURL}/${url.products}/${productID}`);
  let productResponse = axios.get(
    `${url.products}/${productID}`,
    config
  )
  .then(response => console.log(response))
  .catch(err => console.error('Yahtzee!', err));
  

  let stylesResponse = axios.get(
    `${url.products}/${productID}/styles`,
    config
  );
  console.log('before promise');
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
