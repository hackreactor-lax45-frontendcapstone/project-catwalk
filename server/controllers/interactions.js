const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.interactions;

const ERROR_MESSAGES = [
  'Unable to send to interactions endpoint \'/interactions\''
];

/* ======================
    /api/interactions
====================== */
module.exports = {
  add: (req, res) => {
    Atelier.post(URL, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).send(ERROR_MESSAGES[0]));
  },
};

