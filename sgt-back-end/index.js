const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = parseInt(req.body.grade, 10);
  const name = req.body.name;
  const course = req.body.course;
  if (!name || !course || !Number.isInteger(grade) || grade <= 0) {
    return res.status(400).json({
      error: 'Submission must contain valid name/course/positive integer!'
    });
  }
  const sql = `
    insert into
      "grades" ("name", "course", "grade")
      values ($1, $2, $3)
      returning*
  `;
  const params = [
    name,
    course,
    grade
  ];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(grade);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const grade = parseInt(req.body.grade, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0 || !Number.isInteger(grade) || grade <= 0) {
    return res.status(400).json({
      error: '"gradeId" and "grade" must be a positive integers'
    });
  }
  const sql = `
    update
      "grades"
      set "grade" = $2
      where "gradeId" = $1
    returning*
  `;
  const params = [gradeId, grade];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
     returning*
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000!');
});
