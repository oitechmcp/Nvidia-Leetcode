/**************************\U0001f60e**************************/
function deleteDuplicateFolder(paths) {
    const TreeNode = function (val) {
        this.val = val;
        this.serial = '';
        this.childs = new Map();
    }

    const head = new TreeNode('/', '/');

    for (let i = 0; i < paths.length; i++) {
        let node = head;
        for (let j = 0; j < paths[i].length; j++) {
            if (!node.childs.has(paths[i][j])) {
                node.childs.set(paths[i][j], new TreeNode(paths[i][j]));
            }
            node = node.childs.get(paths[i][j]);
        }
    }

    const structMap = new Map();

    const fillStructMap = function (node) {
        if (node.childs.size === 0) return;
        const struct = [];
        for (const [val, childNode] of node.childs) {
            fillStructMap(childNode);
            struct.push(`${val}(${childNode.serial})`);
        }

        struct.sort();

        node.serial = struct.join('');
        structMap.set(node.serial, (structMap.get(node.serial) || 0) + 1);
    }

    fillStructMap(head);

    const ans = [];
    const path = [];

    const deleteDuplicates = function (node) {
        if ((structMap.get(node.serial) || 0) > 1) return;

        if (path.length > 0) {
            ans.push([...path]);
        }

        for (const [val, childNode] of node.childs) {
            path.push(val);
            deleteDuplicates(childNode);
            path.pop();
        }
    }
    
    deleteDuplicates(head);
    return ans;
};
