// C = (F - 32) × 5/9
// F = (C × 9/5) + 32




function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32)* 5/9
  return Number(celsius.toFixed(1))
}


function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32
  return Number(fahrenheit.toFixed(1))
};

console.log(convertToCelsius(-10))
console.log(convertToFahrenheit(37.8))


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
