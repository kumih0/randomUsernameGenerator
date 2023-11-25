const getRandomArrayItem = require('./helpers');

//array of vowels
const vowels = [
    'a', 'e', 'i', 'o', 'u', 'y'
];

//array of consonants
const consonants = [
    'q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
];

//generate random consonant
const randomCons = () => {
    return getRandomArrayItem(consonants);
};

//generate random vowel
const randomVowel = () => {
    return getRandomArrayItem(vowels);
};


module.exports = { vowels, consonants, randomCons, randomVowel };