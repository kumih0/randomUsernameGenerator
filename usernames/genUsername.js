// const randomAdjectiveArray = require('./randomAdjective');
// const randomNounArray = require('./randomNoun');
const { nouns, dookieNouns } = require('../utils/randomNounList');
const { adjectives, dookieAdj } = require('../utils/randomAdjectiveList');
const { getRandomArrayItem, checkRepeats } = require('../utils/helpers');

//create random noun array based on input
const randomNounArray = (ans) => {
    if(ans) {
        return nouns.concat(dookieNouns);
    } else {
        return nouns;
    };
};

//create random adj array based on input
const randomAdjectiveArray = (ans) => {
    if (ans) {
        return adjectives.concat(dookieAdj);
    } else {
        return adjectives;
    };
};

//generate single username
const generateRandomUsername = (ans) => {
    return getRandomArrayItem(randomAdjectiveArray(ans))+getRandomArrayItem(randomNounArray(ans))+(Math.floor(Math.random() * 100));
};

//generate list of usernames, req number input
const generateRandomUsernameList = (ans, num) => {
    //empty usernames array
    const usernames = [];
    for (let i = 0; i < num; i++) {
        let randomAdj = getRandomArrayItem(randomAdjectiveArray(ans));
        let randomNoun = getRandomArrayItem(randomNounArray(ans));

        console.log(randomAdj, randomNoun);

        randomAdj = checkRepeats(usernames, randomAdjectiveArray(ans), randomAdj);
        randomNoun = checkRepeats(usernames, randomNounArray(ans), randomNoun);

        const newUsername = randomAdj + randomNoun + (Math.floor(Math.random() * 100));

        usernames.push(newUsername);
        // console.log('doin it');
    }
    // console.log(usernames);
    return usernames;
};

module.exports = { generateRandomUsername, generateRandomUsernameList };