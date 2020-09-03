/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  if (array.length === 0) {
    return array;
  }
  const output = [];
  for (let i = array.length - count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
