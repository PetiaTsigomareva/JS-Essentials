function tableFilter(matrix, command) {
  let commandParts = command.split(' ');
  let commandName = commandParts[0];
  let commandHeaderName = commandParts[1];
  let commandHeaderValue = '';
  if (commandName === 'filter') {
    commandHeaderValue = commandParts[2];
  }
  let headerIndex = matrix[0].findIndex(e => e === commandHeaderName);

  if (commandName === 'hide') {
    for (let e of matrix) {
      e.splice(headerIndex, 1);
      printTableRows(e);
    }
  }
  if (commandName === 'sort') {
    printTableRows(matrix[0]);
    let tableObjs = [];
    for (let row = 1; row <= matrix.length - 1; row++) {
      let [name, age, grade] = matrix[row];
      let currentObj = {'name': name, 'age': Number(age), 'grade': Number(grade)};
      tableObjs.push(currentObj);
    }

    tableObjs.sort((a, b) => a[commandHeaderName].localeCompare(b[commandHeaderName]))
    Object.values(tableObjs).forEach(v => {
        console.log(`${v.name} | ${v.age} | ${v.grade}`);
      }
    )

  }
  if (commandName === 'filter') {
    printTableRows(matrix[0]);
    for (let e of matrix) {
      if (e.includes(commandHeaderValue)) {
        printTableRows(e)
      }
    }


  }

  function printTableRows(row) {
    console.log(row.join(' | '));

  }

}

tableFilter([['name', 'age', 'grade'],
    ['Peter', '25', '5.00'],
    ['George', '34', '6.00'],
    ['Marry', '28', '5.49']],
  'sort name');

tableFilter([['firstName', 'age', 'grade', 'course'],
    ['Peter', '25', '5.00', 'JS-Core'],
    ['George', '34', '6.00', 'Tech'],
    ['Marry', '28', '5.49', 'Ruby']],
  'filter firstName Marry');