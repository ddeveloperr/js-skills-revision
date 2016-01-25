// This part of code is responsible for desktop notification :)

function notifyMe(title, options) {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(title, options);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(title, options);
      }
    });
  }
}


var title = "ddeveloperr's Notification";
var options = {
  body: "ddeveloperrs Notification Body",
  icon: "http://i.imgur.com/7RdS6AH.png"
}
notifyMe(title, options);