function trainStation(wagonCapacityStr, passengersToEnter) {
  let wagonCapacity = Number(wagonCapacityStr);
  let trainWagons = [];
  let remainingPassengersFromPreviousWagon = 0;

  passengersToEnter.forEach(function (element) {
    let passengersToEnter = Number(element);

    if (passengersToEnter === wagonCapacity) {
      trainWagons.push(passengersToEnter);
    } else if (passengersToEnter < wagonCapacity) {
      if (remainingPassengersFromPreviousWagon > 0) {
        let availableSeats = wagonCapacity - passengersToEnter;
        if (remainingPassengersFromPreviousWagon >= availableSeats) {
          trainWagons.push(passengersToEnter + availableSeats);
          remainingPassengersFromPreviousWagon -= availableSeats;
        } else {
          trainWagons.push(passengersToEnter + remainingPassengersFromPreviousWagon);
          remainingPassengersFromPreviousWagon = 0;
        }
      } else {
        trainWagons.push(passengersToEnter);
      }
    } else {
      trainWagons.push(wagonCapacity);
      remainingPassengersFromPreviousWagon += passengersToEnter - wagonCapacity;
    }
  });

  console.log(trainWagons);
  if (remainingPassengersFromPreviousWagon > 0) {
    console.log(`Could not fit ${remainingPassengersFromPreviousWagon} passengers`);
  } else {
    console.log('All passengers aboard');
  }
}

trainStation(10, [9, 39, 1, 0, 0]);

trainStation(6, [5, 15, 2]);