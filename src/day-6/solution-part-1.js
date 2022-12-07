const fs = require('fs');

const { isUnique } = require('./isUnique');

const bufferStream = fs.readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim();

let window = [];
for (let i = 0; i < bufferStream.length; i++) {
    window.push(bufferStream[i]);
    if (window.length > 4) {
        window.shift();
    }
    if (window.length === 4 && isUnique(window)) {
        console.log(i + 1);
        break;
    }
}
