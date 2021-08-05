const axios = require('axios');

const API = require('../lib/AtelierAPI');
const QUESTIONS_URL = API.questions;
const ANSWERS_URL = API.answers;
const HEADERS = API.headers;

/* ======================
    /api/qa/questions
====================== */
module.exports = {
  list: (req, res) => {
    axios({
      url: `${QUESTIONS_URL}`,
      params: req.query,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve questions from \'/questions/list\'');
      });
  },
  answers: (req, res) => {
    axios({
      url: `${QUESTIONS_URL}/${req.params.question_id}/answers`,
      method: 'get',
      headers: HEADERS,
    })
      .then(response => {
        res.status(response.status).json(response.data);
      })
      .catch(err => {
        res.status(404).json('Unable to retrieve answers from \'/question/:question_id/answers\'');
      });
  },
  question: {
    ask: (req, res) => {
      axios({
        url: `${QUESTIONS_URL}`,
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
          res.status(404).json('Unable to mark review questions from \'/questions/:id/helpful\'');
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
          res.status(404).json('Unable to mark review questions from \'/questions/:id/report\'');
        });
    },
  },
  /* ======================
      /api/qa/answers
  ====================== */
  answer: {
    helpful: (req, res) => {
      res.status(200).json('a/helpful');
    },
    report: (req, res) => {
      res.status(200).json('a/report');
    },
  }
};