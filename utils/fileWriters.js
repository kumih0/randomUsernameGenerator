const fs = require('fs');

//sep file writers for each file type
const json = (funct, fname) => {
    fs.writeFile(`../results/${fname}.json`, JSON.stringify(funct), (err) => {
        if (err) throw err;
        console.log('json file saved');
    });
};

const txt = (funct, fname) => {
    fs.writeFile(`../results/${fname}.txt`, funct.join('\n'), (err) => {
        if (err) throw err;
        console.log('txt file saved');
    });
};

const js = (funct, fname) => {
    fs.writeFile(`../results/${fname}.js`, `const ${fname} = ${JSON.stringify(funct)}; module.exports = ${fname};`, (err) => {
        if (err) throw err;
        console.log('js file saved');
    });
};

const csv = (funct, fname) => {
    fs.writeFile(`../results/${fname}.csv`, funct.join(','), (err) => {
        if (err) throw err;
        console.log('csv file saved');
    });
};

//helper funct for writing files instead 
const whichFiles = (answers, funct, fname) => {

    if (answers.includes('json')) {
        json(funct, fname);
    }
    if (answers.includes('txt')) {
        txt(funct, fname);
    }
    if (answers.includes('js')) {
        js(funct, fname);
    }
    if (answers.includes('csv')) {
        csv(funct, fname);
    }
};

module.exports = { json, txt, js, csv, whichFiles };