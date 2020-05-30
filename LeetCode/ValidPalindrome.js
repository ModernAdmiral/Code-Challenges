/**
 * @param {string} s
 * @return {boolean}
 */

// trim down string to only alphanumeric character

// compare reverse of modified string to non-reversed modified string
var isPalindrome = function (s) {
  res = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (res.split("").reverse().join("") === res) {
    return true;
  } else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("race a car"), false);
