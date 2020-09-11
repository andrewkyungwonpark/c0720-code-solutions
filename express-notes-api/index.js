const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const id in data.notes) {
    const note = data.notes[id];
    notes.push(note);
  }
  if (notes.length === 0) {
    return [];
  } else {
    res.status(200).json(notes);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (!Number.isInteger(userId) || userId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  const note = data.notes[userId];

  if (typeof note === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id ${userId}`
    });
    return;
  }
  res.json(note);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {

  if (!req.body.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  const note = {
    id: data.nextId,
    content: req.body.content
  };
  data.notes[data.nextId] = note;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile('./data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
      return;
    }

    res.status(201).json(note);
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);

  if (!Number.isInteger(userId) || userId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (typeof data.notes[userId] === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id ${userId}`
    });
    return;
  }

  delete data.notes[userId];

  const json = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
      return;
    }
    res.sendStatus(204);
  });

});

app.put('/api/notes/:id', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  const userId = parseInt(req.params.id, 10);
  if (!Number.isInteger(userId) || userId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  data.notes[userId].content = req.body.content;

  const json = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
      return;
    }

    res.status(200).json(data.notes[userId]);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000');
});
