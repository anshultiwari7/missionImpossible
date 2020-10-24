var weatherExport = module.exports = {};

function Weather(weatherName, craterNumChange, availableTransport) {
  this.weatherName = weatherName;
  this.craterNumChange = craterNumChange;
  this.availableTransport = availableTransport;
}
// constructor for the weather.....


var weatherConditions = {};   //stores the weatherConditions....

var setWeather = function(weatherName, craterNumChange, availableTransport ) {

  var weather = new Weather(weatherName, craterNumChange, availableTransport);

  weatherConditions[weather.weatherName] = weather;
}
// set all the weather conditions....


//storing weather details....
setWeather('SUNNY', 0.1, ['CAR', 'BIKE', 'TUKTUK']);
setWeather('RAINY', 0.2, ['CAR', 'TUKTUK']);
setWeather('WINDY', 0, ['CAR', 'BIKE', 'TUKTUK']);

weatherExport.getWeather = function() {
  return weatherConditions;
}
// exports all the weather
