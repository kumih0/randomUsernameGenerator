//importing arrays of vowels and consonants
const {vowels, consonants } = require('./vowels-consonants');

//creating general randomizing functions that are frequently used

//random array item
const getRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

//check for redundancies function
const checkRepeats = (array1, array2, item) => {
    const parentArray = array1;
    const stringyArray = array1.toString();
    const itemsArray = array2;
    let checkItem = item;

    if(stringyArray.includes(checkItem)) {
        checkItem = getRandomArrayItem(itemsArray);
        console.log('checking');
        return checkRepeats(parentArray, itemsArray, checkItem);
    } else {
        console.log('no repeats babez')
        return checkItem;
    }
};

//method for checking array for dupes
const dupes = (array) => {
    const arrayCheck = array;
    for(let i = 0; i < array.length; i++) {
        if (arrayCheck.includes(array[i]) && arrayCheck.indexOf(array[i]) !== i) {
            console.log(arrayCheck[i], 'dupe found')
            arrayCheck.splice(i, 1);
            console.log('removed dupe');

        };
        console.log('no dupes');
    };
    console.log(arrayCheck);
    return arrayCheck;
};

//comparing two arrays for dupes
const checkArrays = (array1, array2) => {
    const arrayCheck = array1;
    const arrayCheck2 = array2;

    for(let i = 0; i < arrayCheck.length; i++) {
        if (arrayCheck2.includes(arrayCheck[i])) {
            console.log(arrayCheck[i], 'dupe found')
            arrayCheck.splice(i, 1);
            console.log('removed dupe');
        };
        console.log('no dupes');
    };
    console.log(arrayCheck);
    return arrayCheck.concat(arrayCheck2);
};

//random date function
const randomDate = () => {
    const date = new Date();
    const randomNumberOfDays = Math.floor(Math.random() * 365);

    date.setDate(date.getDate() - randomNumberOfDays);
    return date;
};

const coinFlip = () => {
    return Math.floor(Math.random() * 2);
};

//functions to check last characters in strings
const checkChars = (w) => {
    const word = w;
    let pattern = '';

    for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            console.log(word[i], 'vowel');
            pattern += 'v';
        } else if(consonants.includes(word[i])) {
            console.log(word[i], 'consonant');
            pattern += 'c';
        } else {
            console.log(word[i], 'idk');
        }
    }
    console.log(pattern);
    return pattern;
};


const checkLast = (w) => {
    const last = w[w.length - 1];
    if(vowels.includes(last)) {
        return last, 'vowel';
    } else if(consonants.includes(last)) {
        return last, 'consonant';
    } else {
        return last, 'idk';
    }
};

const checkLastChars = (w) => {
    const last = {
        value: w[w.length - 1], 
        isVowel:{default: false}, 
        isCons:{default: false}
    };
    const last2 = {
        value: w[w.length - 2], 
        isVowel:{ default: false}, 
        isCons:{ default: false}
    };
    const last3 = {
        value: w[w.length - 3], 
        isVowel:{ default: false}, 
        isCons:{ default: false}
    };
    //checking if cons or vowel, altho redundant to have both cons and v properties for char obj, make it easier for organization
    if(vowels.includes(last)) {
        console.log(last.value, 'vowel');
        last.isVowel = true;
    } else if(consonants.includes(last)) {
        console.log(last.value, 'consonant');
        last.isCons = true;
    } else {
        console.log(last.value, 'idk');
    };

    if(vowels.includes(last2)) {
        console.log(last2.value, 'vowel');
        last2.isVowel = true;
    } else if(consonants.includes(last2)) {
        console.log(last2.value, 'consonant');
        last2.isCons = true;
    } else {
        console.log(last2.value, 'idk');
    };

    if(vowels.includes(last3)) {
        console.log(last3.value, 'vowel');
        last3.isVowel = true;
    } else if(consonants.includes(last3)) {
        console.log(last3.value, 'consonant');
        last3.isCons = true;
    } else {
        console.log(last3.value, 'idk');
    };

    switch(true){
        case last.isVowel:
            console.log('vowel last');
            return lastVowel = true;
        case last.isCons && last2.isCons:
            console.log('double cons');
            return doubleCons = true;
        case last.isCons && last2.isVowel && last3.isVowel:
            console.log('double vowel');
            return doubleVowel = true;
        case last.isCons && last2.isVowel:
            console.log('single cons');
            if(last.value ==='s' && last2.value === 'u') {
                console.log('-us ending');
                return usEnding = true;
            } else {
                return singleCons = true;
            }
    }
};

//more generating random funct...
//TODO: generate age > given age params, generate DOB w age range params, generate random passwords (creating models files for use?)
//creating models and schemas based on selection or intended proj? (rp/dnd vs database?)

//generating titles and names funct will be found in their folders

module.exports = {getRandomArrayItem, checkRepeats, randomDate, coinFlip, checkLast, dupes, checkArrays, checkChars, checkLastChars };