/* eslint-disable no-unused-vars */
function unique(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}
