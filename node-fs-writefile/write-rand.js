const fs = require('fs');

fs.writeFile('random.txt', Math.random(), (err, data) => {
  if (err) throw err;
  Math.random();
});
