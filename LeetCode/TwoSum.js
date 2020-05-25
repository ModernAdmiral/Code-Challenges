/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// BRUTE FORCE METHOD:

// Loop though the nums array with two pointers
//  i and j, to cover each possible combonation.
// once the combo is found to add up to the target, return those numbers
var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      //make sure we arent checking against the same number
      if (j !== i) {
        if (nums[j] + nums[i] === target) {
          answer.push(i, j);
          break; // break so we dont get repeated numbers
        }
      }
    }
    if (answer.length !== 0) break; // break for no repeats
  }
  return answer;
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([2, 5, 5, 11], 10), [1, 2]);
