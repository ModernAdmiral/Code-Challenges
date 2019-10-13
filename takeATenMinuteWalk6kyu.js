function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    west = 0;
    east = 0;
    north = 0;
    south = 0;
    walk.forEach(e => {
        if (e === "n") north += 1;
        if (e === "s") south += 1;
        if (e === "e") east += 1;
        if (e === "w") west += 1;
    })
    if (west - east === 0 && north - south === 0) return true;
    return false
  }


  //some test cases for you...
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
