// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driverObject) {
    console.log(driverObject.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driverObject) {
    if (driverObject.hometown === location) {
      console.log(driverObject.name);
    }
  });
}

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers];

  sortedDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });

  return sortedDrivers;
}

function driversByName(drivers) {
  const sortedDrivers = [...drivers];

  const comparator = function(a, b) {
    return a.localCompare(b);
  }

  sortedDrivers.sort(comparator);

  return sortedDrivers;
}
