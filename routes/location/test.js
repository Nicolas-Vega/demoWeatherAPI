const request = require('supertest');
const assert = require('supertest');
const app = require('../../app');

// 200 - Ok
request(app)
  .get('/location')
  .expect('Content-Type', /json/)
  .expect(200)
  .then(response => {
    assert(response.body.location.region, 'Buenos Aires')
}
);
/*
// 404 - Not Found
request(app)
  .get('/location')
  .expect('Content-Type', /json/)
  .expect(404)
  .then(response => {
    assert(response.body.cod, '404')
});*/