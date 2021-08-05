const axios = require('axios');

const API = require('../lib/AtelierAPI');
const QUESTIONS_URL = API.questions;
const ANSWERS_URL = API.answers;
const HEADERS = API.headers;

module.exports = {
  /* ======================
      /api/qa/questions
  ====================== */
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
        res.status(404).json('Unable to retrieve reviews from \'/reviews/list\'');
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
        res.status(404).json('Unable to retrieve reviews from \'/reviews/list\'');
      });
  },
  question: {
    ask: (req, res) => {
      res.status(200).json('q/ask');
    },
    answer: (req, res) => {
      res.status(200).json('q/answer');
    },
    helpful: (req, res) => {
      res.status(200).json('q/helpful');
    },
    report: (req, res) => {
      res.status(200).json('q/report');
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