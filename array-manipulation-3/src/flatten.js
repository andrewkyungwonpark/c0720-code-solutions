/* eslint-disable no-unused-vars */
function flatten(array) {
  const output = [];
  if (array.length === 1) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        output.push(array[i][j]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
