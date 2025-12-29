/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let max = 0;
    let h = head;

    while(h != null){
        h = h.next;
        max++;
    }

    let n1;
    let n2;
    let curr = 1;
    h = head;

    while(h != null) {
        if(curr == k){
            n1 = h;
        }else if(curr == max+1-k){
            n2 = h;
        }

        curr++;
        h = h.next;
    }

    if(n2 == null){
        return head;
    }
    
    const t = n1.val;
    n1.val = n2.val;
    n2.val = t;

    return head;
};