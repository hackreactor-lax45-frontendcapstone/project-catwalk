const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.reviews;

const ERROR_MESSAGES = [
  '',
  '',
  '',
  '',
];

/* ======================
    /api/reviews
====================== */
module.exports = {
  list: (req, res) => {
    Atelier.get(URL, { params: req.query })
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[0]));
  },
  meta: (req, res) => {
    Atelier.get(`${URL}/meta`, { params: req.query })
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[1]));
  },
  create: (req, res) => {
    Atelier.post(URL, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[2]));
  },
  helpful: (req, res) => {
    Atelier.put(`${URL}/${req.params.review_id}/helpful`, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[3]));

    // axios({
    //   url: `${URL}/${req.params.review_id}/helpful`,
    //   method: 'put',
    //   headers: HEADERS,
    // })
    //   .then(response => {
    //     res.status(response.status).json(response.data);
    //   })
    //   .catch(err => {
    //     res.status(404).json('Unable to mark review helpful from \'/reviews/:id/helpful\'');
    //   });
  },
  report: (req, res) => {
    Atelier.put(`${URL}/${req.params.review_id}/report`)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[4]));

    // axios({
    //   url: `${URL}/${req.params.review_id}/report`,
    //   method: 'put',
    //   headers: HEADERS,
    // })
    //   .then(response => {
    //     res.status(response.status).json(response.data);
    //   })
    //   .catch(err => {
    //     res.status(404).json('Unable to report view from \'/reviews/:id/report\'');
    //   });
  },
};