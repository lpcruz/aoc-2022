const fs = require('fs');

const rounds = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/g).map(line => line.split(' '));

const MAP = {
	'A': 'rock',
	'B': 'paper',
	'C': 'scissors',
};
const matches = (playerOne, playerTwo) => {
	if (playerOne === 'rock') return playerTwo === 'scissors';
	if (playerOne === 'scissors') return playerTwo === 'paper';
	if (playerOne === 'paper') return playerTwo === 'rock';
};

const outcome = (playerTwo, playerOne) => {
	if (playerTwo === playerOne) return 3;
	if (matches(playerOne, playerTwo)) return 6;
	else return 0;
};

const moveScore = playerOne => {
	if (playerOne === 'rock') return 1;
	if (playerOne === 'paper') return 2;
	if (playerOne === 'scissors') return 3;
};

const getplayerOne = (playerOne, playerTwo) => {
	let possible = ['rock', 'paper', 'scissors'];
	if (playerOne === 'Y') return playerTwo;
	possible = possible.filter(p => p !== playerTwo);
	const wins = possible.find(p => matches(p, playerTwo));
	if (playerOne === 'Z') return wins;
	return possible.find(p => p !== wins);
};

let result = 0;
for (const [playerTwoRaw, playerOneRaw] of rounds) {
	const playerTwo = MAP[playerTwoRaw];
	const playerOne = getplayerOne(playerOneRaw, playerTwo);
	result += outcome(playerTwo, playerOne) + moveScore(playerOne);
}

console.log(result);
