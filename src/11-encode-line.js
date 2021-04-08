/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let result = '';
  const stringArr = str.split('');
  let counter = 1;
  stringArr.forEach((item, index, arr) => {
    if (arr[index + 1]) {
      if (item === arr[index + 1]) {
        counter++;
      }
      if (item !== arr[index + 1]) {
        if (counter === 1) {
          result += item;
        } else {
          result += counter + item;
          counter = 1;
        }
      }
    } else if (counter === 1) {
      result += item;
    } else {
      result += counter + item;
      counter = 1;
    }
  });
  return result;
}

module.exports = encodeLine;
