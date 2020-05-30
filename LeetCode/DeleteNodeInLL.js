/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // This solution works because we are guranteed that the next node wont be the last node
  node.val = node.next.val; // Set current value to the next node
  node.next = node.next.next; // Change the reference of the next node to the one after. (skipping over the node you dont want)
};
