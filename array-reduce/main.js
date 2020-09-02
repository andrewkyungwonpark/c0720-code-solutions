/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addAll = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(addAll);
console.log(sum);

const multiplyAll = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiplyAll);
console.log(product);

const addBalance = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else {
    return accumulator - currentValue.amount;
  }
};
const balance = account.reduce(addBalance, 0);
console.log(balance);

const properties = (accumulator, currentValue) => {
  return Object.assign(accumulator, currentValue);
};
const composite = traits.reduce(properties, {});
console.log(composite);
