/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(namess) {
  const names = namess;
  for (let index = 0; index < names.length; index++) {
    const dublicats = names.filter((elem) => elem === names[index]);
    for (let i = 1; i < dublicats.length; i++) {
      dublicats[i] += `(${i})`;
    }
    let counter = 0;
    for (let i = 0; i < names.length; i++) {
      if (names[i] === names[index]) {
        names[i] = dublicats[counter];
        counter++;
      }
    }
  }
  return names;
}

module.exports = renameFiles;
