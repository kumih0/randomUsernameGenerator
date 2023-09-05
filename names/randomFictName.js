const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');
const { vowels, consonants, randomCons, randomVowel } = require('../utils/vowels-consonants');

//array of common words used in fantasy names etc.
const rpNameArray = [
    'night',
    'shadow',
    'bane',
    'song',
    'heart',
    'strong',
    'dragon',
    'hope',
    'fire',
    'born',
    'mountain',
    'moon',
    'sun',
    'star',
    'light',
    'rain',
    'day',
    'runner',
    'walker',
    'dark',
    'keeper',
    'scorn',
    'brave',
    'mist',
    'ocean',
    'river',
    'lake',
    'hill',
    'forest',
    'grove',
    'foot',
    'hand',
    'slayer',
    'dreamer',
    'whisperer',
    'speaker',
    'voice',
    'mystic',
    'ink',
    'silver',
    'tongue',
    'dust',
    'finger',
    'torch',
    'noble',
    'rose',
    'blossom',
    'death',
    'wolf',
    'tiger',
    'tooth',
    'saber',
    'claw',
    'fang',
    'hound',
    'blood',
    'fell',
    'spell',
    'rot',
    'boom',
    'stick',
    'quiet',
    'man',
    'breeze',
    'wind',
    'thunder',
    'storm',
    'cloud',
    'rain',
    'snow',
    'ice',
    'frost',
    'winter',
    'summer',
    'spring',
    'autumn',
    'fall',
    'ember',
    'tide',
    'wave',
    'sea',
    'sky',
    'earth',
    'stone',
    'iron',
    'steel',
    'gold',
];

// //language rules and name structure defined below for my made up language/names that seem close but aren't anything
// const createName = () => {
//     let name = '';
//     //make the length of name random under 10 letters
//     const randomLength = Math.floor(Math.random() * 10 + 1);

//     //randomly select letters based on length
//     for(let i=0; i<randomLength; i++) {
        
//     }

    
// }

//creating constructor function for made up fictional name
//class for creating random names
// class RandomName {
//     constructor() {
//         this.name = '';
//         this.length = Math.floor(Math.random() * 10 + 1);
//         this.vowels = vowels;
//         this.consonants = consonants;
//     }

//     //generate random consonant
//     randomCons() {
//         return getRandomArrayItem(this.consonants);
//     };

//     //generate random vowel
//     randomVowel() {
//         return getRandomArrayItem(this.vowels);
//     };

//     //generate random name
//     createName() {
//         let name = '';
//         //randomly select letters based on length
//         for(let i=0; i<this.length; i++) {
//             if(i === 0) {
//                 name += this.randomCons();
//             } else if(i === this.length - 1) {
//                 name += this.randomVowel();
//             } else {
//                 name += this.randomCons();
//             }
//         }
//         return name;
//     }
// };