/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (isNaN(parseInt(str))) return 0;
  else if (parseInt(str) < Math.pow(-2, 31)) return Math.pow(-2, 31);
  else if (parseInt(str) > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else return parseInt(str);
};
console.log(myAtoi("42"), 42);
console.log(myAtoi("   -42"), -42);
console.log(myAtoi("4193 with words"), 4193);
console.log(myAtoi("words and 987"), 0);
console.log(myAtoi("-91283472332"), -2147483648);
