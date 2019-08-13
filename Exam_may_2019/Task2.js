function plasmaGiants(plasma, sizeCut) {
  let firstPlasmaPieses = plasma.slice(0, plasma.length / 2);
  let secondPlasmaPieses = plasma.slice(plasma.length / 2);

  let firstGiantLife = 0;
  let secondGiantLife = 0;
  while (firstPlasmaPieses.length > 0 && secondPlasmaPieses.length > 0) {
    firstGiantLife += firstPlasmaPieses.splice(0, sizeCut).reduce((a, b) => a * b);
    secondGiantLife += secondPlasmaPieses.splice(0, sizeCut).reduce((a, b) => a * b);
  }
  //Fight
  let damagePerHit = Math.min(...plasma);
  let deadLine = Math.max(...plasma);
  let round = 1;
  if (damagePerHit !== 0) {
    while (firstGiantLife > deadLine && secondGiantLife > deadLine) {
      firstGiantLife -= damagePerHit;
      secondGiantLife -= damagePerHit;
      round++;
    }
  }

  //Print Result
  if (firstGiantLife === secondGiantLife) {
    console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
  } else if (firstGiantLife > secondGiantLife) {
    console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${round} rounds`);
  } else {
    console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${round} rounds`);
  }

}

plasmaGiants([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
plasmaGiants([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);