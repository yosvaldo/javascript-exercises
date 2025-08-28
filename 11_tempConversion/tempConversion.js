const convertToCelsius = function(fahrenheit) {
  let cel;
  cel = (fahrenheit - 32) * 5 / 9;
  var celcius = Math.round(cel * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  let fah;
  fah = celcius * 9 / 5 + 32;
  var fahrenheit = Math.round(fah * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
