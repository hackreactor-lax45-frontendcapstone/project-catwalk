const axios = require('axios');

const API = require('../lib/AtelierAPI');
const URL = API.reviews;
const HEADERS = API.headers;

/*
    /api/reviews
*/
module.exports = {
  list: (req, res) => {
    axios({
      url: `${URL}`,
      params: req.query,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve reviews from \'/reviews/list\'');
      });
  },
  meta: (req, res) => {
    axios({
      url: `${URL}/meta`,
      params: req.query,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve review metadata from \'/reviews/meta\'');
      });
  },
  create: (req, res) => {
    axios({
      url: `${URL}`,
      method: 'post',
      data: req.body,
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to create new post at \'/reviews\'');
      });
  },
  helpful: (req, res) => {
    axios({
      url: `${URL}/${req.query.review_id}/helpful`,
      method: 'put',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to mark review helpful from \'/reviews/:id/helpful\'');
      });
  },
  report: (req, res) => {
    axios({
      url: `${URL}/${req.query.review_id}/report`,
      method: 'put',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to report view from \'/reviews/:id/report\'');
      });
  },
};