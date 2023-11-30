//importing necesary helper functions and arrays
const { nouns, dookieNouns } = require('../utils/randomNounList');
const { adjectives, dookieAdj } = require('../utils/randomAdjectiveList');
// const { vowels } = require('../utils/vowels-consonants');
const { getRandomArrayItem, coinFlip, stringIt, russianRoulette } = require('../utils/helpers');
//importing things from random title, starting w a clean slate because i am dumb and can't organize myself lol
const { articles, prepositions, mysNoun, places, dramAdj, makeItPlural, makeItPosessive, canMakePlural, pluralCheck, anCheck, articleOrPrep, isNoun, isStartVowel, startWvowel, isAdj } = require('./randomTitle');


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
    title.push(firstWord);

    //check if article or prep
    if (prepositions.includes(firstWord)) {
        //if prep,add article
        title.push(randomArticle);
    };
    console.log(title);

    if (anCheck(randomArticle)) {

        switch (isStartVowel) {
            case randomAdjective:
                title.push(randomAdjective);
                break;
            case randomMysNoun:
                title.push(randomMysNoun);
                break;
            case randomPlace:
                title.push(randomPlace);
                break;
            default: //if none start w vowel 
                title.push(startWvowel())
                break;
        }

    };
    //check last index
    const checkLastIndex = () => {
        lastIndex = title[title.length - 1];
        console.log(lastIndex);
        return lastIndex;
    };

    lastIndex = checkLastIndex();
    //check if last index is an adj, if adj then select mysnoun or place
    if (isAdj(lastIndex)) {
        title.push(coinFlip(randomMysNoun, randomPlace));
    };
    
    if(articles.includes(lastIndex)){
        title.push(coinFlip(randomMysNoun, randomPlace));
    };
    
    console.log(title);
};
titleGenerator();