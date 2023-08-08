const randomAdjectiveArray = require('./utils/randomAdjective');
const randomNounArray = require('./utils/randomNoun');


console.log(randomAdjectiveArray[Math.floor(Math.random() * randomAdjectiveArray.length)]);

//generate list of 30 usernames
const generateRandomUsername = () => {
    //empty usernames array
    const usernames = [];
    for (let i = 0; i < 30; i++) {
        const randomAdj = randomAdjectiveArray[Math.floor(Math.random() * randomAdjectiveArray.length)];
        const randomNoun = randomNounArray[Math.floor(Math.random() * randomNounArray.length)];

        //check for redundancies
        if(usernames.toString().includes(randomAdj)) {
            randomAdj = randomAdjectiveArray[Math.floor(Math.random() * randomAdjectiveArray.length)];
        }
        if(usernames)

        const newUsername = randomAdj + randomNoun + (Math.floor(Math.random() * 100));

        usernames.push(newUsername);
        console.log('doin it');
    }
    console.log(usernames);
