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

// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
// console.log(missingNumber([3, 0, 1]), 2);

// Populate hash map with 0 to nums.length as the keys. set them all to 0

// loop though the nums array and add 1 to each key value

// return key with value == 0

var missingNumber2 = function (nums) {
  let hash = {};
  for (let i = 0; i <= nums.length; i++) {
    hash[i] = 0;
  }
  nums.forEach((num) => {
    hash[num] += 1;
  });

  // return key with value of 0
  for (let i in hash) {
    if (hash[i] === 0) return i;
  }
};

console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
console.log(missingNumber2([3, 0, 1]), 2);
