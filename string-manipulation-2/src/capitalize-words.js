/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  const lowerCase = string.toLowerCase();
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || lowerCase[i - 1] === ' ') {
      output += lowerCase[i].toUpperCase();
    } else {
      output += lowerCase[i];
    }
  }
  return output;
}
