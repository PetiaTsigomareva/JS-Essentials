function solve() {

  let inputField = document.getElementsByTagName('input')[0];
  let addButton = document.getElementsByTagName('button')[0];
  let resultDataBase = document.getElementsByTagName('li');

  let convertFirstLetter = function (arr) {
    let result = [];
    for (let element of arr) {
      element = element.charAt(0).toUpperCase().concat(element.substr(1).toLowerCase());
      result.push(element);

    }
    return result;
  };
  let addNameToDataBase = function (arr) {
    for (let element of arr) {
      if (element !== '') {
        let dataBaseIndex = element.charCodeAt(0) - 65;
        if (resultDataBase[dataBaseIndex].textContent !== '') {
          resultDataBase[dataBaseIndex].textContent = resultDataBase[dataBaseIndex].textContent + ", " + element;
        } else {
          resultDataBase[dataBaseIndex].textContent += element;
        }
      }
    }
  };
  let getNames = function () {
    let inputs = inputField.value.split(' ');
    let names = convertFirstLetter(inputs);

    addNameToDataBase(names);

    inputField.value = '';

  };
  addButton.addEventListener('click', getNames);

}