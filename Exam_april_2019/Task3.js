function matrixSum(firstMatrix, secondMatrix) {
  let result = [];
  let row = 0;
  while (row < firstMatrix.length) {
    let firstMatrixRow = firstMatrix[row];
    let secondMatrixRow = secondMatrix[row];
    let col = 0;
    let tempArr = [];
    let sumMatrixRowElements = 0;
    let remainder = 0;
    while (col < firstMatrixRow.length) {
      sumMatrixRowElements = remainder + firstMatrixRow[col] + secondMatrixRow[col];
      if (sumMatrixRowElements > 9) {
        tempArr[col] = firstMatrixRow[col];
        remainder += secondMatrixRow[col];
      } else {
        tempArr[col] = sumMatrixRowElements;
        remainder = 0;
      }
      col++
      if (remainder !== 0) {
        tempArr[col] = remainder;
      }
    }
    result[row] = tempArr;
    row++;
  }
  console.log(JSON.stringify(result));

}

matrixSum([[1, 2, 3], [3, 4, 5], [5, 6, 7]],
  [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);

matrixSum([[9, 2, 3], [4, 5, 6], [7, 8, 8]],
  [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
matrixSum([[9, 9], [4, 7]],
  [[7, 1], [1, 2]]);