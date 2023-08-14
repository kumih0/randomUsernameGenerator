//importing functions and inquirer for prompts
const inquirer = require('inquirer');
const fs = require('fs');
const {generateRandomUsername, generateRandomUsernameList } = require('./usernames/genUsername');
const { mainMenu, usernamePrompts } = require('./utils/menu');


// const runIt = () => {
//     generateRandomUsernameList(30);
// };

// runIt();

