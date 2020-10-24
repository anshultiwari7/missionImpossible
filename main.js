var analysis = require('./calculation/bestVehicle.js');
function bestOrbit(weather, trafficSpeed1, trafficSpeed2) {
  route1 = 'ORBIT1';
  route2 = 'ORBIT2';
  var vehicleSpeedOrbit1 = analysis.perfectVehicle(route1, trafficSpeed1, weather);
  var vehicleSpeedOrbit2 = analysis.perfectVehicle(route2, trafficSpeed2, weather);
  if(vehicleSpeedOrbit1.fastTime < vehicleSpeedOrbit2.fastTime) {
    return vehicleSpeedOrbit1.fastName + " " + route1;
  }
  return vehicleSpeedOrbit2.fastName + " " + route2;
}
var fs = require('fs');
var readline = require('readline');
var rd = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    console: true
});

rd.on('line', function(line) {
  var input = line.split(" ");
  console.log('INPUT: ' + line);
  console.log('OUTPUT: ' + bestOrbit(input[0], parseInt(input[1]), parseInt(input[2])));
});