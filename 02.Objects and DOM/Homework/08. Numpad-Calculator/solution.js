function solve() {
  const expressionPattern = '^([1-9]*[0-9](\\.[0-9]+)?) *([+\\-*\\/]) *([1-9]*[0-9](\\.[0-9]+)?)$';
  const operationPattern = '[+\\-*\\/]';

  let expressionElement = document.getElementById('expressionOutput');
  let resultElement = document.getElementById('resultOutput');
  let buttonElements = document.getElementsByTagName('button');
  for (let button of buttonElements) {
    button.addEventListener('click', function (event) {
      let currentClickedButton = event.target;
      let currentClickedButtonVal = currentClickedButton.getAttribute('value');

      if (currentClickedButtonVal === 'Clear') {
        clear(currentClickedButtonVal);
      } else if (currentClickedButtonVal === '=') {
        let currentExpression = expressionElement.textContent;
        equal(currentExpression);
      } else if (currentClickedButtonVal.match(operationPattern) != undefined) {
        expressionElement.textContent += ' ' + currentClickedButtonVal + ' ';
      } else {
        expressionElement.textContent += currentClickedButtonVal;
      }
    })
  }
  let clear = function (val) {
    expressionElement.textContent = '';
    resultElement.textContent = '';
  }

  let equal = function (expression) {

    let groups = expression.match(expressionPattern);

    if (groups != undefined) {
      let firstDigit = groups[1];
      let sign = groups[3];
      let secondDigit = groups[4];

      let result = calculate(firstDigit, sign, secondDigit);
      resultElement.textContent = result;
    } else {
      resultElement.textContent = 'NaN';
    }
  }

  let calculate = function (leftNumberStr, operator, rightNumberStr) {
    let result;
    let leftNumber = Number(leftNumberStr);
    let rightNumber = Number(rightNumberStr);
    switch (operator) {
      case '+':
        result = leftNumber + rightNumber;
        break;
      case '-':
        result = leftNumber - rightNumber;
        break;
      case '*':
        result = leftNumber * rightNumber;
        break;
      case '/':
        result = leftNumber / rightNumber;
        break;
    }

    return result;
  }

}