function removeFromArray(array, ...otherArguments) {

    let result = [];

    for (let i = array.length - 1; i>=0; i--) {
        
        if (otherArguments.includes(array[i])) {
            // doing nothing
        }

        else {
            result.unshift(array[i])
        }

    }

    return result

}

console.log(removeFromArray([1,2,3,4], 1))

// Do not edit below this line
module.exports = removeFromArray;
