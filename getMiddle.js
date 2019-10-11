function getMiddle(s) {
    // convert string to array
    // If array.length is odd, return index value at (array.length - 1) / 2
    // if array/length is even, return index value at (array.length / 2) && (array.length / 2) -1

    s = [...s];
    if (s.length % 2 === 1) return s[(s.length - 1) / 2];
    else return `${s[(s.length / 2) -1]}${s[(s.length / 2)]} `;
}




console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));