/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    
    const mergeTree = (node1, node2) => {
        if(node1 === null || node2 === null) return node1 || node2;

        const newTree = new TreeNode(node1.val + node2.val);
        newTree.left = mergeTree(node1.left, node2.left);
        newTree.right = mergeTree(node1.right, node2.right);

        return newTree
    }
    return mergeTree(root1, root2)
};