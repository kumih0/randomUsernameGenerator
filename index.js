//importing functions and inquirer for prompts
const inquirer = require('inquirer');
const fs = require('fs');
const {generateRandomUsername, generateRandomUsernameList } = require('./usernames/genUsername');
const { mainMenu, usernamePrompts, dataMenu, funMenu, allOptions } = require('./utils/menu');


// const runIt = () => {
//     generateRandomUsernameList(30);
// };

// runIt();
//main menu selection using switch cases
const main = () => {
    inquirer.prompt(mainMenu).then((answers) => {
       switch (answers.options) {
        case 'make me some data':
            return data();
        case 'just here for fun :)':
            return fun();
        case 'show me all the options buddy':
            return everything();
        default:
            return exit();
       }
    });
};

const exit = () => {
    console.log('see ya dingus');
    process.exit();
};

//data menu
const data = () => {
    inquirer.prompt(dataMenu).then((answers) => {
        switch (answers.dataopt) {
            case 'users':
                return userData();
            case 'posts/comments':
                return postCommentData();
            case 'other media/products':
                return other();
            case 'go back':
                return main();
        }
    });
};

//fun menu
const fun = () => {
    inquirer.prompt(funMenu).then((answers) => {
        switch (answers.funopt) {
            case 'lookin for usernames':
                return usernames();
            case 'wanna make rp/dnd name':
                return rpNames();
            case 'do some text':
                return textStuff();
            case 'go back':
                return main();
        }
    });
};

//all options menu
const everything = () => {
    inquirer.prompt(allOptions).then((answers) => {
        switch (answers.allopt) {
            case 'generate usernames':
                return usernames();
            case 'make up people names':
                return names();
            case 'create random ages/birth date':
                return ageDOB();
            case 'make rp/dnd names':
                return rpNames();
            case 'create random titles':
                return title();
            case 'generate random descriptions':
                return desc();
            case 'generate posts':
                return postData();
            case 'make some comments':
                return commentData();
            case 'generate other media/products':
                return other();
            case 'back to main':
                return main();
        }
    });
};