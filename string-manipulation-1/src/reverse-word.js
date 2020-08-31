/* eslint-disable no-unused-vars */
function reverseWord(word) {
  let output = '';
  for (let i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  return output;
}
