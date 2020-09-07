/* eslint-disable no-unused-vars */
function invert(source) {
  const output = {};
  for (const prop in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(prop)) {
      output[source[prop]] = prop;
    }
  }
  return output;
}
