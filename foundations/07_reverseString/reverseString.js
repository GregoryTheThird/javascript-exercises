function reverseString(str) {
    let reversedOutput = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedOutput = reversedOutput + str[i]
    }
    return reversedOutput
};

console.log(reverseString("Hello World!"))

// Do not edit below this line
module.exports = reverseString;
