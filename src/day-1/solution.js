const fs = require('fs');

const data = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n\n').map(elf => elf.split('\n').map(n => Number(n)));
const calories = data.map(elf => elf.reduce((prev, cur) => prev + cur));
const max = Math.max(...calories);
const topThree = sumCalories.sort((a,b) => b-a).slice(0,3).reduce((prev,cur) => prev + cur);
console.log({ max, topThree });
