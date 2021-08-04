const express = require('express');
const router = express.Router();

const interactions = require('../controllers/interactions');

router
  .post('/', interactions.add);

module.exports = router;
