const upper = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
const lower = upper.map(letter => letter.toLowerCase());
const letters = [...lower, ...upper];
const getPriority = (letter) => letters.indexOf(letter) + 1;

module.exports = {
   getPriority,
   upper,
   lower,
}
