/* eslint-disable no-unused-vars */
function union(first, second) {
  const output = [];
  for (let i = 0; i < first.length; i++) {
    output.push(first[i]);
  }
  for (let j = 0; j < second.length; j++) {
    if (!output.includes(second[j])) {
      output.push(second[j]);
    }
  }
  return output;
}
