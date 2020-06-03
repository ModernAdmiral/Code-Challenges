/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let pointer = 0;
  while (pointer < Math.floor(matrix.length / 2)) {
    let top = matrix[pointer];
    let bottom = matrix[matrix.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < matrix.length; i++) {
      left.unshift(matrix[i][pointer]);
    }
    for (let i = 0; i < matrix.length; i++) {
      right.unshift(matrix[i][matrix.length - 1 - pointer]);
    }
    console.log("top, bottom, left, right", top, bottom, left, right);

    matrix[0] = left;
    matrix[matrix.length - 1] = right;
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][matrix.length - 1 - pointer] = top[i];
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][pointer] = bottom[i];
    }
    pointer += 1;
  }

  return matrix;
};

// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
//   ]
// );

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]),
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]
);
