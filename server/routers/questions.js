const express = require('express');
const router = express.Router();

const questions = require('../controllers/questions');

router
  .get('/', questions.list)
  .get('/answers', questions.answers);

router
  .post('/q/ask', questions.question.ask)
  .post('/q/answer', questions.question.answer);

router
  .put('/q/helpful', questions.question.helpful)
  .put('/q/report', questions.question.report);

router
  .put('/a/helpful', quetsions.answer.helpful)
  .put('/a/report', questions.answer.report);

export default router;
