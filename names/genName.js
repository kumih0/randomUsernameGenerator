const { maleNames, femaleNames, unisexNames, prefixArray, suffixArray, surnameArray } = require('./randomName');
const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');

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

const generateRandomSurname = () => {
};

const generateRandomName = () => {
};

const generateRandomNameList = (num) => {
};