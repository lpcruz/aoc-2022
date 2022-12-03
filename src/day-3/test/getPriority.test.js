const { getPriority, upper, lower } = require('../getPriority');

describe('getPriority', () => {
    const letters = [...lower,...upper];
    it.each(letters.map((letter, idx) => {
        it('should return priority for each letter', () => {
            expect(getPriority(letter)).toEqual(idx + 1);
        });
    }));
});
