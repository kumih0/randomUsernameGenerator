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

//functions to check last characters in string
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

//more generating random funct...
//TODO: generate age > given age params, generate DOB w age range params, generate random passwords (creating models files for use?)
//creating models and schemas based on selection or intended proj? (rp/dnd vs database?)

//generating titles and names funct will be found in their folders

module.exports = {getRandomArrayItem, checkRepeats, randomDate, coinFlip, checkLast, dupes, checkArrays };