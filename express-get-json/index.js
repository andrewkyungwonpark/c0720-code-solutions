const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Uzair',
    course: 'Teaching',
    grade: '420'
  },
  {
    id: 2,
    name: 'Cody',
    course: 'Teaching',
    grade: '420'
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
