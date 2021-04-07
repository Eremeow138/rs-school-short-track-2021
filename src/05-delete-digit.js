/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return false;
  }
  const s = n.toString().split('');
  const numbersArr = [];
  s.forEach((item, index, arr) => {
    const tempArr = arr.slice();
    tempArr.splice(index, 1);
    numbersArr.push(+tempArr.join(''));
  });
  numbersArr.sort(compareNumeric);
  return numbersArr[numbersArr.length - 1];
}

module.exports = deleteDigit;
