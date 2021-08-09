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
  .post('/', questions.ask)
  .post('/:question_id/answers', questions.answer);

router
  .put('/:question_id/helpful', questions.helpful)
  .put('/:question_id/report', questions.report);

module.exports = router;
