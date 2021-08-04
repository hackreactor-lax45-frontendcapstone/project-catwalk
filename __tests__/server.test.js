const { app } = require('../server/index');
const request = require('supertest');
const mockData = require('../data/index').products;

const PRODUCT = 16060;

describe.only('Products endpoint', () => {

  it('GET /api/products/list', done => {
    request(app)
      .get('/api/products/list')
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.length).not.toEqual(0);
        expect(data[0].id).toEqual(16056);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id', done => {
    request(app)
      .get(`/api/products/${PRODUCT}`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.id).toEqual(mockData.info.id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id/styles', done => {
    request(app)
      .get(`/api/products/${PRODUCT}/styles`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.results.length).not.toEqual(0);
        expect(data.results[0].style_id).toEqual(mockData.styles.results[0].style_id);
      })
      .catch(err => console.error(err))
      .finally(() => done());
  });

  it('GET /api/products/:product_id/related', done => {
    request(app)
      .get(`/api/products/${PRODUCT}/related`)
      .expect(200)
      .then(response => {
        let data = response.body;
        expect(data.length).not.toEqual(0);
        expect(data[0]).toEqual(mockData.related[0]);
      })
      .catch(err => console.error(err))
      .finally(() => done());
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