/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
   if (!headA || !headB) return null;

    let pt1 = headA;
    let pt2 = headB;

    while (pt1 !== pt2) {
        pt1 = pt1 ? pt1.next : headB;
        pt2 = pt2 ? pt2.next : headA;
    }

    return pt1; // Either the intersection node or null
};