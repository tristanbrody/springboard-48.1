// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// add whatever parameters you deem necessary

function isSubsequence(str1, str2, found = 0) {
  for (const char of str2) {
    let str1Val =
      str1[found] !== undefined ? str1[found] : str1[str1.length - 1];
    found = char === str1Val ? found + 1 : found;
    if (found === str1.length) return true;
  }
  return false;
}

module.exports = {
  isSubsequence,
};
