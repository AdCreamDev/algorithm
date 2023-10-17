/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const arr = []
    const makeArr = (list) => {
        arr.push(list.val)
        list.next && makeArr(list.next)
    }
    makeArr(head)
    
    return parseInt(arr.join(""), 2)
};