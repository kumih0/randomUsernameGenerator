const { maleNames, femaleNames, unisexNames, prefixArray, suffixArray, surnameArray, namesArray } = require('./randomName');
const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');
const { js } = require('../utils/fileWriters');

//generate first name
const generateRandomGivenName = (type) => {
    let nameArray = [];
    switch (type) {
        case 'masc':
            nameArray = maleNames;
            break;
        case 'femme':
            nameArray = femaleNames;
            break;
        case 'neutral':
           nameArray = unisexNames;
           break;
        default:
            nameArray = maleNames.concat(femaleNames);
    };
    console.log(nameArray, 'here we go');
    return getRandomArrayItem(nameArray);
};

//generatiung last name
const generateRandomSurname = () => {
    return getRandomArrayItem(surnameArray);
};

//method for checking for name dupes
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
//comparing two arrays

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

//generating file for un dupes
js(checkArrays(surnameArray, namesArray), 'surnames');

//generating one full name
const generateRandomName = () => {
};

const generateRandomNameList = (num) => {
};