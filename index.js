// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driverObject) {
    console.log(driverObject.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driverObject) {
    if (driverObject.hometown === location) {
      console.log(driverObject.name);
    }
  }
}
