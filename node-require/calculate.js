/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[4]);
const operator = process.argv[3];
let result = 0;

switch (operator) {
  case 'plus':
    result = add(firstInt, secondInt);
    break;
  case 'minus':
    result = subtract(firstInt, secondInt);
    break;
  case 'times':
    result = multiply(firstInt, secondInt);
    break;
  case 'divided':
    result = divide(firstInt, secondInt);
    break;
}

console.log(`result: ${result}`);
