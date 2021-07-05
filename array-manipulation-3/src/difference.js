/* eslint-disable no-unused-vars */
function difference(first, second) {
  const firstDiff = first.filter(element => !second.includes(element));
  const secondDiff = second.filter(element => !first.includes(element));
  return firstDiff.concat(secondDiff);
}
