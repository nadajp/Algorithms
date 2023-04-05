
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let result = null
    let carry = 0

    while(l1 && l1.val !== null) {
        let val = l1.val + carry
        if (l2 && l2.val !== null) {
            val += l2.val
        }
        if (val < 10) {
            carry = 0 
        } else {
            val -= 10
            carry = 1 
        }
        let currNode = new ListNode(val)
        currNode.next = result
        result = currNode
    }   
    while (l2 && l2.val !== null) {
        let currNode = new ListNode(l2.val)
        currNode.next = result
        result = currNode
    }
    return result
};


let l1 = [2,4,3]
let l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))