'use strict';

const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.status(200).send('Hello World! <br/> This is Project 01');
});

app.listen(3000);