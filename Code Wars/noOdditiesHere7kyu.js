function noOdds(values) {
  // Return all non-odd values
  let evens = [];
  values.forEach(e => e % 2 === 0 && evens.push(e));
  return evens;
}

console.log(noOdds([0, 1]), [0]);

console.log(noOdds([0, 1, 2, 3]), [0, 2]);
