/* eslint-disable no-unused-vars */
function difference(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i]) {
      if (!second.includes(first[i])) {
        output.push(first[i]);
      }
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (second[j]) {
      if (!first.includes(second[j])) {
        output.push(second[j]);
      }
    }
  }
  return output;
}
