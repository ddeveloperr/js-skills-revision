//

    var emot = " XOXxxOXOooo ";
    var hugs = 0;
    var kisses = 0;
    emot = emot.trim();
    console.log('emot after trim() : ' + emot);
    emot = emot.toUpperCase();
    console.log('emot after toUpperCase() : ' + emot);
    
    for(var i = 0; i < emot.length ; i++) {
        if (emot.charAt(i) === "X") {
            hugs++;
        console.log('hugs: ' + hugs);
        } else if (emot.charAt(i) == "O") {
            kisses++;
        console.log('kisses: ' + kisses);
        }
    }
    
    console.log("This is sum for all above: ");
    console.log('hugs: ' + hugs);
    console.log('kisses: ' + kisses);