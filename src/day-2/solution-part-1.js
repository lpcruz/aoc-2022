const fs = require('fs');

const rounds = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/g).map(line => line.split(' '));
const MAP = {
	'A': 'rock',
	'X': 'rock',
	'B': 'paper',
	'Y': 'paper',
	'C': 'scissors',
	'Z': 'scissors',
};
const beats = (playerOne, playerTwo) => {
	if (playerOne === 'rock') return playerTwo === 'scissors';
	if (playerOne === 'scissors') return playerTwo === 'paper';
	if (playerOne === 'paper') return playerTwo === 'rock';
};
const outcome = (playerTwo, playerOne) => {
	if (playerTwo === playerOne) return 3;
	if (beats(playerOne, playerTwo)) return 6;
	else return 0;
};
const moveScore = playerOne => {
	if (playerOne === 'rock') return 1;
	if (playerOne === 'paper') return 2;
	if (playerOne === 'scissors') return 3;
};

let result = 0;
for (const [playerTwoRaw, playerOneRaw] of rounds) {
	const playerTwo = MAP[playerTwoRaw];
	const playerOne = MAP[playerOneRaw];
	result += outcome(playerTwo, playerOne) + moveScore(playerOne);
}
console.log(result);
