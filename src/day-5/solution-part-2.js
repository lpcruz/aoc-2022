const fs = require('fs');

const { 
    getCrates,
    getInstructions,
    move, 
} = require('./util');

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8'}).split('\n');
let crates = getCrates(input);
const instructions = getInstructions(input);

for (const instruction of instructions)
    crates = move(crates, instruction, isMovedAtOnce = true)

console.log (crates.map(x => x[x.length-1]).reduce((a,b) => a+b));
