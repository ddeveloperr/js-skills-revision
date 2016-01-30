
// Animate your name or other text 

    var red = [0, 100, 63];
    var orange = [40, 100, 60];
    var green = [75, 100, 40];
    var blue = [196, 77, 55];
    var purple = [280, 50, 60];
    
    var myName = "Kemal WebDev";
    // You can also change it and print company name or other stuff
    //var companyName = "Google Inc."
    var letterColors = [blue, red, orange, blue, green];

    if (10 > 3) {
        bubbleShape = "circle";
    }
    else {
        bubbleShape = "square";
    }
    
    drawName(myName, letterColors);
    bounceBubbles();
    
    //drawName(companyName, letterColors);
    //bounceBubbles();
