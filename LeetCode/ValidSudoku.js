/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let status = true;
  // initiallize hash map 1-9

  let mainHash = {
    "1": 1,
    "2": 1,
    "3": 1,
    "4": 1,
    "5": 1,
    "6": 1,
    "7": 1,
    "8": 1,
    "9": 1,
    ".": 9,
  };
  // CHECK ROWS
  // nested loop through board.
  const checkRows = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // check if element is in main hash.
        if (mainHash[board[i][j]]) {
          mainHash[board[i][j]] -= 1;
        } else {
          status = false;
        }
        // if so, reduce by 1 on main hash
        // if not, set status to false
      }
      // reset main hash to equal fresh hash
      mainHash = {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 1,
        "8": 1,
        "9": 1,
        ".": 9,
      };
      // console.log(mainHash);
      // console.log(freshHash, "freshHash");
    }
  };
  const checkColumns = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (mainHash[board[j][i]]) {
          mainHash[board[j][i]] -= 1;
        } else {
          status = false;
        }
      }
      mainHash = {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 1,
        "8": 1,
        "9": 1,
        ".": 9,
      };
    }
  };

  // check one box
  const checkOneBox = (iStart, iEnd, jStart, jEnd) => {
    for (let i = iStart; i < iEnd; i++) {
      for (let j = jStart; j < jEnd; j++) {
        if (mainHash[board[i][j]]) {
          mainHash[board[i][j]] -= 1;
        } else {
          status = false;
        }
      }
    }
    mainHash = {
      "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "5": 1,
      "6": 1,
      "7": 1,
      "8": 1,
      "9": 1,
      ".": 9,
    };
  };
  // end is not inclusive
  checkRows();
  checkColumns();
  checkOneBox(0, 3, 0, 3);
  checkOneBox(0, 3, 3, 6);
  checkOneBox(0, 3, 6, 9);
  checkOneBox(3, 6, 0, 3);
  checkOneBox(3, 6, 3, 6);
  checkOneBox(3, 6, 6, 9);
  checkOneBox(6, 9, 0, 3);
  checkOneBox(6, 9, 3, 6);
  checkOneBox(6, 9, 6, 9);

  // Check boxes

  return status;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  true
);

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  false
);

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ]),
  false
);
