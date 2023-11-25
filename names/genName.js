const { maleNames, femaleNames, unisexNames, surnameArray } = require('./randomName');
const { getRandomArrayItem, checkRepeats, checkChars } = require('../utils/helpers');
const fs = require('fs');
const mnamepatt = require('../results/mnamepatt');
const fnamepatt = require('../results/fnamepatt');

// //creating patterns for names
// const namePatterns = (array) => {
//     const patterns = [];
//     array.forEach((item) => {
//         const pattern = checkChars(item);
//         patterns.push(pattern);
//     });
// return patterns;
// };

// const mPatt = namePatterns(maleNames);
// const fPatt = namePatterns(femaleNames);
// const sPatt = namePatterns(surnameArray);

// console.log(fPatt);

// fs.writeFile('../results/fnamepatt.js', `const fnamepatt = ${JSON.stringify(fPatt, null, 2)}; \n \n module.exports = fnamepatt;`, (err) => {
//     if (err) throw err;
//     console.log('patterns saved');
// });

// fs.writeFile('../results/mnamepatt.js', `const mnamepatt = ${JSON.stringify(mPatt, null, 2)}; \n \n module.exports = mnamepatt;`, (err) => {
//     if (err) throw err;
//     console.log('patterns saved');
// });

//assessing patterns to find most common and avg length
const assessPatterns = (array) => {
    const patternArray = [];
    array.forEach((item) => {
        const pattern = item;
        const patternLength = pattern.length;
        const patternCount = 0;

        const patternObj = {
            pattern: pattern,
            length: patternLength,
            count: patternCount,
            names: []
        };
        patternObj.names.push(item);
        console.log(patternObj);
        patternArray.push(patternObj);
    });

    const avgLength = patternArray.reduce((acc, item) => {
        return acc + item.length;
    }, 0) / patternArray.length;

    console.log(avgLength);

    patternArray.forEach((item) => {
        if (item.length > avgLength) {
            item.length = Math.floor(avgLength);
            item.pattern = item.pattern.slice(0, item.length);
        }
        console.log(item.pattern, item.length);
    });

    const checkArray = array;
    for (let i = 0; i < array.length; i++) {
        if (checkArray.includes(array[i]) && checkArray.indexOf(array[i]) !== i) {
            console.log(array[i], 'match found');
            patternArray[i].count++;
        };

        // //find all matching occurences of pattern
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] === array[i + 1]) {
        //         console.log(array[i], 'match found');
        //         patternArray[i].count++;
        //     };
        // };

        patternArray.sort((a, b) => {
            return b.count - a.count;
        });

        console.log(patternArray);


    };

    const fnamepatterns = mnamepatt.concat(fnamepatt);

    assessPatterns(fnamepatterns);
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