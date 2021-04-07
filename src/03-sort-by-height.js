/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return false;
  }
  const arrOfIndexes = [];
  arr.filter((item, index) => {
    if (item === -1) {
      arrOfIndexes.push(index);
    }
    return false;
  });
  const arrHeights = arr.filter((item) => item !== -1);
  arrHeights.sort(compareNumeric);
  arrOfIndexes.forEach((item) => {
    arrHeights.splice(item, 0, -1);
  });
  return arrHeights;
}

module.exports = sortByHeight;
