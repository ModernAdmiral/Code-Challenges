function findShort(s){
    //split string into words
    // create empty length array
    // push length of each word into empty array
    // return the Math.min of numbers in array.
    //
    lengths = [];
    s = s.split(' ');
    s.forEach(e => lengths.push(e.length))

    return Math.min(...lengths);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 