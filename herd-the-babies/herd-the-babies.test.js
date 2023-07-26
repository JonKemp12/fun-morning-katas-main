const herdTheBabies = require('./herd-the-babies');

describe('herdTheBabies', ()=>{

    test('if passed aA should return Aa', ()=>{

        const input = 'aA';
        const func = herdTheBabies(input);
        const output = 'Aa'

        expect(func).toBe(output);
    })

    test('if passed bbaBccAC should return AaBbbCcc', ()=>{

        const input = 'bbaBccAC';
        const func = herdTheBabies(input);
        const output = 'AaBbbCcc'

        expect(func).toBe(output);
    })

    test('if passed AaBbbBaAbAbbAbB should return AAAAaaBBBbbbbbb', ()=>{

        const input = 'AaBbbBaAbAbbAbB';
        const func = herdTheBabies(input);
        const output = 'AAAAaaBBBbbbbbb'

        expect(func).toBe(output);
    })

})