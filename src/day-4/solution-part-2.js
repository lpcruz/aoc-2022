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
    const isOverlapping = sectionOne[1] >= sectionTwo[0] && sectionTwo[1] >= sectionOne[0];
    return { sectionOne, sectionTwo, isOverlapping };
});
const count = sectionAssignments.filter(assignment => assignment.isOverlapping === true).length;
console.log(count);
