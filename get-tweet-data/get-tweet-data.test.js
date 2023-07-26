const getTweetData = require('./get-tweet-data');

describe('Get the data about the tweets given and return as an object', ()=>{
    test('return the length of the tweet inside an object', ()=>{

        const tweet = "My awesome tweet";
        const func = getTweetData(tweet);
        const returned = {length: 16, tagCount: 0, tags: [], mentions: [], mentionCount: 0};

        expect(func).toEqual(returned);

    })

    test('return the amount of hashtags in the tweet with an array of them', ()=>{

        let tweet = "My awesome #tweet to northcoders";
        let func = getTweetData(tweet);
        let returned = {length: 32, tags: ['#tweet'], tagCount: 1, mentions: [], mentionCount: 0};

        expect(func).toEqual(returned);

        tweet = "My awesome #tweet to northcoders #heyguys";
        func = getTweetData(tweet);
        returned = {length: 41, tags: ['#tweet', '#heyguys'], tagCount: 2, mentions: [], mentionCount: 0};

        expect(func).toEqual(returned);

    })

    test('return the amount of mentions in the tweet as well as an array of them', ()=>{

        const tweet = "My awesome tweet about #coding to @northcoders";
        const func = getTweetData(tweet);
        const returned = { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 };

        expect(func).toEqual(returned);
    })

    test('Only count unique tags and mentions', ()=>{

        const tweet = "I am #coding with @northcoders I love #coding and @northcoders";
        const func = getTweetData(tweet);
        const returned = { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 };

        expect(func).toEqual(returned);

    })
})