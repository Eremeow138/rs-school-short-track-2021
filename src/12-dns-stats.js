/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const stats = {};
  const reversDomains = domains.map((item) => item.split('.').reverse());
  reversDomains.forEach((item) => {
    let concat = '';
    item.forEach((itm) => {
      concat = `${concat}.${itm}`;
      if (stats[concat]) {
        stats[concat]++;
      } else {
        stats[concat] = 1;
      }
    });
    concat = '';
  });
  return stats;
}

module.exports = getDNSStats;
