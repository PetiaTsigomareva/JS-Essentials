function solve() {
  let inputField = document.getElementById('input').value;
  let resultSpan = document.getElementById('resultOutput');
//1.Calculated sum of ones
  // let sumAllOnes = getSum(inputField);
  let totalSum = parseInt(getSum(inputField));

  function getSum(text) {
    let result = text;
    while(result.length > 1) {
      let sum = 0;
      for (let char of result) {
        sum += Number(char);
      }

      result = sum.toString()
    }
    return result;
  }
  //2.Remove from start and end elements with calculated sum count
  let inputSubStr = inputField.substring(totalSum, inputField.length - totalSum);

  //3.Group input subString to groups to 8 characters

  let output = inputSubStr.split(/([\d]{8})/g)
    .filter(el => el)
    .map(el => binaryToChar(el))
    .filter(el => /[a-zA-Z ]+/g.test(el))
    .join('');

  //4.Convert each element from binary to decimal and get ASCII code
  function binaryToChar(binaryText) {
    let decimal = parseInt(binaryText, 2);
    let result = String.fromCharCode(decimal);

    return result;

  }
  resultSpan.textContent = output;
}
