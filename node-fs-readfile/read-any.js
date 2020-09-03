/* eslint-disable no-console */
const fs = require('fs');

const newFile = process.argv[2];

fs.readFile('../node-fs-readfile/' + newFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
