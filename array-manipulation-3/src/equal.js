/* eslint-disable no-unused-vars */
function equal(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
// loop through first array to compare to second array index
// if they are equal then keep going
// if they are not, then return false
