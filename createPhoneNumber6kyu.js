function createPhoneNumber(numbers){
  let arr = numbers.map(e => e.toString());
  arr.unshift("(");
  arr.splice(4, 0, ")");
  arr.splice(8, 0, "-");
  arr.splice(5, 0, " ");
  return arr.join('');

}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");