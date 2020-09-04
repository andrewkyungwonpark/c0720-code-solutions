/* eslint-disable no-unused-vars */
function ransomCase(string) {
  let output = '';
  const lowerCase = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      output += lowerCase[i].toUpperCase();
    } else {
      output += lowerCase[i];
    }
  }
  return output;
}
