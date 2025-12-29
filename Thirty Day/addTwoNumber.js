//MEDIUM,Add Two Numbers,100.0,0.4622507717882867,https://leetcode.com/problems/add-two-numbers,"Linked List, Math, Recursion"
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode()
    const num = addNumberWithCarry(l1,l2,l3,0)
    return l3.next
};

const addNumberWithCarry = (l1,l2,l3,carry) => {
    if(!l1 && !l2 && !carry){
        return;
    }
    const val = (l1?.val || 0) + (l2?.val || 0) + carry
    carry = val > 9 ? Math.floor(val / 10) : 0
    l3.next = new ListNode(val%10)
    addNumberWithCarry(l1?.next , l2?.next, l3.next, carry)   
}