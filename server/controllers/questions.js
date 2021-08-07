const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.questions;

const ERROR_MESSAGES = [
  'Unable to retrieve questions from \'/questions/list\'',
  'Unable to retrieve answers from \'/question/:question_id/answers\'',
  '',
  '',
  '',
  '',
];

/* ======================
    /api/qa/questions
====================== */
module.exports = {
  /* - - - - -
      get
   - - - - - */
  list: (req, res) => {
    Atelier.get(URL, { params: req.query })
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[0]));
  },
  answers: (req, res) => {
    Atelier.get(`${URL}/${req.params.question_id}/answers`, { params: req.query })
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[1]));
  },
  /* - - - - -
      post
   - - - - - */
  ask: (req, res) => {
    Atelier.post(URL, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[2]));
  },
  answer: (req, res) => {
    Atelier.post(`${URL}/${req.params.question_id}/answers`, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[3]));
  },
  /* - - - - -
      put
   - - - - - */
  helpful: (req, res) => {
    Atelier.put(`${URL}/${req.params.question_id}/helpful`, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[4]));
  },
  report: (req, res) => {
    Atelier.put(`${URL}/${req.params.question_id}/report`, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).json(ERROR_MESSAGES[5]));
  },
};
