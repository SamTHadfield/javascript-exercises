// Pseudocode
// - Loop through array and place Name and Age into new object
// - Need to subtract the yearofBirth from the yearOfDeath
/// - before placing in the object
// - Need to sort finding and return the name with the highest age.

const findTheOldest = function (people) {
  const newArr = people
    .map((person) => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      }
      person.age = person.yearOfDeath - person.yearOfBirth;
      return person;
    })
    .sort((a, b) => b.age - a.age);
  return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
