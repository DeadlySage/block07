/*
psudocode:

create 3 non constant variable, named keyOne, keyTwo and keyThree

use addition operations to result in 10, in a for loop iterate i <= 10

use multiplication to result in 40 = 4 * 10

use subtration operations to result in 39 = 40 - 1

display resulting keys in the format xx-xx-xx in an alert popup

*/

// function to return the first key
function getKeyOne() {
    let keyOne = 0;
    
    for (let i = 0; i < 10; i++) {
        keyOne = keyOne + 1;
    }

    return keyOne
}

// function to return the second key
function getKeyTwo() {
    let keyTwo = 0;

    keyTwo = 4;
    keyTwo *= 10;

    return keyTwo
}

// function to return the third key
function getKeyThree() {
    let keyThree = 0;

    keyThree = 40;
    keyThree -= 1;

    return keyThree
}

// combine the 3 keys into one variable
let combinedKey = `${getKeyOne()} - ${getKeyTwo()} - ${getKeyThree()}`
document.getElementById("test").innerHTML = combinedKey;