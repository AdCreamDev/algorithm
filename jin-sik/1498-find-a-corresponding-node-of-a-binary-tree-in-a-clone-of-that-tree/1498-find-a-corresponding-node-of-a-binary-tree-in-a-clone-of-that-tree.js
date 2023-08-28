/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    // const dfs = (node, lvl) => {
    //     if(node.val === target) {
    //         answer = node.val
    //     } 
    //     if(node.left) dfs(node.left, lvl+1)
    //     if(node.right) dfs(node.right, lvl+1)
    // }
    // dfs(cloned, 0)
    // console.log(cloned, cloned.val, cloned.left, cloned.right)

    function dfs(oNode, cNode) {
        if(!oNode) return;
        // console.log("origin :", oNode, oNode.left, oNode.right, ",", "clone :", cNode, cNode.left, cNode.right)
        if(oNode === target) return cNode;
        return dfs(oNode.left, cNode.left) || dfs(oNode.right, cNode.right);
    }
    return dfs(original, cloned);
};