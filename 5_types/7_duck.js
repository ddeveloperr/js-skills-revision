
function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

// create a new Duck and assign it to the toy variable

var toy = new Duck("quack quack");

// Call quack fn
toy.quack();

// give me a type
console.log(typeof toy); // it's object

// Check is toy instanceof Duck object
console.log(toy instanceof Duck); // YES it IS!