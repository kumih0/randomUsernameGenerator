//importing my random adjectives and nouns arrays
const { get } = require('http');
const randomAdjectiveArray = require('../usernames/randomAdjective');
const randomNounArray = require('../usernames/randomNoun');
const { getRandomArrayItem, coinFlip, stringIt, russianRoulette } = require('../utils/helpers');
const { vowels } = require('../utils/vowels-consonants');

//creating formula for titles of movies, books etc.
const articles = [
    "the", "a", "an",
];

const mysNoun = [
    "mystery", "secret", "treasure", "adventure", "journey", "quest", "travel", "history", "fantasy", "dream", "creation",
    "legend", "intrigue", "consequence", "exploration", "hunt", "ballad", "song", "tale", "trick", "vision", "trial",
    "shadow", "call", "dance", "memory", "code", "exploit", "story", "whisper", "dimension",

];

const places = [
    "world", "land", "sea", "ocean", "beach", "place", "city", "country", "town", "coast", "valley", "mountain", "forest",
    "village", "river", "creek", "lake", "wood", "jungle", "street", "hill", "field", "beach", "garden", "meadow", "road",
    "house", "building", "apartment", "cabin", "farm", "home", "office", "barn", "prison", "jail", "church", "shop", "store",
    "downtown", "uptown", "basement", "closet", "kitchen", "bedroom", "bathroom", "shower", "camp", "school", "class", "gym",
    "pool", "toilet", "room", "library",
];

const prepositions = [
    "for", "to", "of", "in", "by", "above", "below", "with", "without", "on", "onto", "into", "around", "about", "across", "towards", "against", "along", "among", "before",
    "behind", "beside", "from", "beneath", "between", "down", "under", "over", "near", "off", "within",
];

const dramAd = [
    "deep", "lost",
];

const makeItPlural = (w) => {
    const word = Array.from(w);
    const lastChar = w[w.length - 1];
    const last2Char = w[w.length - 2];

    if (lastChar === "y" && !(vowels.includes(last2Char))) {
        word.pop();
        word.push("ies");

        console.log(word);
        return stringIt(word);
    } else {
        word.push("s");

        console.log(word);
        return stringIt(word);
    };
};

const makeItPosessive = (w) => {
    return w + "'s";
};

//funct to check if word is prep or art
const articleOrPrep = (w) => {
    let result;
    if (articles.includes(w)) {
        return result = "article";
    } else if (prepositions.includes(w)) {
        return result = "preposition";
    } else {
        return result = "wtf";
    };
};

//check article for plural
const pluralCheck = (w) => {
    let result;
    if(w === "the") {
        return result = true;
    } else {
        return false;
    };
};

//check if article is an
const anCheck = (w) => {
    let result;
    if(w === "an") {
        return result = true;
    } else {
        return false;
    };
};

//mini function for picking a random noun, adjective, etc., and re-running until it has a vowel as the first letter
const startWvowel = () => {
    let w = getRandomArrayItem(randomNounArray.concat(randomAdjectiveArray, places, mysNoun));
    if(vowels.includes(w[0])){
        console.log(w);
        return w;
    } else {
    return startWvowel();
    };
};

//pseudo code
//function: article + adjective + noun + preposition + article + adjective + noun
//basic function: coin flip on using article or preposition, then coin flip on using adjective or noun, if noun, then coin flip on using plural, possessive, or singluar, if adj, then random noun, then coin flip on using plural, possessive, or singluar, then if article chosen first, use preposition, 
//if preposition first, follow with article
//if article is the, then plural works if a/an can't be plural

const titleGenerator = () => {
    let title = [];
    //will hold value
    const randomArticle = getRandomArrayItem(articles);
    const randomPrep = getRandomArrayItem(prepositions);
    const randomAdjective = getRandomArrayItem(randomAdjectiveArray);
    const randomNoun = getRandomArrayItem(randomNounArray);
    const randomMysNoun = getRandomArrayItem(mysNoun);
    const randomPlace = getRandomArrayItem(places);

    // const firstWord = coinFlip(randomArticle, randomPrep);
    
    //first word choice 
    const firstWord = russianRoulette(randomArticle, randomPrep, randomAdjective, randomNoun, randomMysNoun, randomPlace);

    //check if first word is adj, noun, place, and add a random article or preposition
    if(articleOrPrep(firstWord) === 'wtf'){
        title.push(coinFlip(getRandomArrayItem(articles), getRandomArrayItem(prepositions)));
    };

    //if first index is preposition, then add article
    if(articleOrPrep(title[0]) === 'preposition'){
        title.push(getRandomArrayItem(articles));
    };

    //if firstword is article, push; if prep, push and add article
    if(articleOrPrep(firstWord) === 'article'){
        title.push(firstWord);
    } else if(articleOrPrep(firstWord) === 'preposition'){
        title.push(firstWord);
        title.push(getRandomArrayItem(articles));
    };

    //the last index of the title array should be an article, check type
    let lastIndex = title.length - 1;
    console.log(title[lastIndex]);

    //if an is selected, only words beginning with a vowel can be used
    if(anCheck(title[lastIndex]) && !(title.includes(firstWord))){
        //if last index is an and title hasn't included first word yet, check is firstword starts with vowel
        if(vowels.includes(firstWord[0])){
            title.push(firstWord);
        } else {
        //if firstword doesn't start w a vowel, then replace article with a or the, then push first word
            title.pop();
            title.push(coinFlip("a", "the"));
            title.push(firstWord);
        };
    } else if(anCheck(title[lastIndex]) && title.includes(firstWord)){
        //if last index is an and title already includes first word, then find word that begins w vowel
        title.push(startWvowel());
    } else if(!(title.includes(firstWord))){
        //if last index is not an and title doesn't include first word, then push first word
        title.push(firstWord);
    } else {
        title.push(russianRoulette(randomMysNoun, randomAdjective, randomNoun, randomPlace, randomAdjective, randomMysNoun));
    };

    



//checking if the fn work
//console.log(articleOrPrep("with"));

// console.log(makeItPlural("journey"), makeItPlural(getRandomArrayItem(randomNounArray)));

// console.log(makeItPosessive("butcher"));
