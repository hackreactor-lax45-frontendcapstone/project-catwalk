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
      var relatedStyles = _.map(related, (product, i) => {
        return axios({
          url: `${AtelierAPI.url}/products/${product}/styles`,
          method: 'get',
          headers: AtelierAPI.headers,
        })
          .then(response => response.data)
          .catch(err => { throw err; });
      });

      Promise.all(relatedStyles)
        .then(styles => {
          dispatch({
            type: 'SET_RELATED',
            payload: {
              returned: true,
              products: related,
              styles: styles,
            }
          });
        })
        .catch(err => { throw err; });
    })
    .catch(err => console.error(err));
};