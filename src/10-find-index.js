/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  // это я из Грокаем Алгоритмы узнал)))
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let mid;
  let result;

  while (lastIndex >= firstIndex) {
    mid = Math.floor((firstIndex + lastIndex) / 2);
    result = array[mid];
    if (result > value) {
      lastIndex = mid - 1;
    } else if (result < value) {
      firstIndex = mid + 1;
    } else if (result === value) {
      return mid;
    }
  }
  return false;
}

module.exports = findIndex;
