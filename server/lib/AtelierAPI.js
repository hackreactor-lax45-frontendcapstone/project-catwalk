const fs = require('fs');
const path = require('path');
const axios = require('axios');

let TOKEN;
const config = '../config/config.js';
if (fs.existsSync(path.join(__dirname, config))) {
  TOKEN = require(config)
} else {
  console.error('Valid token not file found!');
  TOKEN = require('../config/example.config.js')
}

const SERVER = 'https://app-hrsei-api.herokuapp.com/api/fec2';
const CAMPUS = 'hr-lax';
const BASE_URL = `${SERVER}/${CAMPUS}`;

const url = {
  products: 'products',
  reviews: 'reviews',
  questions: 'qa/questions',
  answers: 'qa/answers',
  cart: 'cart',
  interactions: 'interactions',
}

const Atelier = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: TOKEN
  }
});

module.exports = { url, Atelier };