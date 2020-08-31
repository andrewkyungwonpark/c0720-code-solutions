/* eslint-disable no-unused-vars */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return firstLetter + restOfWord;
}
