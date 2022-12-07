const fs = require('fs');

const bufferStream = fs.readFileSync('input.txt', { encoding: 'utf-8' })
  .replace(/\r/g, "")
  .trim();

  