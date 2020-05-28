/**
 * @param {number} x
 * @return {number}
 */

// initialize "isNegative to false"
// check if number is negative. if so, set isNegative to true

// convert to string
// reverse string
// convert to integer
// if isNegative is true, multiply integer by -1
var reverseInt = function (x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }
  x = Math.abs(parseInt(x.toString().split("").reverse().join("")));
  if (isNegative) {
    x = x * -1;
  }
  if (x > Math.pow(2, 31) || x < Math.pow(2, 31) * -1) {
    x = 0;
  }
  return x;
};

console.log(reverseInt(123, 321));
console.log(reverseInt(-123, -321));
console.log(reverseInt(120, 21));
