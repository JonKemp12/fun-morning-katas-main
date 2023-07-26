const foldString = require('./fold-string');

describe('Turn a string insude out and keep the characters in the reveresed order', function () {

    test('TEST ONE - If given an even string return all characters moved', function (){

        let actual = 'code';
        let expected = 'oced';
        let result = foldString(actual);

        expect(result).toBe(expected);

        actual = 'abcdef';
        expected = 'cbafed';
        result = foldString(actual);

        expect(result).toBe(expected);

        actual = 'javascript';
        expected = 'savajtpirc';
        result = foldString(actual);

        expect(result).toBe(expected);
    })

    test('TEST TWO - If given an uneven string return all characters moved', function (){

        const actual = 'Northcoders';
        const expected = 'htroNcsredo';
        const result = foldString(actual);

        expect(result).toBe(expected);
    })

    test('TEST THREE - If given a string with spaces return all characters moved', function (){

        const actual = 'javascript is cool';
        const expected = 'savajtpirc is oclo';
        const result = foldString(actual);

        expect(result).toBe(expected);
    })
})