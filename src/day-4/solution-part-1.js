const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8')
    .replace(/\r/g, '')
    .trim()
    .split('\n');
const sectionAssignments = data.map(entry => {
    const [sectionOne,sectionTwo] = entry
    .split(',')
    .map(interval => interval.split('-').map(Number))
    .sort((a,b) => (b[1]-b[0]) - (a[1] - a[0]));
    const isFullyContained = sectionOne[0] <= sectionTwo[0] && sectionOne[1] >= sectionTwo[1];
    return { sectionOne, sectionTwo, isFullyContained };
});
const count = sectionAssignments.filter(assignment => assignment.isFullyContained === true).length;
console.log(count);
