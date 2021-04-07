/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');
  const mlength = matrix.length;
  const lenghOneArr = matrix[0].length;
  const result = [];
  matrix.forEach((item, index, array) => {
    item.forEach((itm, ind, arr) => {
      if (itm) {
        result.push(1);
      } else {
        let counter = 0;
        if (arr[ind - 1]) {
          counter++;
        }
        if (arr[ind + 1]) {
          counter++;
        }
        if (array[index - 1]) {
          if (array[index - 1][ind - 1]) {
            counter++;
          }
          if (array[index - 1][ind]) {
            counter++;
          }
          if (array[index - 1][ind + 1]) {
            counter++;
          }
        }
        if (array[index + 1]) {
          if (array[index + 1][ind - 1]) {
            counter++;
          }
          if (array[index + 1][ind]) {
            counter++;
          }
          if (array[index + 1][ind + 1]) {
            counter++;
          }
        }
        result.push(counter);
      }
    });
  });
  const final = [];
  let counter = 0;
  for (let i = 0; i < mlength; i++) {
    const vector = [];
    for (let j = 0; j < lenghOneArr; j++) {
      vector.push(result[counter]);
      counter++;
    }
    final.push(vector);
  }
  return final;
}

module.exports = minesweeper;
