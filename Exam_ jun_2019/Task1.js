function caffeineStudy(days) {
  let result = 0;

  let coffeeCoffeine = 1.5 * 40;
  let cocaColaCoffeine = 2.5 * 8;
  let teaCoffeine = 3.5 * 20;
  let energyCoffeine = 5 * 30;

  let morningDrink = 3 * coffeeCoffeine;
  let lunchDrink = 2 * cocaColaCoffeine;
  let brunchDrink = 3 * teaCoffeine;
  let energyDrink = 3 * energyCoffeine;

  let dayDrinks = morningDrink + lunchDrink + brunchDrink;


  for (let day = 1; day <= days; day++) {
    result += dayDrinks;
    if (day % 5 === 0) {
      result += energyDrink;
    } else if (day % 9 === 0) {
      result = result + (4 * cocaColaCoffeine) + (2 * energyCoffeine);
    }
  }
  console.log(`${result} milligrams of caffeine were consumed`);
}

caffeineStudy(5);
caffeineStudy(8);