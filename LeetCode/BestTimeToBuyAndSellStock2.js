/**
 * @param {number[]} prices
 * @return {number}
 */

// hold a current low initialized to prices[0]
// hold current profit
// loop though array
//      if prices[i] <= low, add  set new low to price
//      else add the difference to profit and set this value to new low

var maxProfit = function (prices) {
  let low = prices[0];
  let profit = 0;
  prices.forEach((price) => {
    if (price <= low) {
      low = price;
    } else {
      profit += price - low;
      low = price;
    }
  });
  return profit;
};

// O(n) time complexity. One pass solution

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
console.log(maxProfit([1, 2, 3, 4, 5]), 4);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
