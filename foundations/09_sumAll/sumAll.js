function isPositiveInteger(num) {
    if (Number.isInteger(num) && num > 0) {
        return true
    }
    else {
        return false
    }
}

function sumAll(num1, num2) {

    let total = 0;

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    if (!isPositiveInteger(num1) || !isPositiveInteger(num2)) {
        return "ERROR"
    }
    else {
        for (let i = start; i <= end; i++) {
            total = total + i
        }
        return total
    }

};

console.log(sumAll(20, 5))


// Do not edit below this line
module.exports = sumAll;
