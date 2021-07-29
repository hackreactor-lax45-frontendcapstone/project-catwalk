/* eslint-disable camelcase */
import AtelierApi from '../../lib/atelierAPI';
import axios from 'axios';

export default (dispatch, productId) => {
  var reviewsQuery = axios({
    url: `${AtelierAPI.url}/reviews/`,
    method: 'get',
    headers: AtelierAPI.headers,
    params: {
      count: 2,
      sort: relevant,
      product_id: productId
    }
  });

  var metadataQuery = axios({
    url: `${AtelierAPI.url}/reviews/meta`,
    method: 'get',
    headers: AtelierAPI.headers,
    params: {
      product_id: productId
    }
  });

  Promise.all([
    reviewsQuery,
    metadataQuery
  ])
    .then(info => {
      let [reviews, metadata] = info;
      dispatch({
        type: 'SELECT_REVIEW',
        payload: {
          reviewInfo: reviews.data,
          metadataInfo: metadata.data
        }
      });
    })
    .catch(err => console.log(err));
};

