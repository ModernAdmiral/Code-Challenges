/**
 * @param {string} s
 * @return {number}
 */

// Populate hashmap with letters (keys) and how many there are in the string as values
// loop though string and check if the value of that letter is 1. return key if so and break
var firstUniqChar = function (s) {
  let hash = {};
  index = -1;
  [...s].forEach((char) => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  });
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] == 1) {
      index = i;
      break;
    }
  }
  return index;
};
