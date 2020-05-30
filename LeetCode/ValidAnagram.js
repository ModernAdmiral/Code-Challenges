/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let status = true;
  sHash = {};
  tHash = {};
  // if lengths arent equal, status is false
  if (s.length !== t.length) {
    status = false;
  } else {
    // Create a hash for each string counting up total charaters
    [...s].forEach((char) => {
      if (sHash[char]) {
        sHash[char] += 1;
      } else {
        sHash[char] = 1;
      }
    });
    [...t].forEach((char) => {
      if (tHash[char]) {
        tHash[char] += 1;
      } else {
        tHash[char] = 1;
      }
    });
    // Now check if hash maps are equal
    let sKeys = Object.keys(sHash);
    for (let i = 0; i < sKeys.length; i++) {
      if (sHash[sKeys[i]] !== tHash[sKeys[i]]) {
        status = false;
      }
    }
  }
  return status;
};

console.log(isAnagram("anagram", "anagram"), true);
