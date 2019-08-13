function spaceshipCrafting() {

  let titaniumCore = Math.round(Number(document.getElementById('titaniumCoreFound').value));
  let aluminumCore = Math.round(Number(document.getElementById('aluminiumCoreFound').value));
  let magnesiumCore = Math.round(Number(document.getElementById('magnesiumCoreFound').value));
  let carbonCore = Math.round(Number(document.getElementById('carbonCoreFound').value));
  let lossesPercent = Math.round(Number(document.getElementById('lossesPercent').value));


  let coreCount = 4;
  let percentForEacCore = lossesPercent / coreCount;
  titaniumCore -= (titaniumCore * percentForEacCore / 100);
  titaniumCore = Math.round(titaniumCore);

  aluminumCore -= (aluminumCore * percentForEacCore / 100);
  aluminumCore = Math.round(aluminumCore);

  magnesiumCore -= (magnesiumCore * percentForEacCore / 100);
  magnesiumCore = Math.round(magnesiumCore);

  carbonCore -= (carbonCore * percentForEacCore / 100);
  carbonCore = Math.round(carbonCore);

  let titaniumBarPrice = 25;
  let aluminumBarPrice = 50;
  let magnesiumBarPrice = 75;
  let carbonBarPrice = 100;

  let titaniumBar = Math.round(titaniumCore / titaniumBarPrice);
  let aluminumBar = Math.round(aluminumCore / aluminumBarPrice);
  let magnesiumBar = Math.round(magnesiumCore / magnesiumBarPrice);
  let carbonBar = Math.round(carbonCore / carbonBarPrice);

  let theUndefinedShip = 0;
  let nullMaster = 0;
  let jsonCrew = 0;
  let falseFleet = 0;
  let done = 0;

  while (done === 0) {
    if (titaniumBar >= 7 && aluminumBar >= 9 && magnesiumBar >= 7 && carbonBar >= 7) {
      theUndefinedShip++;
      titaniumBar -= 7;
      aluminumBar -= 9;
      magnesiumBar -= 7;
      carbonBar -= 7;
    }

    if (titaniumBar >= 5 && aluminumBar >= 7 && magnesiumBar >= 7 && carbonBar >= 5) {
      nullMaster++;
      titaniumBar -= 5;
      aluminumBar -= 7;
      magnesiumBar -= 7;
      carbonBar -= 5;
    }

    if (titaniumBar >= 3 && aluminumBar >= 5 && magnesiumBar >= 5 && carbonBar >= 2) {
      jsonCrew++;
      titaniumBar -= 3;
      aluminumBar -= 5;
      magnesiumBar -= 5;
      carbonBar -= 2;
    }

    if (titaniumBar >= 2 && aluminumBar >= 2 && magnesiumBar >= 3 && carbonBar >= 1) {
      falseFleet++;
      titaniumBar -= 2;
      aluminumBar -= 2;
      magnesiumBar -= 3;
      carbonBar -= 1;

    }
    if (titaniumBar < 2 || aluminumBar < 2 || magnesiumBar < 3 || carbonBar < 1) {
      done = 1;
    }

  }
  let availableBarsPar = document.querySelector('#availableBars p');
  availableBarsPar.textContent = `${titaniumBar} titanium bars, ${aluminumBar} aluminum bars, ${magnesiumBar} magnesium bars, ${carbonBar} carbon bars`;
  let buildSpaceships = document.querySelector('#builtSpaceships p');
  let buildSpaceshipsText = function (theUndefinedShipCount, nullMasterCount, jsonCrewCount, falseFleetCount) {
    let resultText = '';
    if (theUndefinedShipCount > 0) {
      resultText += `${theUndefinedShipCount} THE-UNDEFINED-SHIP,`;
    }
    if (nullMasterCount > 0) {
      resultText += `${nullMasterCount} NULL-MASTER,`;
    }
    if (jsonCrewCount > 0) {
      resultText += `${jsonCrew} JSON-CREW,`;
    }
    if (falseFleetCount > 0) {
      resultText += `${falseFleet} FALSE-FLEET`;
    }
    return resultText;
  };

  buildSpaceships.textContent = buildSpaceshipsText(theUndefinedShip, nullMaster, jsonCrew, falseFleet);


}