/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  return output;
}
