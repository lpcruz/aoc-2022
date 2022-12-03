const fs = require('fs');

const { getPriority } = require('./getPriority');
const { sumItems } = require('./sumItems');

const strings = fs.readFileSync('input.txt', {encoding: 'utf-8'}).trim().split('\n');
const chunk = 3;
const chunks = strings.reduce((res, item, idx) => {
    const chunkIdx = Math.floor(idx/chunk);
    if (!res[chunkIdx]) res[chunkIdx] = [];
    res[chunkIdx].push(item);
    return res;
}, []);

// again, super dirty and naive
const grouped = chunks.map(chunk => chunk.map(string => [...string.split('')]));
const data = grouped.map(group => group.shift().filter(v => group.every(a => a.indexOf(v) !== -1)));
const commonLetters = data.map(set => [...new Set(set)][0]);
const priorities = commonLetters.map(getPriority);
console.log(sumItems(priorities));
