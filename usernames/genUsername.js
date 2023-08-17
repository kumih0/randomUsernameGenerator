const randomAdjectiveArray = require('./randomAdjective');
const randomNounArray = require('./randomNoun');
const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');

//generate single username
const generateRandomUsername = () => {
    return getRandomArrayItem(randomAdjectiveArray)+getRandomArrayItem(randomNounArray)+(Math.floor(Math.random() * 100));
};

//generate list of usernames, req number input
const generateRandomUsernameList = (num) => {
    //empty usernames array
    const usernames = [];
    for (let i = 0; i < num; i++) {
        let randomAdj = getRandomArrayItem(randomAdjectiveArray);
        let randomNoun = getRandomArrayItem(randomNounArray);

        console.log(randomAdj, randomNoun);

        randomAdj = checkRepeats(usernames, randomAdjectiveArray, randomAdj);
        randomNoun = checkRepeats(usernames, randomNounArray, randomNoun);

        const newUsername = randomAdj + randomNoun + (Math.floor(Math.random() * 100));

        usernames.push(newUsername);
        // console.log('doin it');
    }
    // console.log(usernames);
    return usernames;
};

module.exports = { generateRandomUsername, generateRandomUsernameList };