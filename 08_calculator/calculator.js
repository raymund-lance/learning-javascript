const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(totalSum = []) {
  // let total = 0;
	// for(let i = 0; i < totalSum.length; i++) {
  //   total += totalSum[i];
  // }
  // return total;
  let totalReduce = totalSum.reduce((total, item) => {
    return total += item;
  }, 0)
  return totalReduce;
};

const multiply = function(totalMultiply = []) {
  let totalReduce = totalMultiply.reduce((total, items) => {
    return total *= items;
  }, 1)
  return totalReduce;
};

const power = function(numOne, numTwo) {
  return Math.pow(numOne, numTwo);
};

const factorial = function(factorial) {
  let total = 1;
	for(let i = 1; i <= factorial; i++) {
     total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
