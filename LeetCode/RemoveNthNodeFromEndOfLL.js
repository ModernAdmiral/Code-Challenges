function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// One pass solution
var removeNthFromEnd = function (head, n) {
  // creating dummy head prevents edge case when list node has length of 0
  const dummy_head = new ListNode(0);
  let slow = dummy_head;
  let fast = dummy_head;
  dummy_head.next = head;

  for (let i = 0; i < n + 1; i++) {
    // get fast pointer n + 1 steps ahead of slow pointer ( + 1 because we want slow pointer to end up right before the node to delete)
    fast = fast.next;
  }
  while (fast != null) {
    // traverse until slow linearly with fast untill fast is at the end
    slow = slow.next;
    fast = fast.next;
  }
  // now delete next node after slow
  slow.next = slow.next.next;

  return dummy_head.next;
};
