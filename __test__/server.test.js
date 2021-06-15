'use strict';

const server = require('../server');
const supertest = require('supertest');

const request = supertest(server);

describe('Express server', () => {
  test('Should return `ping` on GET to /pong', async () => {
    const response = await request.get('/ping');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('pong');
  })

  test('Should return `fName` and `lName` on GET to /data', async () => {
    const response = await request.get('/data');

    expect(response.status).toEqual(200);
    expect(response.body.fName).toEqual('Robert');
    expect(response.body.lName).toEqual('Frost');
  })
})
