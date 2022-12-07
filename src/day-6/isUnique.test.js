const { isUnique } = require('./isUnique');

describe('isUnique', () => {
    describe('with an array with duplicate items', () => {
        it('should return false', () => {
            expect(isUnique(['a','a','b','b'])).toEqual(false);
        });
    });

    describe('with an array with all unique items', () => {
        it('should return true', () => {
            expect(isUnique(['a','b','c'])).toEqual(true);
        });
    });

    describe('with an empty array', () => {
        it('should return true', () => {
            expect(isUnique([])).toEqual(true);
        });
    });
});