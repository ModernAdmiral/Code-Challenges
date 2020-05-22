/**
 * @param {number[]} digits
 * @return {number[]}
 */

// add one to last element in array

// loop though array going backwards starting at i
//     if array[length - i] === 9, set array[length - i] = 0
//      else, array[length - i] += 1, then end loop

var plusOne = function (digits) {
  let running = true;
  let i = 1;

  while (running) {
    if (i == digits.length && digits[digits.length - i] === 9) {
      digits[0] = 1;
      digits.push(0);
      running = false;
    } else if (digits[digits.length - i] === 9) {
      digits[digits.length - i] = 0;
      i++;
    } else {
      digits[digits.length - i] += 1;
      running = false;
    }
  }

  return digits;
};

// I need to come back and try a recursive solution to this

console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
console.log(plusOne([5, 9, 9, 9]), [6, 0, 0, 0]);
console.log(plusOne([9, 9], [1, 0, 0]));
console.log(plusOne([9], [1, 0]));
