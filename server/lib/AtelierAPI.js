const TOKEN = require('../config/config.js');
const SERVER = 'https://app-hrsei-api.herokuapp.com/api/fec2';
const CAMPUS = 'hr-lax';
const BASE_URL = `${SERVER}/${CAMPUS}`;

module.exports = {
  products: `${BASE_URL}/products`,
  reviews: `${BASE_URL}/reviews`,
  questions: `${BASE_URL}/qa/questions`,
  answers: `${BASE_URL}/qa/answers`,
  cart: `${BASE_URL}/cart`,
  interactions: `${BASE_URL}/interactions`,
  headers: {
    Authorization: TOKEN
  }
};