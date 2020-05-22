/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // create a hash map for each array. key = number, value = count of numbers in array
  // iterate though hash maps and compare to each other.
  //     if key in hashA exists in hashB, push the min value * [key] into answer array
  let hashA = {};
  let hashB = {};
  let answer = [];
  nums1.forEach((num) => {
    hashA[num] == undefined ? (hashA[num] = 1) : (hashA[num] += 1);
  });
  nums2.forEach((num) => {
    hashB[num] == undefined ? (hashB[num] = 1) : (hashB[num] += 1);
  });
  for (let key in hashA) {
    if (hashA[key] && hashB[key]) {
      if (hashA[key] < hashB[key]) {
        for (let i = 0; i < hashA[key]; i++) answer.push(parseInt(key));
      } else {
        for (let i = 0; i < hashB[key]; i++) answer.push(parseInt(key));
      }
    }
  }
  return answer;
};
console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
