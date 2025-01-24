const palindromes = function (str) {
  const splitStr = str.split("");
  const filtered = splitStr.filter((char) => {
    if (char !== "!" && char !== " " && char !== "." && char !== ",")
      return char;
  });
  const lowerCasedArr = filtered.map((item) => item.toLowerCase());
  const lowerCasedStr = lowerCasedArr.join("");

  const reversedArr = lowerCasedArr.reverse();
  const reversedStr = reversedArr.join("");

  if (lowerCasedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
