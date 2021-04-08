/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  // throw new Error('Not implemented');
  function deleteNodes(list, elem) {
    //  head
    if (list.value === elem) {
      // eslint-disable-next-line no-param-reassign
      list.value = list.next.value;
      // eslint-disable-next-line no-param-reassign
      list.next = list.next.next;
    }
    if (list.next) {
      if (list.next.value === elem && list.next.next) {
        // eslint-disable-next-line no-param-reassign
        list.next = list.next.next;
      } else if (list.next.value === elem && !list.next.next) {
        // eslint-disable-next-line no-param-reassign
        list.next = null;
      }
    }
    if (list.next) {
      deleteNodes(list.next, elem); // делаем то же самое для остальной части списка
    }
  }
  deleteNodes(l, k);
  return l;
}
module.exports = removeKFromList;
