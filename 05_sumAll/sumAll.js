const sumAll = function (startNum, endNum) {
  let sum = 0;

  if (startNum < 0 || endNum < 0) {
    return "ERROR";
  } else if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
    return "ERROR";
  } else if (startNum < endNum) {
    for (let i = startNum; i <= endNum; i++) {
      sum += i;
    }
  } else if (startNum > endNum) {
    for (let i = startNum; i >= endNum; i--) {
      sum += i;
    }
  }
  return sum;
};
sumAll(100, 1);

// Do not edit below this line
module.exports = sumAll;
