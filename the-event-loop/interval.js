/* eslint-disable no-console */
let count = 3;

const countdown = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
