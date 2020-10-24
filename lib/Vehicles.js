var vehicleExport = module.exports = {};

function Vehicles(vehicleName, vehicleSpeed, vehicleTimePerCrater, time) {
  this.vehicleName = vehicleName;
  this.vehicleSpeed = vehicleSpeed;
  this.vehicleTimePerCrater = vehicleTimePerCrater;
  this.time = time;
} //constructor for the available Vehicles......

Vehicles.prototype.VehicleTime = function(orbit, weather) {
  if(orbit.orbitTraffic <= this.vehicleSpeed) {
    this.time = (orbit.orbitDistance / orbit.orbitTraffic) + ((this.vehicleTimePerCrater * orbit.numberOfCraters) / 60);
  }
  else {
    this.time = (orbit.orbitDistance / this.vehicleSpeed) + ((this.vehicleTimePerCrater * orbit.numberOfCraters) /60);
  }
  return this.time;
}
// constructor method for the vehicles


var vehicleCollection = {};

var setVehicle = function(vehicleName, vehicleSpeed, vehicleTimePerCrater, time) {

  var vehicle = new Vehicles(vehicleName, vehicleSpeed, vehicleTimePerCrater, time);

  vehicleCollection[vehicle.vehicleName] = vehicle;
} // set all the vehicle details.....

setVehicle('BIKE', 10, 2, 0);
setVehicle('TUKTUK', 12, 1, 0);
setVehicle('CAR', 20, 3, 0);

vehicleExport.getVehicles = function() {
  return vehicleCollection;
}