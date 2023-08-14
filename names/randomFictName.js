const { getRandomArrayItem, checkRepeats } = '../utils/helpers';

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
    'rain'
];

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

//language rules and name structure defined below for my made up language/names that seem close but aren't anything
const createName = () => {
    let name = '';
    //make the length of name random under 10 letters
    const randomLength = Math.floor(Math.random() * 10 + 1);

    //randomly select letters based on length
    for(let i=0; i<randomLength; i++) {
        
    }

    
}