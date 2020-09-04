/* eslint-disable no-console */
const library = [
  {
    title: 'A Song of Ice and Fire',
    author: 'George RR Martin',
    isbn: 1234
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    isbn: 5678
  },
  {
    title: 'The Lion, the Witch, and the Wardrobe',
    author: 'CS Lewis',
    isbn: 9012
  }

];

console.log(JSON.stringify(library));
console.log(typeof JSON.stringify(library));

const student = '{"Student Name": "Doug Dimmadome", "Number ID": "1234"}';

console.log(JSON.parse(student));
console.log(typeof JSON.parse(student));
