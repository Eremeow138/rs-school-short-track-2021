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
    const node = list;
    if (node.value === elem) {
      node.value = node.next.value;
      node.next = node.next.next;
    }
    if (node.next) {
      if (node.next.value === elem && node.next.next) {
        node.next = node.next.next;
      } else if (node.next.value === elem && !node.next.next) {
        node.next = null;
      }
    }
    if (node.next) {
      deleteNodes(node.next, elem); // делаем то же самое для остальной части списка
    }
  }
  deleteNodes(l, k);
  return l;
}
module.exports = removeKFromList;
