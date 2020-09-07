/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const output = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      output[prop] = source[prop];
    }
  }
  return output;
}
