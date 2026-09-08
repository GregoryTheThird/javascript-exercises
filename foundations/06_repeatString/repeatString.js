const repeatString = function (string, num) {
    
    if (num < 0) return "ERROR";
        let originalString = "";
    for (let i = 0; i < num; i++) {
        originalString += string;
    }
    return originalString;
};

// Do not edit below this line
module.exports = repeatString;
