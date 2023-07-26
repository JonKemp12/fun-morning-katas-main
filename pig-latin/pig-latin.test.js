const pigLatin = require('./pig-latin');

describe('Convert given string to Pig Latin', function () {

    test('TEST ONE - If given an empty string return empty string', function () {

        const actual = "";
        const expected = "";
        const result = pigLatin(actual);

        expect(result).toEqual(expected);
    })

    test('TEST TWO - If given \'northcoders\' return \'orthcodersnay\'', function () {

        const actual = "northcoders";
        const expected = "orthcodersnay";
        const result = pigLatin(actual);

        expect(result).toEqual(expected);
    })

    test('TEST THREE - If given \'sheffield\' return \'effieldshay\'', function () {

        const actual = "sheffield";
        const expected = "effieldshay";
        const result = pigLatin(actual);

        expect(result).toEqual(expected);
    })

    test('TEST FOUR - If given \'algorithm\' return \'algorithmway\'', function () {

        const actual = "algorithm";
        const expected = "algorithmway";
        const result = pigLatin(actual);

        expect(result).toEqual(expected);
    })

    test('TEST FIVE - If given \'keep on coding\' return \'eepkay onway odingcay\'', function () {

        const actual = "keep on coding";
        const expected = "eepkay onway odingcay";
        const result = pigLatin(actual);

        expect(result).toEqual(expected);
    })
})