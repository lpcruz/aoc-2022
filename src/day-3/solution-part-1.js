const fs = require('fs');

const { getPriority } = require('./getPriority');
const { sumItems } = require('./sumItems');

function meets(a, b) {
    a = Array.from(new Set(a));
    b = Array.from(new Set(b));
    return Array.from(a.filter(v => b.includes(v)));
};

const strings = fs.readFileSync('input.txt', {encoding: 'utf-8'}).trim().split('\n')
const divide = list => {
    const half = Math.ceil(list.length / 2 );
    return {
        firstHalf: list.slice(0, half),
        secondHalf: list.slice(half),
    };
};
const data = strings.map(string => string.split('')).map(combination => divide(combination));
const commonLetter = data.map(({ firstHalf, secondHalf }) => meets(firstHalf, secondHalf).pop());
const priorities = commonLetter.map(getPriority);
console.log(sumItems(priorities));
