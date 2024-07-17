const convertToCelsius = function(cel) {
    let convert = 0;
    convert = (cel - 32) * (5/9);
    convert = Math.round(convert * 10) / 10;
    return convert
};

const convertToFahrenheit = function(fahr) {
  let convert = 0;
  convert = (fahr * 9/5) + 32;
  convert = Math.round(convert * 10) / 10;
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
