// const removeFromArray = function (arr, ...theArgs) {
//   const filtered = arr.filter(function (value) {
//     return !theArgs.includes(value);
//   });

//   return filtered;
// };

const removeFromArray = function (arr, ...theArgs) {
  const filtered = arr.filter(function (value) {
    return !theArgs.includes(value);
  });

  return filtered;
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Pseudocode
// create new array to store values
// Loop through original array and rest parameter array (theArgs)
// if numbers from original array are found within theArgs then 'continue'
// if numbers from original array are NOT found within theArgs, push them to the new array you have created

// callback function has three parameters: value, index, array

// Do not edit below this line
module.exports = removeFromArray;
