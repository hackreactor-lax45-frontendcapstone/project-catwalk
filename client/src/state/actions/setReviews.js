/* eslint-disable camelcase */
import AtelierAPI from '../../lib/atelierAPI';
import axios from 'axios';

export default (dispatch, productId, pageNumber, countNumber, sortMethod) => {
  var reviewsQuery = axios({
    url: `${AtelierAPI.url}/reviews/`,
    method: 'get',
    headers: AtelierAPI.headers,
    params: {
      page: pageNumber,
      count: countNumber,
      sort: sortMethod,
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
    .catch(err => console.error(err));
};

