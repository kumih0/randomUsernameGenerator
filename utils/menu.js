const mainMenu = [
    {
        type: 'list',
        name: 'options',
        message: 'Pick your poison!',
        choices: [
            'make me some data',
            'just here for fun :)',
            'show me all the options buddy',
            'lemme out!'
        ],
    },
];

const dataMenu = [
//options menu for gen data
    {
        type: 'list',
        name: 'dataopt',
        message: 'what do ya need?',
        choices: [
            'users', 'posts/comments', 'other media/products', 'go back'
        ],
        when: function (answers) {
            return answers.options ==='make me some data';
        },
    },
];

const funMenu = [
//options menu for fun!
    {
        type: 'list',
        name: 'funopt',
        message: 'noice, what u wanna do?',
        choices: [
            'lookin for usernames',
            'wanna make rp/dnd name',
            'do some text',
            'take me back!'
        ],
        when: function (answers) {
            return answers.options === 'just here for fun :)';
        },
    },
];

//all options menu
const allOptions = [
    {
        type: 'list',
        name: 'allopt',
        message: '',
        choices: [
            'generate usernames',
            'make up people names',
            'create random ages/birth date',
            'make rp/dnd names',
            'create random titles',
            'generate random descriptions',
            'generate posts',
            'make some comments',
            'generate other media/products',
            'back to main'
        ],
        default: 'back to main',
    },
];


//options menu for username gen
const usernamePrompts = [
    {
        type: 'list',
        name: 'usernames',
        message: 'want one username or list?',
        choices: [
            'just one pls', 'list', 'go back'
        ],
    },
    {
        type: 'confirm',
        name: 'printfile',
        message: 'print the results into a file?',
        default: true,
        when: function (answers) {
            return answers.usernames === 'list';
        }
    },
    {
        type: 'checkbox',
        name: 'filetype',
        message: 'select desired file type, (multiple ok)',
        choices: [
            'json', 'txt', 'js', 'csv'
        ],
        when: function (answers) {
            return answers.printfile;
        }
    },
    {
        type: 'input',
        name: 'howmany',
        message: 'generate how many random usernames?',
        filter: Number,
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Pls enter a number';
        },
        when: function (answers) {
            return answers.usernames === 'list';
        },
        default: 20,
    },
    {
        type: 'input',
        name: 'username',
        message: 'generate a random username?',
        when: function (answers) {
            return answers.usernames === 'just one pls';
        }
    },
];

module.exports = { mainMenu, usernamePrompts, dataMenu, funMenu, allOptions }; 