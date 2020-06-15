/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = []; // declare our array where we will store answers
  dp[0] = 1; // *base case* for the 0th block, there is only one way to go 0 steps
  dp[1] = 1; // *base case* for the 1st block, there is only one way to go 1 step
  // Now solve the rest of the steps until n
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let memo = {}; // memoize means "to remember"
var climbStairsRecursive = function (n) {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  if (n === 1) return 1;
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
};

console.log(climbStairs(2), 2);
console.log(climbStairs(6), 13); // [1, 1, 2, 3, 5, 8, 13]
