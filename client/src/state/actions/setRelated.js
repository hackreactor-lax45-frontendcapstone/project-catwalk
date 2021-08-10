import axios from 'axios';
import { url, config } from '../../lib/Server';
import _ from 'lodash';

export default (dispatch, productID) => {
  return axios.get(
    `${url.products}/${productID}/related`,
    config
  )
    .then(response => {
      return response.data;
    })
    .then(related => {

      var relatedProducts = _.map(related, (product, i) => {
        return axios.get(
          `${url.products}/${product}`,
          config
        )
          .then(response => response.data)
          .catch(err => { throw err; });
      });

      var relatedStyles = _.map(related, (product, i) => {
        return axios.get(
          `${url.products}/${product}/styles`,
          config
        )
          .then(response => response.data)
          .catch(err => { throw err; });
      });

      return Promise.all(relatedProducts.concat(relatedStyles))
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