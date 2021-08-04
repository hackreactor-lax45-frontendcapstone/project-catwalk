const { app } = require('../server/index');
const request = require('supertest');

describe('Products endpoint', () => {

  it('GET /api/products', done => {
    request(app)
      .get('/api/products')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('p/list');
        done();
      });
  });

});

describe('Reviews endpoint', () => {

  it('GET /api/reviews', done => {
    request(app)
      .get('/api/reviews')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('r/list');
        done();
      });
  });

});

describe('Questions endpoint', () => {

  it('GET /api/questions', done => {
    request(app)
      .get('/api/questions')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('q/list');
        done();
      });
  });

  it('PUT /api/questions', done => {
    request(app)
      .put('/api/questions/q/helpful')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('q/helpful');
        done();
      });
  });

});

describe('Cart endpoint', () => {

  it('GET /api/cart', done => {
    request(app)
      .get('/api/cart')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('c/list');
        done();
      });
  });

});

describe('Interactions endpoint', () => {

  it('POST /api/interactions', done => {
    request(app)
      .post('/api/interactions')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual('i/add');
        done();
      });
  });

});