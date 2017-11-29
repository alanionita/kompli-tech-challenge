/* eslint-disable no-underscore-dangle */

process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const { describe, it } = require('mocha');
const request = require('supertest');
const server = require('../server');

describe('POST /span', () => {
  it('responds with status code 200 & returns found', (done) => {
    request(server)
      .post('/scrape')
      .send({ email: 'contact@ao.com' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.foundContent).to.be.an('object');
        done();
      });
  });
});
