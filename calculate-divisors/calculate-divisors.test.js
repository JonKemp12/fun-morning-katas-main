const calculateDivisors = require('./calculate-divisors');

describe('Calculate the sum of multiples 3 & 5 below the given number', function () {
    test('TEST ONE - When passed 1, should return 0', function () {

        const actual = 1;
        const expected = 0;
        const result = calculateDivisors(actual);
        
        expect(result).toEqual(expected);
        
    })

    test('TEST TWO - When passed 5, should return 3', function () {

        const actual = 5;
        const expected = 3;
        const result = calculateDivisors(actual);
        
        expect(result).toEqual(expected);
        
    })

    test('TEST THREE - When passed 6, should return 8', function () {

        const actual = 6;
        const expected = 8;
        const result = calculateDivisors(actual);
        
        expect(result).toEqual(expected);
        
    })

    test('TEST FOUR - When passed 10, should return 23', function () {

        const actual = 10;
        const expected = 23;
        const result = calculateDivisors(actual);
        
        expect(result).toEqual(expected);
        
    })

    test('TEST FIVE - When passed 12, should return 33', function () {

        const actual = 12;
        const expected = 33;
        const result = calculateDivisors(actual);
        
        expect(result).toEqual(expected);
        
    })

})