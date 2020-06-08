/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
  if (sorted.length === 1 && sorted[0] === 0) {
    return 1;
  } else if (sorted.length === 1 && sorted[0] === 1) {
    return 0;
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (sorted[i + 1] !== sorted[i] + 1) {
        return sorted[i] + 1;
      }
    }
  }
  if (sorted[0] === 0) return sorted[sorted.length - 1] + 1;
  if (sorted[0] === 1) return sorted[0] - 1;
};
