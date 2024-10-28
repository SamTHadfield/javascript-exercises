const repeatString = (string, num) => {
  if (num < 0) return "ERROR";
  let loopResult = "";
  for (let i = 0; i < num; i++) {
    if (i < num) {
      loopResult += string;
    }
  }
  return loopResult;
};

repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
