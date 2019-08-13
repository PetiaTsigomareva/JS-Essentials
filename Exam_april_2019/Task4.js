function autoService(input) {
  let carModelsInstructions = [];
  let carParts = {};

  for (let inputElement of input) {
    let commandRow = inputElement.split(' ');
    let command = commandRow[0];
    let carModel = commandRow[1];

    if (command === 'instructions') {
      carModelsInstructions.push(carModel);
    } else if (command === 'addPart') {
      let partName = commandRow[2];
      let serialNumber = commandRow[3];

      if (!carParts[carModel]) {
        carParts[carModel] = {};
      }

      if (!carParts[carModel][partName]) {
        carParts[carModel][partName] = [];
      }
      carParts[carModel][partName].push(serialNumber);
    } else if (command === 'repair') {
      let partsList = commandRow[2];

      //check if car has a instruction for repair!!!
      if (carModelsInstructions.includes(carModel)) {
        let parts = JSON.parse(commandRow[2]);

        for (let part in parts) {
          if (parts[part] === 'broken') {
            if (carParts[carModel][part]) {
              parts[part] = carParts[carModel][part][0];
              carParts[carModel][part].shift();
            }
          }
        }
        console.log(`${carModel} client - ${JSON.stringify(parts)}`);
      } else {
        console.log(`${carModel} is not supported`);
      }
    } else {
      console.log('Invald command provided->' + command);
    }
  }

  const orderedCarParts = {};
  Object.keys(carParts).sort().forEach(function (key) {
    orderedCarParts[key] = carParts[key];
  });

  for (let i in orderedCarParts) {
    console.log(i + ' - ' + JSON.stringify(orderedCarParts[i]));
  }
}

autoService([
  'repair mazda {"engine":"broken"}',
  'instructions bmw',
  'addPart opel engine GV1399SSS'
]);

autoService([
  'instructions bmw',
  'addPart opel engine GV1399SSS',
  'addPart opel transmission SMF556SRG',
  'addPart bmw engine GV1399SSS',
  'addPart bmw transmission SMF444ORG',
  'addPart opel transmission SMF444ORG',
  'instructions opel',
  'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
  'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
]);