
// 
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
                console.log("Zoom, zoom!");
                } else {
                    console.log("You need to start engine first!");
                }
            }
    
    };

    fiat.start();
    fiat.drive();
    fiat.stop();
    fiat.drive();
    fiat.start();
    fiat.drive();
    