var expoFastVehicle = module.exports = {};
var dataWeather = require('../lib/Weather.js');
var dataOrbit = require('../lib/Orbits.js');
var dataVehicle = require('../lib/Vehicles.js')
var weatherConditions = dataWeather.getWeather();
var orbitCollection = dataOrbit.getOrbits();
var vehicleCollection = dataVehicle.getVehicles();

function leastVehicleTime(vehicle, orbit, weather) {
  var vehicleFastest = {};
  var leastTime = Infinity;
  var fastVehicle = '';
  for(var t in vehicle) {
    var checkVehicle = vehicle[t];
    for(var w = 0; w < weather.availableTransport.length; w++) {
      if(checkVehicle.vehicleName === weather.availableTransport[w]) {

        checkVehicle.VehicleTime(orbit, weather);
        fastVehicle = leastTime > checkVehicle.time ? checkVehicle.vehicleName : fastVehicle;
        leastTime = leastTime > checkVehicle.time ? checkVehicle.time : leastTime;
      }
    }
  }
  vehicleFastest.fastName = fastVehicle;
  vehicleFastest.fastTime = leastTime;
  return vehicleFastest;
}

expoFastVehicle.perfectVehicle = function(orbitName, trafficSpeed, weather) {
  var orb = orbitCollection[orbitName];
  orb.orbitTraffic = trafficSpeed;
  var inputWeather = weatherConditions[weather];
  orb.craterCalculation(inputWeather);
  var chosenVehicle = leastVehicleTime(vehicleCollection, orb, inputWeather);
  return chosenVehicle;
}