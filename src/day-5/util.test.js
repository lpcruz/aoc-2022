const { 
    getCrates,
    getInstructions,
    move, 
} = require('./util');

const testInput = [
    '    [D]    ',
    '[N] [C]    ',
    '[Z] [M] [P]',
    ' 1   2   3 ',
    '',
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2'
];

let crates;
let instructions;

beforeEach(() => {
    crates = getCrates(testInput);
    instructions = getInstructions(testInput);
});

describe('getCrates', () => {
    test('should create an array of arrays containing each respective stack', () => {
        expect(getCrates(testInput)).toEqual([ [ 'Z', 'N' ], [ 'M', 'C', 'D' ], [ 'P' ]]);
    });
});

describe('getInstructions', () => {
    test('should return array of arrays containing the moves as integers', () => {
        expect(getInstructions(testInput)).toEqual([[1, 2, 1], [3, 1, 3], [2, 2, 1], [1, 1, 2]])
    })
});

// describe('move', () => {
//     test('should return array of arrays containing the top crates by default', () => {
//         expect(move(crates,instructions)).toEqual([ [ 'Z', 'N' ], [ 'M', 'C', 'D' ], [ 'P' ] ]);
//     });
// });

