function displayTime() {
    var now = new Date();
      simply.text({
            title: "         " + now.getHours() + ":"
              + now.getMinutes()
              + ":" + now.getSeconds()
          }, false);
}

// Clear the screen
simply.text({}, true);

// FullScreen mode
simply.fullscreen(true);

// Display time now
displayTime();

// And update it every second
setInterval(displayTime, 10000);

// Fetch a Weather
ajax({ 
    url: 'http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco,us', 
    type: 'json' 
  }, 
  function(quote) {
    simply.text( { subtitle: country.sys, 
                   body: description.weather });
  }
);
simply.scrollable(true);
