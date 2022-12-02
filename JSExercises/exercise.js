const findDifference = (num1, num2) => {
    return (num1 - num2);
}

const productOfTwo = (num1, num2) => {
    return (num1 + num2);
}

const dayOfWeek = (num) => {
    const Days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    };

    return Days[num];
}

function returnLast(arr) {
    return arr[arr.length - 1];
}

function greaterNum(num1, num2) {
    return num1 === num2 ? 'Numbers are equal' : num1 > num2 ? 'First is greater' : 'Second is greater';
}

function appearInWord(sentence, letter) {
    let sToLower = sentence.toLowerCase();
    let counter = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sToLower[i] == letter.toLowerCase()) {
            counter++;
        }
    }
    return counter;
}

// practice with 
function multipleLetterCount(word) {
    let map = new Map();

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (map.has(char)) {
            let value = map.get(char);
            map.set(char, ++value);
        }
        else {
            map.set(char, 1);
        }
    }

    return Object.fromEntries(map);
}

//using forEach
const multipleLetterCount2 = () => {
    let counts = {};

    word.split('').forEach(char => {
        counts[char] = counts[char] ? ++ counts[char] : 1;
    })
    return counts;
}


function arrayManipulation(arr, command, location, value) {
    if (((value === undefined || value === null) && command === 'add')) {
        alert("In order to add you must pass a value");
    }
    else if(arr.length === 0){
        alert("Please pass a valid array.");
    }
    else if(location != 'beginning' && location != 'end'){
        alert("Must pass a valid location 'beginning' or 'end'")
    }
    else {
        result = (command === 'remove') ? removeFrom(arr, location) : addToArray(arr,location, value);
    }
    return result;
}

const addToArray = (arr, location, value) => {
    (location === 'end') ? arr.push(value) : arr.unshift(value);
    return arr;
};

const removeFrom = (arr, location) => {
    return (location === 'end') ? arr.pop(): arr.shift();
}


const isPalindrome = (str) => {
    let reversePorfavor = str.split('').reverse().join('');
    return (str === reversePorfavor);
}


console.log(isPalindrome('tacocat'));


// console.log(findDifference(100, 50));
// console.log(productOfTwo(2, 2));
// console.log(productOfTwo(0, 2));
// console.log(dayOfWeek(1));
// console.log(dayOfWeek(2));
// console.log(returnLast([1, 2, 3, 4]));
// console.log(greaterNum(1, 1));
// console.log(greaterNum(2, 1));
// console.log(greaterNum(1, 2));
// console.log(appearInWord('amazing', 'A'));
// console.log(appearInWord('Rithm School', 'o'))
// console.log(multipleLetterCount("hello"));


// console.log(arrayManipulation([1,2,3], "remove", "end"))
// console.log(arrayManipulation([1,2,3], "remove", "beginning"))
// console.log(arrayManipulation([1,2,3], "add", "beginning", 20))
// console.log(arrayManipulation([1,2,3], "add", "end", 30))


