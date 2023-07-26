const sentenceToCamelCase = require('./sentence-to-camel-case')

describe('return a string in UpperCamelCase if true and lowerCamelCase if false', function() {

    test('TEST ONE - If passed an empty string return an empty string',function (){

        const actual = '';
        const expected = '';
        const result = sentenceToCamelCase(actual);

        expect(result).toEqual(expected);

    })

    test('TEST TWO - If passed \'this sentence\' & \'true\' return \'ThisSentence\' ',function (){

        const actual1 = "this sentence";
        const actual2 = true;
        const expected = 'ThisSentence';
        const result = sentenceToCamelCase(actual1, actual2);

        expect(result).toEqual(expected);

    })

    test('TEST THREE - If passed \'this sentence\' & \'false\' return \'thisSentence\' ',function (){

        const actual1 = "this sentence";
        const actual2 = false;
        const expected = 'thisSentence';
        const result = sentenceToCamelCase(actual1, actual2);

        expect(result).toEqual(expected);

    })

    test('TEST FOUR - If passed \'tThis Bigger strange Sentence\' & \'true\' return \'ThisBiggerStrangeSentence\' ',function (){

        const actual1 = "This Bigger strange Sentence";
        const actual2 = true;
        const expected = 'ThisBiggerStrangeSentence';
        const result = sentenceToCamelCase(actual1, actual2);

        expect(result).toEqual(expected);

    })
})