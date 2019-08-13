function trainStation(capacityStr, passengers) {
  let train = [];
  let capacity = Number(capacityStr);
  let remainingPassengers = 0;

  for (let passengerStr of passengers) {
    let passenger = Number(passengerStr);
    passenger += remainingPassengers;

    if (passenger <= capacity) {
      if (remainingPassengers === passenger) {
        remainingPassengers = 0;
      }
      train.push(passenger);
    } else {
      train.push(capacity);
      remainingPassengers = passenger - capacity;
    }
  }

  console.log(train);
  if (remainingPassengers !== 0) {
    console.log(`Could not fit ${remainingPassengers} passengers`)
  } else {
    console.log('All passengers aboard')
  }


}

trainStation(10, [9, 39, 1, 0, 0]);