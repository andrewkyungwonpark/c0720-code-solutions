/* eslint-disable no-unused-vars */
function zip(first, second) {
  const outerArr = [];
  let minimumLength;
  if (first.length <= second.length) {
    minimumLength = first.length;
  } else {
    minimumLength = second.length;
  }
  for (let i = 0; i < minimumLength; i++) {
    outerArr.push([first[i], second[i]]);
  }
  return outerArr;
}
