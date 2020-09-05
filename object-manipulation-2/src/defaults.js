/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (const prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
}
