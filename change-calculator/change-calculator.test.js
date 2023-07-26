const changeCalculator = require('./change-calculator');

describe('change calculator', ()=>{

    test('If passed a number should return an object', ()=>{

        const input = 0;
        const func = changeCalculator(input);
        const result = {};

        expect(func).toEqual(result);

    })

    test('If passed the number 1 should return an object with 1p: 1', ()=>{

        const input = 1;
        const func = changeCalculator(input);
        const result = {'1p': 1};

        expect(func).toEqual(result);

    })

    test('If passed the number 2 should return an object with 2p: 1', ()=>{

        const input = 2;
        const func = changeCalculator(input);
        const result = {'2p': 1};

        expect(func).toEqual(result);

    })

    test('If passed the number 7 should return an object with appropriate change', ()=>{

        const input = 7;
        const func = changeCalculator(input);
        const result = {'5p':1,'2p':1};

        expect(func).toEqual(result);

    })

    test('If passed the number 13 should return an object with appropriate change', ()=>{

        const input = 13;
        const func = changeCalculator(input);
        const result = {'10p':1,'2p':1,'1p':1};

        expect(func).toEqual(result);

    })

    test('If passed the number 18 should return an object with appropriate change', ()=>{

        const input = 18;
        const func = changeCalculator(input);
        const result = {'10p':1,'5p':1,'2p':1,'1p':1};

        expect(func).toEqual(result);

    })

    test('If passed the number 19 should return an object with appropriate change', ()=>{

        const input = 19;
        const func = changeCalculator(input);
        const result = {'10p':1,'5p':1,'2p':1,'1p':2};

        expect(func).toEqual(result);

    })

    test('If passed the number 26 should return an object with appropriate change', ()=>{

        const input = 26;
        const func = changeCalculator(input);
        const result = {'20p':1,'5p':1,'1p':1};

        expect(func).toEqual(result);

    })

    test('If passed the number 39 should return an object with appropriate change', ()=>{

        const input = 39;
        const func = changeCalculator(input);
        const result = {'20p':1,'10p':1,'5p':1,'2p':1,'1p':2};

        expect(func).toEqual(result);

    })

})