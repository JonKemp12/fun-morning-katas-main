const rotateArray = require('./rotate-array');

describe('rotateArray', ()=>{
    test('If passed 0, should return array unchanged', ()=>{

        const arr = [1, 2, 3];
        const num = 0;
        const func = rotateArray(arr, num);
        const result = [1, 2, 3];

        expect(func).toEqual(result)

    })

    test('If passed a positive number, should return array rotated', ()=>{

        let arr = [1, 2, 3];
        let num = 1;
        let func = rotateArray(arr, num);
        let result = [3, 1, 2];

        expect(func).toEqual(result)

        arr = [1, 2, 3, 4, 5];
        num = 3;
        func = rotateArray(arr, num);
        result = [3, 4, 5, 1, 2];

        expect(func).toEqual(result)

    })

    describe('negative numbers', ()=>{

        test('if passed a negative number rotage the array in the opposire direction', ()=>{

        let arr = [1, 2, 3];
        let num = -1;
        let func = rotateArray(arr, num);
        let result = [2, 3, 1];

        expect(func).toEqual(result)

        arr = [1, 2, 3, 4, 5];
        num = -3;
        func = rotateArray(arr, num);
        result = [4, 5, 1, 2, 3];

        expect(func).toEqual(result)

        })

    })

    
})