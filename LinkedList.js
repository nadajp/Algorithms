class ListNode {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

a = new ListNode("Angel Food")
b = new ListNode("Bundt")
c = new ListNode("Cheese")
d = new ListNode("Devil's Food")
e = new ListNode("Eccles")

a.next = b
b.next = c
c.next = d
d.next = e

const findKthToLast = (k, head) => {
    let curr = head
    let count = 0
    while (curr !== null) {
        count++
        curr = curr.next
    }
    console.log(count)
    if (count < k) return null
    curr = head
    for (let i = 0; i < count - k; i++)
        curr = curr.next
    return curr
}

console.log(findKthToLast(2, a))
