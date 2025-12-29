var copyRandomList = function(head) {
    if(!head) {
      return null;
    }
    const clones = new Map();
    let n = head;
    while(n) {
      clones.set(n, new Node(n.val));
      n = n.next
    }
    n = head;
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      clones.get(n).random = clones.get(n.random) || null;
      n = n.next
    }
    return clones.get(head);
};