const tillAddition = require('./till-addition');

describe('tillAddition', ()=>{

    test('If passed an object return a string',()=>{

        const input = {};
        const func = tillAddition(input);
        const result = '£0.00';

        expect(func).toBe(result);

    })

    test('If passed an object return a string of the total value of the amounts',()=>{

        let input = { "1p": 1, "2p": 1 };
        let func = tillAddition(input);
        let result = "£0.03";

        expect(func).toBe(result);

         })

    test('If passed an object return a string of the total value of the amounts',()=>{

        let input = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 };
        let func = tillAddition(input);
        let result = "£0.38";
    
        expect(func).toBe(result);
    
        })

    test('If passed an object return a string of the total value of the amounts',()=>{

        let input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 };
        let func = tillAddition(input);
        let result = "£1.85";
        
        expect(func).toBe(result);
        
        })

    test('If passed an object return a string of the total value of the amounts',()=>{

        let input = { "5p": 3, "10p": 2, "20p": 1, "50p": 1, "£1": 1 };
        let func = tillAddition(input);
        let result = "£2.05";
            
        expect(func).toBe(result);
            
         })

    
})