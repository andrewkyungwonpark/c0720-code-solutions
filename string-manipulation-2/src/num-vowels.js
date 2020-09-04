/* eslint-disable no-unused-vars */
function numVowels(string) {
  let counter = 0;
  const comparison = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (comparison[i] === 'a' || comparison[i] === 'e' || comparison[i] === 'i' || comparison[i] === 'o' || comparison[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
