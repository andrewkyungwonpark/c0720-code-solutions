/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');

const app = express();

const joinPublic = path.join(__dirname, 'public');

const staticPublic = app.use(express.static('public'));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
