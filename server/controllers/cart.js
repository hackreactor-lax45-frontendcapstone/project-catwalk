const express = require('express');
const router = express.Router();

module.exports = {
  list: (req, res) => {
    res.status(200).json('c/list');
  },
  add: (req, res) => {
    res.status(200).json('c/add');
  },
};