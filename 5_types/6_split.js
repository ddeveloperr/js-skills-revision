
// Split uses the delimiter to
// break the original string into
// pieces, which are returned in an array.

var data = "name|phone|address"; 
var vals = data.split("|");
console.log("split array is ", vals);

/*Notice here we’re passing two
arguments to console.log separated
by a comma. This way, the vals array
doesn’t get converted to a string
before it’s displayed in the console.*/

