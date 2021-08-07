const express = require('express');
const router = express.Router();

const questions = require('../controllers/questions');

/*
    /api/qa/questions
*/
router
  .get('/', questions.list)
  .get('/:question_id/answers', questions.answers);

router
  .post('/', questions.question.ask)
  .post('/:question_id/answers', questions.question.answer);

router
  .put('/:question_id/helpful', questions.question.helpful)
  .put('/:question_id/report', questions.question.report);

router
  .put('/:answer_id/helpful', questions.answer.helpful)
  .put('/:answer_id/report', questions.answer.report);

module.exports = router;
