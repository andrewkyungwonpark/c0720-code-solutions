/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const name = takeAChance('Andrew');

name.then(resolve => {
  console.log(resolve);
}, reason => {
  console.error(reason.message);
});
