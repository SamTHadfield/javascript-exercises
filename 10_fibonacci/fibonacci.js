// Testing function
// function fibonnaci(num) {
//   let currentValue = 0;
//   let a = 0;
//   let b = 1;

//   if (num < 0) {
//     return "OOPS";
//   } else if (typeof num === "string") Number(num);

//   for (let i = 2; i <= num; i++) {
//     currentValue = a + b;
//     a = b;
//     b = currentValue;
//   }

//   return currentValue;
// }

// fibonnaci("3");

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// Actual function below
const fibonacci = function (num) {
  let currentValue = 0;
  let a = 0;
  let b = 1;

  if (typeof num === "string") Number(num);
  if (num < 0) return "OOPS";
  if (num === "1") return 1;

  for (let i = 2; i <= num; i++) {
    currentValue = a + b;
    a = b;
    b = currentValue;
  }

  return currentValue;
};

// Pseudocode

// Make two "let" variables outside of the "for loop" so that their values can be added
// Set one variable to "0" and the other variable to "1" in order to
/// intialize the Fibonacci sequence.
// Create a for loop to iterate through numbers until they reach "n"
// Calculate addition within for loop and return value of "n"

// Do not edit below this line
module.exports = fibonacci;
