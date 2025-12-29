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
var rotateRight = function(head, k) {
    // Get new head Node
    if(!k) return head;
    if(!head || !head.next) return head;

    let tmpNode = head;
    let index = 0;
    const indexes = new Map();
    while(tmpNode){
        indexes.set(index, tmpNode);
        tmpNode = tmpNode.next;
        index++;
    }

    // Rotate at this index
    const realTimes = k%(index);
    let targetNode = indexes.get(index - realTimes);
    
    if(!realTimes) return head;
    const previousNode = indexes.get(index - realTimes - 1);

    previousNode.next = null;
    let tmpHead = targetNode;
    while(targetNode.next){
        targetNode = targetNode.next;
    }
    targetNode.next = head;

    return tmpHead;
};