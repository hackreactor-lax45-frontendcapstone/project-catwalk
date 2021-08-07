const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.answers;

const ERROR_MESSAGES = [
  '',
  '',
];

/* ======================
    /api/qa/answers
====================== */
module.exports = {
  helpful: (req, res) => {
    axios({
      url: `${QUESTIONS_URL}/${req.params.answer_id}/helpful`,
      method: 'put',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to mark answer helpful from \'/questions/:id/helpful\'');
      });
  },
  report: (req, res) => {
    axios({
      url: `${QUESTIONS_URL}/${req.params.answer_id}/report`,
      method: 'put',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to report answer from \'/questions/:id/helpful\'');
      });
  },
};