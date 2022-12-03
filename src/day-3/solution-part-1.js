const fs = require('fs');

const { getPriority } = require('./getPriority');

const strings = fs.readFileSync('input.txt', {encoding: 'utf-8'}).trim().split('\n')
const divide = list => {
    const half = Math.ceil(list.length / 2 );
    return {
        firstHalf: list.slice(0, half),
        secondHalf: list.slice(half),
    };
};
const data = strings.map(string => string.split('')).map(combination => divide(combination));

// compare the first and second halves and map them to a single list
const commonLetters = data.map(set => {
    const { firstHalf, secondHalf } = set;
    const common = [...new Set (firstHalf.filter(value => secondHalf.includes(value)))].pop();
    return common;
});

// get priority and sum them all up
const priorities = commonLetters.map(getPriority);
const sum = priorities.reduce((a, b) => a + b, 0);
console.log(sum);
