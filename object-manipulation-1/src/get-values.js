/* eslint-disable no-unused-vars */
function getValues(object) {
  const output = [];
  for (const key in object) {
    output.push(object[key]);
  }
  return output;
}
