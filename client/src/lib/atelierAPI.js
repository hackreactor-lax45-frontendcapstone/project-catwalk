const TOKEN = require('../config/config');
const SERVER = 'https://app-hrsei-api.herokuapp.com/api/fec2';
const CAMPUS = 'hr-lax';

module.exports = {
  url: `${SERVER}/${CAMPUS}`,
  headers: {
    Authorization: TOKEN
  }
};