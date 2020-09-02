/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
console.log(doubled);

const prices = numbers.map(x => '$' + x.toFixed(2));
console.log(prices);

const upperCased = languages.map(word => word.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(word => word[0]);
console.log(firstLetters);
