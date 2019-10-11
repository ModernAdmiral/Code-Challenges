function getCount(str) {
    var vowelsCount = 0;
    [...str].forEach(e => {
        if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u') {
            vowelsCount += 1;
        }
    })
  
    
    return vowelsCount;
  }





console.log(getCount("abracadabra"), 5)
