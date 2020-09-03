/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const lastElement = output[output.length - 1];
    if (!lastElement || lastElement.length === size) {
      output.push([array[i]]);
    } else {
      lastElement.push(array[i]);
    }
  }
  return output;
}
