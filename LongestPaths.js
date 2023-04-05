
// 0<-->1<--2-->3
// [INF, INF, INF, 0]
function longestPaths({n, edges}) {
    let pathMap = new Map()
    for (const [a, b] of edges) {
        let paths = pathMap.get(a) ?? []
        paths.push(b)
        
        pathMap.set(a, paths)
    }
    console.log(pathMap)

    const memo = []
    const visited = []
    const dfs = (v) => {
        if (visited[v]) return Infinity
        if (memo[v] !== undefined) return memo[v]
        visited[v] = true
        if (pathMap.get(v) === undefined || pathMap.get(v) === []) {
            memo[v] = 0
            return 0
        }
        let longest = 0

        for (const path of pathMap.get(v)) {
            longest = Math.max(longest, dfs(path) + 1)
        } 
        memo[v] = longest
        visited[v] = false
        return memo[v]
    }

    let longest = new Array(input.n).fill(0)
    for (const vertex of pathMap.keys()) {
        longest[vertex] = dfs(vertex)
    }
    return longest
}

let input = {
    n: 4,
    edges: [
        [0,1],
        [1,0],
        [2,1],
        [2,3]
    ]
}
console.log(longestPaths(input))