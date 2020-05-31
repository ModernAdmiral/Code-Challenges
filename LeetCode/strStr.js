/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  // check if haystack includes needle and if so, return index where it starts
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

// LOL you can just do this:

var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};
