/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    let sum = 0
    let lvl = 0

    const check = (node, lvl) => {
        lvl === 0 ? lvl = 1 : sum += node.val 
        node.left && check(node.left, lvl)
        node.right && check(node.right, lvl)
    }
    check(root, lvl)

    return root.val === sum ? true : false
};