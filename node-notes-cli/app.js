/* eslint-disable no-console */
const fs = require('fs');
const data = require('./data.json');

function err() {
  if (err) {
    return err;
  }
}

const readNote = () => {
  for (const property in data.notes) {
    console.log(`${property}: ${data.notes[property]}`);
  }
};

const createNote = () => {
  data.notes[data.nextId] = note;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err);
};

const updateNote = (note, newNote) => {
  data.notes[note] = newNote;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err);
};

const deleteNote = note => {
  delete data.notes[note];
  data.nextId--;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err);
};

const operator = process.argv[2];
const note = process.argv[3];
const newNote = process.argv[4];

switch (operator) {
  case 'create':
    createNote(note);
    break;
  case 'read':
    readNote();
    break;
  case 'update':
    updateNote(note, newNote);
    break;
  case 'delete':
    deleteNote(note);
    break;
}

// pseudo code
// for this CLI app, must be able to CRUD
// for each letter of CRUD takes a different function
// declare function for each
// each function must include an fs.writeFile method
// switch case for process.argv[2]
// remember to increment/decrement nextId
// iterate through property so i need to use for in loop
// require function on both fs and data.jason file
//
