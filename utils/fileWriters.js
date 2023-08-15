const fs = require('fs');


//will need to generalize to make adaptable for input
//pass the funct thru as param?
//making json file

const json = (num) => {
    fs.writeFile('./results/usernames.json', JSON.stringify(generateRandomUsernameList(num)), (err) => {
        if (err) throw err;
        console.log('json file saved');
    });
};

const txt = (num) => {
    fs.writeFile('./results/usernames.txt', generateRandomUsernameList(num).join('\n'), (err) => {
        if (err) throw err;
        console.log('txt file saved');
    });
};

const js = (num) => {
    fs.writeFile('./results/usernames.js', `const usernames = ${JSON.stringify(generateRandomUsernameList(num))}; module.exports = usernames;`, (err) => {
        if (err) throw err;
        console.log('js file saved');
    });
};

const csv = (num) => {
    fs.writeFile('./results/usernames.csv', generateRandomUsernameList(num).join(','), (err) => {
        if (err) throw err;
        console.log('csv file saved');
    });
};

module.exports = { json, txt, js, csv };