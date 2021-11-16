// sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const sorted = num => num.toString().split("").sort();
  num1 = sorted(num1);
  num2 = sorted(num2);
  return num1.join("") === num2.join("");
}

module.exports = {
  sameFrequency,
};
