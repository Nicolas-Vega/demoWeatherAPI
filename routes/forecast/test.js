const request = require('supertest');
const assert = require('supertest');
const app = require('../../app');

// 200 - Ok
request(app)
  .get('/v1/forecast/Buenos Aires')
  .expect('Content-Type', /json/)
  .expect(200)
  .then(response => {
    assert(response.body.city.name, 'Buenos Aires')
}
);

// 404 - Not Found
request(app)
  .get('/v1/forecast/Prueba')
  .expect('Content-Type', /json/)
  .expect(404)
  .then(response => {
    assert(response.body.cod, '404')
});