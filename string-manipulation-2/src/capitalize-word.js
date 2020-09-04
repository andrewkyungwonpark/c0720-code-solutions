/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const output = '';
  const firstLetter = word[0].toUpperCase();
  let restOfWord = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      restOfWord += word[i].toLowerCase();
    } else {
      restOfWord += word[i];
    }
  }
  return firstLetter + restOfWord;
}
