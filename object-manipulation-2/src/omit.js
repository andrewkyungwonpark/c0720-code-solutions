/* eslint-disable no-unused-vars */
function omit(source, keys) {
  const output = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      output[prop] = source[prop];
    }
  }
  return output;
}
