const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.questions;

const ERROR_MESSAGES = [
  'Unable to retrieve questions from \'/questions/list\'',
  'Unable to retrieve answers from \'/question/:question_id/answers\'',
  '',
  '',
  '',
  '',
  '',
  '',
];

/* ======================
    /api/qa/questions
====================== */
module.exports = {
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
  question: {
    ask: (req, res) => {
      Atelier.post(URL, req.body)
        .then(response => res.status(response.status).json(response.data))
        .catch(err => res.status(404).json(ERROR_MESSAGES[2]));
    },
    answer: (req, res) => {
      axios({
        url: `${QUESTIONS_URL}/${req.params.question_id}/answers`,
        method: 'post',
        data: req.body,
        headers: HEADERS,
      })
        .then(response => {
          res.status(response.status).json(response.data);
        })
        .catch(err => {
          res.status(404).json('Unable to ask a new question \'/questions\'');
        });
    },
    helpful: (req, res) => {
      axios({
        url: `${QUESTIONS_URL}/${req.params.question_id}/helpful`,
        method: 'put',
        headers: HEADERS,
      })
        .then(response => {
          res.status(response.status).json(response.data);
        })
        .catch(err => {
          res.status(404).json('Unable to mark question helpful from \'/questions/:id/helpful\'');
        });
    },
    report: (req, res) => {
      axios({
        url: `${QUESTIONS_URL}/${req.params.question_id}/report`,
        method: 'put',
        headers: HEADERS,
      })
        .then(response => {
          res.status(response.status).json(response.data);
        })
        .catch(err => {
          res.status(404).json('Unable to report question from \'/questions/:id/report\'');
        });
    },
  },
  /* ======================
      /api/qa/answers
  ====================== */
  answer: {
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
  }
};