/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// loop though nums array nums.length times,
// if the element == 0, remove element and push element to end of array. i--

var moveZeroes = function (nums) {
  let i = -1; // we need our own iterator that increments only when we want it to. Starts at -1 bc we increment it first thing
  for (let times = 0; times <= nums.length; times++) {
    i++;
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--; // this prevents us from skipping too far forward during removal
    }
  }
};
