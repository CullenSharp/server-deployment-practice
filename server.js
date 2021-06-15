'use strict';

const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
})

app.get('/data', (req, res) => {
  const person = {
    fName: 'Robert',
    lName: 'Frost',
  }

  res.status(200).send(person);
})

module.exports = app;
