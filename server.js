'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({"message": "thanks"});
})

app.get('/data', (req, res) => {
  const Person = {
    fName: 'Robert',
    lName: 'Frost',
  }

  res.status(200).send(Person);
})

module.exports = app;
