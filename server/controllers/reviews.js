const express = require('express');
const router = express.Router();

module.exports = {
  list: (req, res) => {
    res.status(200).json('r/list');
  },
  meta: (req, res) => {
    res.status(200).json('r/meta');
  },
  create: (req, res) => {
    res.status(200).json('r/create');
  },
  helpful: (req, res) => {
    res.status(200).json('r/helpful');
  },
  report: (req, res) => {
    res.status(200).json('r/report');
  },
};