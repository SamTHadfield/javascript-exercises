const reverseString = function (str) {
  let newArr = str.split("");
  newArr.reverse();
  newStr = newArr.join("");
  return newStr;
};

reverseString("");
// Do not edit below this line
module.exports = reverseString;
