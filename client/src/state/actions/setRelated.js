import AtelierAPI from '../../lib/atelierAPI';
import axios from 'axios';
import _ from 'lodash';

export default (dispatch, productID) => {

  axios({
    url: `${AtelierAPI.url}/products/${productID}/related`,
    method: 'get',
    headers: AtelierAPI.headers,
  })
    .then(response => {
      return response.data;
    })
    .then(related => {
      var relatedProducts = _.map(related, (product, i) => {
        return axios({
          url: `${AtelierAPI.url}/products/${product}`,
          method: 'get',
          headers: AtelierAPI.headers,
        })
          .then(response => response.data)
          .catch(err => { throw err; });
      });

      var relatedStyles = _.map(related, (product, i) => {
        return axios({
          url: `${AtelierAPI.url}/products/${product}/styles`,
          method: 'get',
          headers: AtelierAPI.headers,
        })
          .then(response => response.data)
          .catch(err => { throw err; });
      });

      Promise.all(relatedProducts.concat(relatedStyles))
        .then(info => {
          let productInfo = info.slice(0, info.length / 2);
          let styleInfo = info.slice(info.length / 2);

          dispatch({
            type: 'SET_RELATED',
            payload: {
              returned: true,
              ids: related,
              products: productInfo,
              styles: styleInfo,
            }
          });
        })
        .catch(err => { throw err; });
    })
    .catch(err => console.error(err));
};