// Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

// EX here:
// [100, 80, 60, 70, 60, 75, 85]
// [1, 1, 1, 2, 1, 4, 6]

// My understanding of the instructions:

// How many *consecutive* days has the price been less than or equal to todays price?
// The indecies of the output array answers are respective to the input array.

var StockSpanner = function () {};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  return price;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner();
var param_1 = obj.next(price);
// Input
console.log(obj.next(price))[
  ("StockSpanner", "next", "next", "next", "next", "next", "next", "next")
][([], [100], [80], [60], [70], [60], [75], [85])];
