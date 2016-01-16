 var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1999,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 10001
 };
 
 //..Second object
 
 var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
 };

// Third object

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
 };


// Fourth object 

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};


 function prequal(car) {
    if (car.mileage > 10000) {
        return false;
   }    else if (car.year > 2000) {
            return false;
  }
        return true;
 }
 
 
 // test it with those are objects and see results
 
var worthALook = prequal(fiat);
    if (worthALook) {
        console.log("You gotta check out this " + fiat.make + " " + fiat.model);
  } else {
        console.log("You should really pass on the " + fiat.make + " " + fiat.model);
  }