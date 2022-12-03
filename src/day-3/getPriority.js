const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upper = alpha.map((x) => String.fromCharCode(x));
const lower = upper.map(letter => letter.toLowerCase());
const priorityMap = [...lower, ...upper].map((letter, idx) => ({ letter, priority: idx + 1 }));

// super dirty, I don't like this but it's how my brain was working at the time.
function getPriority(letter) {
    const found = priorityMap.filter(pair => Object.keys(pair).find(key => pair[key] === letter))[0];
    const { priority } = found;
    return priority;
}

module.exports = {
   getPriority
}
