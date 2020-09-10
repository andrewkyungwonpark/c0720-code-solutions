const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Mario',
    course: 'Jumping',
    grade: '90'
  },
  {
    id: 2,
    name: 'Luigi',
    course: 'Fireballing',
    grade: '94'
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === parseInt(req.params.id)) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
