//importing necesary helper functions and arrays
const { nouns, dookieNouns } = require('../utils/randomNounList');
const { adjectives, dookieAdj } = require('../utils/randomAdjectiveList');
const { vowels } = require('../utils/vowels-consonants');
const { getRandomArrayItem, coinFlip, stringIt, russianRoulette } = require('../utils/helpers');
//importing things from random title, starting w a clean slate because i am dumb and can't organize myself lol
const { articles, prepositions, mysNoun, places, dramAdj, makeItPlural, makeItPosessive, canMakePlural, pluralCheck, anCheck, articleOrPrep, isNoun, isStartVowel, startWvowel } = require('./randomTitle');


const titleGenerator = () => {
    let title = [];
    let lastIndex;
    //will hold value
    const randomArticle = getRandomArrayItem(articles);
    const randomPrep = getRandomArrayItem(prepositions);
    const randomAdjective = getRandomArrayItem(adjectives);
    const randomNoun = getRandomArrayItem(nouns);
    const randomMysNoun = getRandomArrayItem(mysNoun);
    const randomPlace = getRandomArrayItem(places);

    console.log(randomArticle, randomPrep, randomAdjective, randomNoun, randomMysNoun, randomPlace);

    //first word coin flip on article or prep
    const firstWord = coinFlip(randomArticle, randomPrep);
    console.log(firstWord);

        //check if article or prep
        if (articleOrPrep(firstWord) === "article") {
            title.push(firstWord);
        } else if (articleOrPrep(firstWord) === "preposition") {
            //if prep, push and add article
            title.push(firstWord);
            title.push(randomArticle);
        };
        console.log(title);

        if(anCheck(randomArticle)) {
            const mainChoice = [ randomAdjective, randomMysNoun, randomPlace ];

            for (let i = 0; i < mainChoice.length; i++) {
                const choice = mainChoice[i];
                
            }
        }
        // //check last index
        // const checkLastIndex = () => {
        //     lastIndex = title[title.length - 1];
        //     console.log(lastIndex);
        //     return lastIndex;
        // };
    
        // checkLastIndex();

        //check 
};