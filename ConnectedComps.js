var countComponents = function(n, edges) {
    let components = 0
    let visited = []

    let graph = new Array(n).fill(0).map(()=> [])

    // create adjacency lists
    for (const [a,b] of edges) {
        graph[a].push(b)
        graph[b].push(a)
    }  
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            components++
            dfs(i, graph, visited)
        }
    }
    return components
}

function dfs(node, graph, visited) {
    if (visited[node] === true) return
    visited[node] = true
    
    for (let edge of graph[node]) {
        dfs(edge, graph, visited)
    }
}
var countComponents = function(n, edges) {
    let components = [new Set()]
    let current = 0

    for (const edge of edges) {
        const [a,b] = edge
        if (!components[current].has(a)) {

        }
    }
    for (let i = 0; i < n; i++) {
        
    }
}


console.log(countComponents(2, [[1,0]])) //1
console.log(countComponents(4, [[0,1],[2,3],[1,2]])) //1
console.log(countComponents(4, [[2,3],[1,2],[1,3]])) //2
console.log(countComponents(5, [[0,1],[1,2],[3,4]])) //2
console.log(countComponents(4, [[0,1],[0,2],[1,2]])) //2


