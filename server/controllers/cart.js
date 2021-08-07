const { url, Atelier } = require('../lib/AtelierAPI');
let URL = url.cart;

module.exports = {
  list: (req, res) => {
    res.status(200).json('c/list');
  },
  add: (req, res) => {
    Atelier.post(URL, req.body)
      .then(response => res.status(response.status).json(response.data))
      .catch(err => res.status(404).send('Unable to add to cart at /cart'));
  },
};