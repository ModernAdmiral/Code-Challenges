function highAndLow(numbers) {
  // ...
  numbers = numbers.split(" ").map(e => parseInt(e));
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
