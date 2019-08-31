const request = require('supertest');
const assert = require('supertest');
const app = require('../../app');

// 200 - Ok
request(app)
  .get('/weather/Buenos Aires')
  .expect('Content-Type', /json/)
  .expect(200)
  .then(response => {
    assert(response.body.city.name, 'Buenos Aires')
}
);

// 404 - Not Found
request(app)
  .get('/weather/Prueba')
  .expect('Content-Type', /json/)
  .expect(200)
  .then(response => {
    assert(response.body.cod, '404')
});