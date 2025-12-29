/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return "";
    let str="";

    function preOrder(node){
        if (!node ) {
            str+="x#";
            return; 
        };
        str+=node.val+"#";
        preOrder(node.left);
        preOrder(node.right)
    }
    preOrder(root);
    return str;  
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split("#")
    arr.pop();
    arr.reverse();

    function helper(){
            if (!arr.length) return null;  

            let val = arr.pop();
            if (val === "x") return null; 

            let node = new TreeNode(Number(val)); 
            node.left = helper(); 
            node.right = helper(); 

            return node; 
    }

    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */