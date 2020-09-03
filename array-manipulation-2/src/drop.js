/* eslint-disable no-unused-vars */
function drop(array, count) {
  const output = [];
  for (let i = count; i < array.length; i++) {
    if (array.length === 0) {
      return array;
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
