function coffeeStorage() {
  let input = document.querySelector('textarea').value;
  let p = document.getElementsByTagName('p');
  let reportSection = p[0];
  let inspectionSection = p[1];

  let inputArr = JSON.parse(input);
  let brands = {};

  for (let element of inputArr) {
    let [command, coffeeBrand, coffeeName, expireDate, quantity] = element.split(', ');
    switch (command.toUpperCase()) {
      case 'IN':
        //  addCoffee(coffeeInfo);
        if (!brands[coffeeBrand]) {
          brands[coffeeBrand] = {};
        }
        if (!brands[coffeeBrand][coffeeName]) {
          brands[coffeeBrand][coffeeName] = {expireDate, quantity: Number(quantity)};
        }

        if (brands[coffeeBrand][coffeeName].expireDate === expireDate) {
          brands[coffeeBrand][coffeeName] = {expireDate, quantity: Number(quantity)};
        }
        if (brands[coffeeBrand][coffeeName].expireDate < expireDate) {
          brands[coffeeBrand][coffeeName] = {expireDate, quantity: Number(quantity)};
        }
        break;

      case 'OUT':
        if (brands[coffeeBrand] &&
          brands[coffeeBrand][coffeeName] &&
          brands[coffeeBrand][coffeeName].expireDate > expireDate &&
          brands[coffeeBrand][coffeeName].quantity >= Number(quantity)) {

          brands[coffeeBrand][coffeeName].quantity -= Number(quantity);
        }
        break;

      case'REPORT':
        Object.entries(brands).forEach(([coffeeBrand, coffeeName]) => {
          let arr = [];
          Object.entries(coffeeName).map(([name, information]) => {
            arr.push(`${name} - ${information.expireDate} - ${information.quantity}.`)

          });
          reportSection.innerHTML += `${coffeeBrand}: ${arr.join(' ')}` + '</br>';
        });
        break;

      case'INSPECTION':
        Object.entries(brands).sort((a, b) => a[0].localeCompare(b[0]))
          .forEach(([coffeeBrand, coffeeName]) => {
            let arr = [];
            Object.entries(coffeeName).sort((a, b) => b[1].quantity - a[1].quantity)
              .forEach(([name, information]) => {
                arr.push(`${name} - ${information.expireDate} - ${information.quantity}.`)

              });
            inspectionSection.innerHTML += `${coffeeBrand}: ${arr.join(' ')}` + '</br>';
          });
        break;
      default:
        alert("Invalided Command!");
        break;

    }
  }
}