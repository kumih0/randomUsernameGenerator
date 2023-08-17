const fs = require('fs');


//will need to generalize to make adaptable for input
//pass the funct thru as param?
//making json file

const json = (funct, fname) => {
    fs.writeFile(`./results/${fname}.json`, JSON.stringify(funct), (err) => {
        if (err) throw err;
        console.log('json file saved');
    });
};

const txt = (funct, fname) => {
    fs.writeFile(`./results/${fname}.txt`, funct.join('\n'), (err) => {
        if (err) throw err;
        console.log('txt file saved');
    });
};

const js = (funct, fname) => {
    fs.writeFile(`./results/${fname}.js`, `const ${fname} = ${JSON.stringify(funct)}; module.exports = ${fname};`, (err) => {
        if (err) throw err;
        console.log('js file saved');
    });
};

const csv = (funct, fname) => {
    fs.writeFile(`./results/${fname}.csv`, funct.join(','), (err) => {
        if (err) throw err;
        console.log('csv file saved');
    });
};

module.exports = { json, txt, js, csv };