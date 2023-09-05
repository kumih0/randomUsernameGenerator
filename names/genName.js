const { maleNames, femaleNames, unisexNames, surnameArray } = require('./randomName');
const { getRandomArrayItem, checkRepeats, checkChars } = require('../utils/helpers');
const fs = require('fs');

//creating patterns for names
const namePatterns = (array) => {
    const patterns = [];
    array.forEach((item) => {
        const pattern = checkChars(item);
        patterns.push(pattern);
    });
return patterns;
};

const mPatt = namePatterns(maleNames);
const fPatt = namePatterns(femaleNames);
const sPatt = namePatterns(surnameArray);

console.log(fPatt);

fs.writeFile('../results/fnamepatt.js', `const fnamepatt = ${JSON.stringify(fPatt, null, 2)}; \n \n module.exports = fnamepatt;`, (err) => {
    if (err) throw err;
    console.log('patterns saved');
});

fs.writeFile('../results/mnamepatt.js', `const mnamepatt = ${JSON.stringify(mPatt, null, 2)}; \n \n module.exports = mnamepatt;`, (err) => {
    if (err) throw err;
    console.log('patterns saved');
});

// fs.writeFile(`../results/namePatterns.txt`, `Male Names: \n ${mPatt} \n Female Names: \n ${fPatt} \n Surnames: \n ${sPatt}`, (err) => {
//     if (err) throw err;
//     console.log('patterns saved');
// });


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