//

    var phrase = "the cat in the hat";

// Here's the string we're going to
// call indexOf on.
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);

// And our goal is to find the first
// occurence of “cat" in phrase.
// The index of the first cat is returned.

index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index);

// You can also add a second argument, which is
// the starting index for the search.

index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index);

// Note if the string can't be found, then -1 is
// returned as the index.