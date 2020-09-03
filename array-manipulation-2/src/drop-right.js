/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  const output = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array.length === 0) {
      return array;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
