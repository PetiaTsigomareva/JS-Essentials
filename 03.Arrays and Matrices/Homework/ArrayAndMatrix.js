//Task 1
// function printArrayByDelimiter(input) {
//   let delimiter=input[input.length-1];
//   input.pop();
//
//   console.log(input.join(delimiter));
//
// }
//
// printArrayByDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);

//Task 2
// function printNthElementFromArray(input) {
//   let result=[];
//   let step = parseInt(input[input.length - 1]);
//   input.pop();
//
//   for (let i = 0; i < input.length; i+=step) {
//    result.push(input[i]);
//   }
//
//   console.log(result.join('\n'));
// }
//
// printNthElementFromArray(['5', '20', '31', '4', '20', '2']);
// printNthElementFromArray(['dsa', 'asd', 'test', 'tset', '2']);
// printNthElementFromArray(['1', '2', '3', '4', '5', '6']);

//Task 3
// function addAndRemoveElementsFromArray(commands) {
//   let initialNumber = 1;
//   let result = [];
//   for (let i = 0; i < commands.length; i++) {
//     if (commands[i].toLowerCase() === 'add') {
//       result.push(initialNumber);
//     } else if (commands[i].toLowerCase() === 'remove') {
//       result.pop();
//     }
//     initialNumber += 1;
//   }
//
//   if (result.length < 1) {
//     console.log('Empty');
//   } else {
//     console.log(result.join('\n'));
//   }
// }
//
// addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
// addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
// addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);

//Task 4
// function rotateArray(inputs) {
//   let rotationCount = inputs[inputs.length - 1];
//   inputs.pop();
//
//   for (let i = 0; i < rotationCount; i++) {
//     if (rotationCount % inputs.length === 0){
//       return inputs.join(' ');
//     }
//     inputs.unshift(inputs.pop());
//
//   }
//   return inputs.join(' ');
// }
//
// //rotateArray(['1', '2', '3', '4', '2']);
// //rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
// console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));

//Task 5
// function printNonDecreasingSubsequenceFromArray(inputs) {
//   let currentBiggestElement = inputs[0];
//   let result = [];
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i] >= currentBiggestElement) {
//       currentBiggestElement = inputs[i];
//       result.push(currentBiggestElement);
//     }
//
//   }
//
//   console.log(result.join('\n'));
// }
//
// printNonDecreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// printNonDecreasingSubsequenceFromArray([1, 2, 3, 4]);
// printNonDecreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);

//Task 6
// function sordArrayByTwoCriteria(inputs) {
//   let sortedArr = inputs.sort((a, b) => {
//     return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase());
//   });
//
//   console.log(sortedArr.join('\n'));
// }
//
// sordArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sordArrayByTwoCriteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
// sordArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);

//Task 7
// function isMatrixMagic(matrix) {
//   let isMagic = true;
//   let sum = sumRow(matrix[0]);
//
//   for (let row = 0; row < matrix.length; row++) {
//     let rowSum = sumRow(matrix[row]);
//     if (rowSum !== sum) {
//       isMagic = false;
//       break;
//     }
//   }
//
//   if (isMagic !== false) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       let colSum = 0;
//       for (let row = 0; row < matrix.length; row++) {
//         colSum += matrix[row][col];
//       }
//       if (colSum !== sum) {
//         isMagic = false;
//         break;
//       }
//     }
//   }
//
//   console.log(isMagic);
//
//   function sumRow(array) {
//     let sum = array.reduce((a, b) => a + b);
//     return sum;
//   }
// }
// isMatrixMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// isMatrixMagic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
//Таск 8
// function solve(rows, cols) {
//   let matrix = fillMatrix(rows);
//
//   let number = 1;
//   let startRow = 0;
//   let endRow = rows - 1;
//   let startCol = 0;
//   let endCol = cols - 1;
//
//   while (startRow <= endRow || startCol <= endCol) {
//     for (let i = startRow; i <= endRow; i++) {
//       matrix[startRow][i] = number;
//       number++;
//     }
//
//     for (let i = startRow + 1; i <= endRow; i++) {
//       matrix[i][endCol] = number;
//       number++;
//     }
//
//     for (let i = endCol - 1; i >= startCol; i--) {
//       matrix[endRow][i] = number;
//       number++;
//     }
//
//     for (let i = endRow - 1; i > startRow; i--) {
//       matrix[i][startCol] = number;
//       number++;
//     }
//
//     startRow++;
//     endRow--;
//     startCol++;
//     endCol--;
//   }
//
//   for (let row of matrix) {
//     console.log(row.join(' '));
//   }
//
//   function fillMatrix(rows) {
//     let matrix = [];
//     for (let row = 0; row < rows; row++) {
//       matrix.push([]);
//     }
//
//     return matrix;
//   }
// }
// solve(5, 5);
// solve(3,3);


//Task 9
// function diagonalAttack(matrix) {
//   let mainDiagonalSum = 0;
//   let antiDiagonalSum = 0;
//
//   let numberMatix = matrix.map((row) => {
//     return row.split(' ');
//   });
//
//   for (let i = 0; i < numberMatix.length; i++) {
//     numberMatix[i] = numberMatix[i].map(Number);
//
//   }
//   for (let row = 0; row < numberMatix.length; row++) {
//     for (let col = 0; col < numberMatix[row].length; col++) {
//
//
//       if (row === col) {
//         mainDiagonalSum += numberMatix[row][col];
//       }
//       if (row + col === matrix.length - 1) {
//         antiDiagonalSum += numberMatix[row][col];
//       }
//
//     }
//   }
//   if (mainDiagonalSum === antiDiagonalSum) {
//     for (let row = 0; row < numberMatix.length; row++) {
//       for (let col = 0; col < numberMatix[row].length; col++) {
//         if (row !== col && row + col !== matrix.length - 1) {
//           numberMatix[row][col] = mainDiagonalSum;
//         }
//       }
//     }
//   }
//   numberMatix.forEach(element => console.log(element.join(' ')));
// }
//
// diagonalAttack(['5 3 12 3 1',
//   '11 4 23 2 5',
//   '101 12 3 21 10',
//   '1 4 5 2 2',
//   '5 22 33 11 1']);
//
// diagonalAttack(['1 1 1',
//   '1 1 1',
//   '1 1 0']);

//Task 10
// function solve(input) {
//   let rows = input[0], cols = input[1], x = input[2], y = input[3];
//   let matrix = fillMatrix(rows);
//
//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
//     }
//   }
//   printMatrix(matrix);
//
//   function fillMatrix(rows) {
//     let matrix = [];
//     for (let row = 0; row < rows; row++) {
//       matrix.push([]);
//     }
//     return matrix;
//   }
//
//   function printMatrix(matrix) {
//     for (let line of matrix) {
//       console.log(line.join(" "));
//     }
//   }
// }