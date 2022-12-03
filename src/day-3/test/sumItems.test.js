const { sumItems } = require('../sumItems');

describe('sumItems', () => {
    it('should return a sum of all items in array', () => {
        const testData = [1,2,3,4,5,6];
        const expected = 21;
        const actual = sumItems(testData);
        expect(actual).toEqual(expected);
    });
});
