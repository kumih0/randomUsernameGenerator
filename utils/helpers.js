//creating general randomizing functions that are frequently used

//random array item
const getRandomArrayItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

//check for redundancies function
const checkRepeats = (array1, array2, item) => {
    const parentArray = array1;
    const stringyArray = array1.toString();
    const itemsArray = array2;
    let checkItem = item;

    if(stringyArray.includes(checkItem)) {
        checkItem = getRandomArrayItem(itemsArray);
        console.log('checking');
        return checkRepeats(parentArray, itemsArray, checkItem);
    } else {
        console.log('no repeats babez')
        return checkItem;
    }
};

//random date function
const randomDate = () => {
    const date = new Date();
    const randomNumberOfDays = Math.floor(Math.random() * 365);

    date.setDate(date.getDate() - randomNumberOfDays);
    return date;
};

//more generating random funct...

module.exports = {getRandomArrayItem, checkRepeats, randomDate};