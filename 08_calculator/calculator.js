const add = function (firstNumber, secondNumber) {
  let total = 0;
  total = firstNumber + secondNumber;
  return total;
};

const subtract = function (firstNumber, secondNumber) {
  let total = 0;
  total = firstNumber - secondNumber;
  return total;
};

const sum = function (arr) {
  let total = 0;
  arr.map((value) => (total += value));
  return total;
};

const multiply = function (arr) {
  let total = 1;
  arr.map((value) => (total *= value));
  return total;
};

const power = function (number, exponent) {
  let total = number ** exponent;
  return total;
};

const factorial = function (num) {
  if (num === 0) return 1;

  let total = 1;
  for (let i = num; i >= 1; i--) {
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
  factorial,
};
