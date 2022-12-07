const fs = require('fs');

const { isUnique } = require('./isUnique');

const bufferStream = fs.readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, "")
  .trim();

const windowLength = 14;
let window = [];
for (let i = 0; i < bufferStream.length; i++) {
    window.push(bufferStream[i]);
    if (window.length > windowLength) {
        window.shift();
    }
    if (window.length === windowLength && isUnique(window)) {
      console.log(i + 1);
      break;
    }
}
