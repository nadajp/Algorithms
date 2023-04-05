class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function breadthFirstTraversal(root) {
    let queue = [root]
    
    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current.val)
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }
}

// Binary Tree Node Directions

// You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. 
// You are also given an integer start representing the value of the start node s, and a different integer destination
// representing the value of the destination node d.

// Find the shortest path starting from node s and ending at node d.

// Generate step-by-step directions of the path as a string consisting of only the uppercase letters 'L', 'R', and 'P'. 
// Each letter indicates a specific direction:
// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'P' means to go from a node to its parent node.

// Return the step-by-step directions of the shortest path from node s to node d.

function directions(root, start, end) {
    // since you can go up the tree, set it up as a graph
    // traverse the tree and add parents to each node
    let parents = setParents(root)
    //console.log(parents)
    let path = getShortestPath(start, end, parents)
    return path
}

function setParents(root) {
    let parents = new Map()
    parents.set(root.val, null)
    let queue = [root]
    while (queue.length !== 0) {
        current = queue.shift()
        if (current.left !== null) {
            parents.set(current.left.val, current)
            queue.push(current.left)
        }
        if (current.right !== null) {
            parents.set(current.right.val, current)
            queue.push(current.right)
        }
    }
    return parents
}

function getShortestPath(start, end, parents) {
    let str = ""
    const queue = [start]
    const visited = {}
    let path = []
    visited[start.val] = null

    //console.log(parents)
    while (queue.length > 0) {
        const current = queue.shift()
        if (current.val === end.val) {
            str = getPathString(start, end, visited, path)
        }
        if (current.left !== null && !visited.hasOwnProperty(current.left.val)) {
            visited[current.left.val] = current
            path[current.left.val] = 'L'
            queue.push(current.left)
        }
        if (current.right !== null && !visited.hasOwnProperty(current.right.val)) {
            visited[current.right.val] = current
            path[current.right.val] = 'R'
            queue.push(current.right)
        }
        let parent = parents.get(current.val)
        if (parent && !visited.hasOwnProperty(parent.val)) {
            visited[parent.val] = current
            path[parent.val] = 'P'
            queue.push(parent)
        }
    }
    console.log(path)

   return str
}

function getPathString(start, end, visited, path) {
    let current = end
    let p = []
    while (current !== null) {
        p.push(path[current.val])
        current = visited[current.val]
    }
    console.log(p)
    return p.reverse().join('')
}


const a = new TreeNode('a')
const b = new TreeNode('b')
const c = new TreeNode('c')
const d = new TreeNode('d')
const e = new TreeNode('e')
const f = new TreeNode('f')
const g = new TreeNode('g')

// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.left = f

//console.log(directions(a, a, b))
//breadthFirstTraversal(a)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if (root === null) return true
    if (root.left === null && root.right !== null) return false
    return isCompleteTree(root.left) && isCompleteTree(root.right)
};

a.left = b
a.right = c
b.left = d
b.right = null
c.left = f
c.right = g

console.log(isCompleteTree(a))