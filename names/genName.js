const { maleNames, femaleNames, unisexNames, surnameArray } = require('./randomName');
const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');

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


//generating one full name
const generateRandomName = () => {
};

//generating a list of full names
const generateRandomNameList = (num) => {
};