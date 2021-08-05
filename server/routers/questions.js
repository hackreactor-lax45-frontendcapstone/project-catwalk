const express = require('express');
const router = express.Router();

const questions = require('../controllers/questions');

/*
    /api/qa/questions
*/
router
  .get('/list', questions.list)
  .get('/:question_id/answers', questions.answers);

router
  .post('/ask', questions.question.ask)
  .post('/:question_id/answer', questions.question.answer);

router
  .put('/q/:question_id/helpful', questions.question.helpful)
  .put('/q/:question_id/report', questions.question.report);

router
  .put('/a/:answer_id/helpful', questions.answer.helpful)
  .put('/a/:answer_id/report', questions.answer.report);

module.exports = router;
