/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];

    const nst = (node) => {
        if(!node) return;
        if(node.children.length > 0) {
            node.children.forEach(item => nst(item));
        }
        result.push(node.val);
    }
    nst(root);

    return result;
};