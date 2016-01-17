
 
// Call function from object. Note how "this" worfing.
    var fiat = {
        make: "Fiat",
        model: "500",
        year: 1957,
        color: "Medium Blue",
        passengers: 2,
        convertible: false,
        mileage: 88000,
        // Here's the property to hold the current
        // state of the engine (true if it is started and false if it is off).
        started: false,
        // added a new property, fuel, to hold the amount of fuel in the car.
        fuel: 0,
        // start the car
        start: function(){
            this.started = true;
            console.log("You just started engine!");
        },
        // stop the car
        stop: function(){
            this.started = false;
            console.log("You just stopped engine!")
        },
        drive: function() {
            if(this.started) {
                // check to make sure there’s fuel before we drive the car
                if(this.fuel > 0){
                    console.log(this.make + " " + this.model + " goes brrrrm, zooom, zooom!");
                    this.fuel = this.fuel -1;
                } else {
                    console.log("Uh oh, out of fuel man!");
                    this.stop();
                    
                }
                
            } else {
                console.log("You need to start the engine first!");
            }
        },
        // add fuel to the car    
        addFuel: function(amount) {
            this.fuel = this.fuel + amount;
        }
    
    };

    fiat.start();
    fiat.drive();
    fiat.addFuel(2);
    fiat.start();
    fiat.drive();
    fiat.drive();
    fiat.drive();
    fiat.stop();
    