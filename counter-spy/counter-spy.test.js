const counterSpy = require('./counter-spy');

describe('counterSpy', ()=>{
    test('If passed an array, should return a new array and should not mutate input', ()=>{

        const input = ["Daryl"];
        const func = counterSpy(input);
        const result = [];

        expect(func).not.toEqual(input);
        expect(func).toEqual(result);
        expect(input).toEqual(["Daryl"]);

    })

    test('If passed an array with one name "Daryl", should return an empty array', ()=>{

        const input = ["Daryl"];
        const func = counterSpy(input);
        const result = [];

        expect(func).not.toEqual(input);
        expect(func).toEqual(result);
        expect(input).toEqual(["Daryl"]);

    })

    test('If passed an array with several names, should return a new array with names that dont include s, p or y.', ()=>{

        const input = ["Daryl", "Harriet", "James"];
        const func = counterSpy(input);
        const result = ['Harriet'];

        expect(func).not.toEqual(input);
        expect(func).toEqual(result);
        expect(input).toEqual(["Daryl", "Harriet", "James"]);

    })

    test('If passed an array with several names, should return a new array with names that dont include s, p or y.', ()=>{

        const input = ["Sam", "Daryl", "Chris", "Harriet", "Mauro"];
        const func = counterSpy(input);
        const result = ['Harriet','Mauro'];

        expect(func).not.toEqual(input);
        expect(func).toEqual(result);
        expect(input).toEqual(["Sam", "Daryl", "Chris", "Harriet", "Mauro"]);

    })

    test('If passed an array with several names, should return a new array with names that dont include s, p or y; sorted alphabetically', ()=>{

        const input = ["Sam", "Daryl", "Chris", "Harriet", "Mauro", "Alhonzo"];
        const func = counterSpy(input);
        const result = ['Alhonzo','Harriet','Mauro'];

        expect(func).not.toEqual(input);
        expect(func).toEqual(result);
        expect(input).toEqual(["Sam", "Daryl", "Chris", "Harriet", "Mauro","Alhonzo"]);

    })
})