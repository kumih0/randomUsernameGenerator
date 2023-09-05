//importing functions and inquirer for prompts
const inquirer = require('inquirer');
const { generateRandomUsername, generateRandomUsernameList } = require('./usernames/genUsername');
const { mainMenu, usernamePrompts, allOptions } = require('./utils/menu');
const { whichFiles } = require('./utils/fileWriters');
const {RandomName, checkLast} = require('./utils/helpers');

//creating random names
const generateRandomName = () => {
    const name = new RandomName();
    return console.log(name.createName());
};

generateRandomName();

// const runIt = () => {
//     generateRandomUsernameList(30);
// };

// runIt();
//main menu selection using switch cases
// const main = () => {
//     inquirer.prompt(mainMenu).then((answers) => {
//         console.log(answers);
//         switch (answers.options) {
//             case 'make me some data':
//                 return data(answers);
//             case 'just here for fun :)':
//                 return fun(answers);
//             case 'show me all the options buddy':
//                 return everything();
//             default:
//                 return exit();
//         }
//     });
// };

// const exit = () => {
//     console.log('see ya dingus');
//     process.exit();
// };

// //data menu
// const data = (answers) => {
//     switch (answers.dataopt) {
//         case 'users':
//             return userData();
//         case 'posts/comments':
//             return postCommentData();
//         case 'other media/products':
//             return other();
//         case 'go back':
//             return main();
//     }
// };

// //fun menu
// const fun = (answers) => {
//     switch (answers.funopt) {
//         case 'lookin for usernames':
//             return usernames();
//         case 'wanna make rp/dnd name':
//             return rpNames();
//         case 'do some text':
//             return textStuff();
//         case 'take me back!':
//             return main();
//     }
// };

// //all options menu
// const everything = () => {
//     inquirer.prompt(allOptions).then((answers) => {
//         console.log(answers.allopt);
//         switch (answers.allopt) {
//             case 'generate usernames':
//                 return usernames();
//             case 'make up people names':
//                 return names();
//             case 'create random ages/birth date':
//                 return ageDOB();
//             case 'make rp/dnd names':
//                 return rpNames();
//             case 'create random titles':
//                 return title();
//             case 'generate random descriptions':
//                 return desc();
//             case 'generate posts':
//                 return postData();
//             case 'make some comments':
//                 return commentData();
//             case 'generate other media/products':
//                 return other();
//             case 'back to main':
//                 return main();
//         }
//     });
// };

// const usernames = () => {
//     inquirer.prompt(usernamePrompts).then((answers) => {
//         console.log(answers);
//         const num = answers.howmany;
//         const filetype = answers.filetype;
//         const genUsername = generateRandomUsername();
//         const genList = generateRandomUsernameList(num);

//         switch (answers.usernames) {
//             case 'just one pls':
//                 return console.log('generating one username...'), console.log(genUsername);
//             case 'list':
//                  return console.log(`generating ${num} usernames...\n`), console.table(genList), whichFiles(filetype, genList, 'usernames');
//             case 'go back':
//                 return main();
//             default:
//                 return exit();
//         };
//     });
// };

// main();