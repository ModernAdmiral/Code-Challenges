/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //  loop though the nums array "k" times
  //      pop element from end of the array and add to the beginning
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
