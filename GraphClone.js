  class Node {
        constructor(val, neighbors) {
            this.val = val === undefined ? 0 : val;
            this.neighbors = neighbors === undefined ? [] : neighbors;
        }
    }
    const a = new Node(1)
    const b = new Node(2)
    const c = new Node(3)
    const d = new Node(4)
    a.neighbors = [b,d]
    b.neighbors = [a,c]
    c.neighbors = [b,d]
    d.neighbors = [a,c]

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) return null
    let visited = new Map()

    return dfsClone(node, visited)
};

function dfsClone(node, visited) {
    if (visited.has(node.val)) return visited.get(node.val)
    let clone = new Node(node.val)
    visited.set(node.val, clone)

    for (let neighbor of node.neighbors) {
        clone.neighbors.push(dfsClone(neighbor, visited))
    }
    console.log(visited)
    return clone
}

console.log(cloneGraph(a))
// cloneGraph([[]])
// cloneGraph([])