/* eslint-disable no-unused-vars */
function take(array, count) {
  const output = [];
  for (let i = 0; i < count; i++) {
    if (array.length === 0) {
      return array;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
