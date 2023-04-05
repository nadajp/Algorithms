class Node {
    constructor(value) {
        this.value = value
        this.edges = []
    }

    connect(node) {
        this.edges.push(node)
    }

    getAdjacentNodes() {
        return this.edges
    }

    isConnectedTo(node) {
        return !!this.edges.find(edge => edge.value === node.value)
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes]
    }
    addToGraph(node) {
        this.nodes.push(node)
    }

    topologicalSort() {
        const visited = new Set()
        const topOrdering = []
        for (const node of this.nodes) {
            this.depthFirstTraversal(node, visited, topOrdering)
        }
        console.log(topOrdering.reverse())
    }
    depthFirstTraversal(start, visited, topOrdering) {
        if (visited.has(start)) return
        visited.add(start)

        console.log('visiting node ' + start.value)
        for (const edge of start.edges) {
            this.depthFirstTraversal(edge, visited, topOrdering)
        }
        // we are now done visiting start and all its children
        topOrdering.push(start.value)
    }

}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

const graph = new Graph([a, b, c, d, e, f])

a.connect(b)
a.connect(c)
b.connect(d)
d.connect(f)
e.connect(f)
e.connect(c)

//graph.topologicalSort()

//Graph valid tree
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 * 
 * To detect if there is any cycle in the undirected graph or not, we will use the DFS traversal for the given graph. 
 * For every visited vertex v, when we have found any adjacent vertex u, such that u is already visited, 
 * and u is not the parent of vertex v. Then one cycle is detected.
 */
var validTree = function(n, edges) {
    let graph = new Array(n).fill(0).map(()=> [])

    for (let [a, b] of edges) {
        graph[a].push(b)
        graph[b].push(a)
    }

    let visited = new Map()   
    let hasCycle = dfsHasCycle(0, graph, visited, -1)
    
    if (hasCycle) return false
    if (visited.size !== n) return false

    return true
}

function dfsHasCycle(node, graph, visited, parent) {   
    visited.set(node, parent)

    for (const edge of graph[node]) {
        // If the edge is the same as the parent node that got us here, ignore it
        if (visited.get(node) === edge) {
            continue;
        }
        // Check if we've already seen this node.
        if (visited.has(edge)) {
            return true; // There must be a cycle.
        }
        if (dfsHasCycle(edge, graph, visited, node))
            return true
    }
    return false
}

let edges = [[0,1],[0,2],[0,3],[1,4]]
let edgesFalse = [[0,1],[1,2],[2,3],[1,3],[1,4]]
let edgesT = [[1,0]]
let disconnected = [[0,1]]
let true3 = [[2,0],[2,1]]

console.log(validTree(3, true3))





