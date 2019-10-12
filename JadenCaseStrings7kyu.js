String.prototype.toJadenCase = function () {
    //split words into their own array
    // map over array, returning capitalized first letter 
    // appending the rest of string 
    // return back to string with join
    
    return this.split(' ').map(e => `${e.charAt(0).toUpperCase()}${e.substr(1)}`).join(' ');

  };




var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
