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
    const driverNameA = a.name;
    const driverNameB = b.name;

    return driverNameA.localCompare(driverNameB);
  }

  sortedDrivers.sort(comparator);

  return sortedDrivers;
}
