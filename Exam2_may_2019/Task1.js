function coffeeMachine(orders) {
  const initPrice = 0.80;
  let totalOrderEarned = 0;
  for (let order of orders) {
    let drinkPrice = initPrice;

    let [coins, typeDrink, typeCoffee, milk, sugar] = order.split(', ');

    if (order.includes('decaf')) {
      drinkPrice += 0.10;
    }
    if (order.includes('milk')) {
      drinkPrice += 0.10;
    }
    if (Number(order.split(', ').pop()) > 0) {
      drinkPrice += 0.10;
    }
    let difference = Math.abs(drinkPrice - Number(coins));
    if (Number(coins) >= drinkPrice) {
      console.log(`You ordered ${typeDrink}. Price: ${drinkPrice.toFixed(2)}$ Change: ${difference.toFixed(2)}$`);
      totalOrderEarned += drinkPrice;
    } else if (Number(coins) < drinkPrice) {
      console.log(`Not enough money for ${typeDrink}. Need ${difference.toFixed(2)}$ more.`);
    }


  }
  console.log(`Income Report: ${totalOrderEarned.toFixed(2)}$`);

}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);