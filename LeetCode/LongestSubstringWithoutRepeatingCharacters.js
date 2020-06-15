/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // iterate though string, length - 1
  // initialize storage array = []
  // initialize max length count
  // push i into storage array
  // inner loop
  // if j is in the storage array
  // max length count == storage array length
  // break
  // else add j into storage array

  // return max length count

  let maxCounts = [];
  if (s === "") {
    return 0;
  } else if (s.length === 1) {
    return 1;
  } else if (s.length === 2) {
    if (s[0] === s[1]) return 1;
    else return 2;
  }
  for (let i = 0; i < s.length - 1; i++) {
    let storage = [];
    storage.push(s[i]);
    for (let j = i + 1; j <= s.length; j++) {
      //   console.log(storage, "storage");
      if (storage.includes(s[j]) || s[j] === undefined) {
        maxCounts.push(storage.length);
        break;
      } else {
        storage.push(s[j]);
      }
    }
  }
  //   console.log(maxCounts);
  return Math.max(...maxCounts);
};

console.log(lengthOfLongestSubstring("abcabc"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
console.log(lengthOfLongestSubstring("aa"), 1);
console.log(lengthOfLongestSubstring("ac"), 2);
console.log(lengthOfLongestSubstring("aab"), 2);
