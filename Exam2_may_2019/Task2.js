function atmMachine(matrix) {
  let totalCashInATM = 0;
  let cashInATM = [];

  for (let row of matrix) {
    if (row.length > 2) {
      //Insert
      let insertedCash = 0;
      for (let banknote of row) {
        insertedCash += Number(banknote);
        cashInATM.push(banknote);
      }
      totalCashInATM += insertedCash;
      console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`)
    }
    if (row.length === 2) {
      //Withdraw
      let currentAccountBalance = Number(row[0]);
      let withdrawMoney = Number(row[1]);
      if (currentAccountBalance < withdrawMoney) {
        console.log(`Not enough money in your account. Account balance: ${currentAccountBalance}$.`)
      } else {
        if (totalCashInATM < withdrawMoney) {
          console.log(`ATM machine is out of order!`);
        } else {
          cashInATM = cashInATM.sort((a, b) => b - a);
          let sum = 0;
          for (let i = 0; i < cashInATM.length; i++) {
            if (sum === withdrawMoney) {
              break;
            }
            if (sum + Number(cashInATM[i]) <= withdrawMoney) {
              sum += +cashInATM.splice(i, 1);
              i--;

            }

          }
          currentAccountBalance -= sum;
          totalCashInATM -= sum;

          console.log(`You get ${withdrawMoney}$. Account balance: ${currentAccountBalance}$. Thank you!`)
        }

      }
    }
    if (row.length === 1) {
      //Report
      let banknote = row[0];
      let banknoteCount = 0;
      // let banknoteCount = cashInATM.filter(b => b === banknote);
      for (let b of cashInATM) {
        if (b === banknote)
          banknoteCount++;
      }
      console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`)

    }
  }
}

atmMachine([[20, 5, 100, 20, 1],
  [457, 25],
  [1],
  [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
  [20, 85],
  [5000, 4500],
])