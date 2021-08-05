import axios from 'axios';
// import AtelierAPI from '../../lib/atelierAPI';
import Server from '../../lib/Server';

export default (dispatch, productID) => {
  return Promise.all([
    axios.get(`${Server.products}/${productID}`),
    axios.get(`${Server.products}/${productID}/styles`),
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