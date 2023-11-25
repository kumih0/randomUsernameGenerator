//importing my random adjectives and nouns arrays
const randomAdjectiveArray = require('../usernames/randomAdjective');
const randomNounArray = require('../usernames/randomNoun');
const { getRandomArrayItem, coinFlip, stringIt } = require('../utils/helpers');
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


//checking if the fn work
//console.log(articleOrPrep("with"));

console.log(makeItPlural("journey"), makeItPlural(getRandomArrayItem(randomNounArray)));

// console.log(makeItPosessive("butcher"));
