
//
var data = "name|phone|address";
var val = data.substring(5, 10);
console.log("Substring is " + val);

// You can omit the second index and substring will extract a string that starts at the
// first index and then continues until the end of the original string.

val = data.substring(5);
console.log("Substring is now " + val);
