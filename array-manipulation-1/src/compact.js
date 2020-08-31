/* eslint-disable no-unused-vars */
function compact(array) {
  const truthyArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
