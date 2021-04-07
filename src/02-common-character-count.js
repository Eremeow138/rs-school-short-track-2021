/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  let count = 0;
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let temp;
  if (s1Arr.length < s2Arr.length) {
    temp = s1Arr;
    s1Arr = s2Arr;
    s2Arr = temp;
  }
  s2Arr.forEach((item) => {
    const index = s1Arr.indexOf(item);
    if (index !== -1) {
      count++;
      s1Arr.splice(index, 1);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
