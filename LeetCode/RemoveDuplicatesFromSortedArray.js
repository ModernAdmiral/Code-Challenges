//  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
//  Understand:
//  Remove duplicates in a sorted array without adding another array to the space. Modify the original array

var removeDuplicates = function (nums) {
  //  Need two pointers. One to keep track of current index, and one to point at the the unique elements
  //     initialize index pointer at 0 and unique pointer at None
  //     loop though list while unique number is not equal to
  //     if value of current index is !== unique pointer, set unique pointer to current index value.
  // then iterate index pointer + 1
  //     if value of current index is == unique pointer, remove the current element and do not iterate index pointer
  let last = null;
  let index = 0;
  const end = nums[nums.length];
  while (last !== end && nums[index] !== undefined) {
    if (nums[index] == last) {
      nums.splice(index, 1);
    }
    if (nums[index] != last) {
      last = nums[index];
      index += 1;
    }
  }
};
