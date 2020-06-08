// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative:
var reverseListIterative = function (head) {
  // We need to access previous node
  // then we move previous node and current node simultaneously
  let prev = null; // null because there is nothing previous to head

  while (head != null) {
    let next_node = head.next;
    head.next = prev; // here we switch the pointer to the previous node
    prev = head;
    head = next_node; // continute traversal
  }

  return prev;
};
