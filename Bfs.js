class Node {
    constructor(value) {
        this.value = value
        this.edges = []
    }

    connect(node) {
        this.edges.push(node)
        node.edges.push(this)
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
    breadthFirstTraversal(start, end) {
        const queue = [start]
        const visited = new Set()
        visited.add(start)

        while (queue.length > 0) {
            const node = queue.shift()
            if (node.value === end.value) {
                console.log('Found it') 
                return
            }
            for (const edge of node.edges) {
                if (!visited.has(edge)) {
                    queue.push(edge)
                    visited.add(edge)
                }
            }
            console.log(node.value)
        }
    }
    getSmallestDistance(start, end) {
        const queue = [start]
        const visited = {}
        visited[start.value] = null
        
        while(queue.length > 0) {
            const node = queue.shift()

            if (node.value === end.value) {
                console.log('Found it')
                return this.reconstructPath(visited, start, end)
            }
            for (const edge of node.edges) {
                if (!visited.hasOwnProperty(edge.value)) {
                    visited[edge.value] = node
                    queue.push(edge)
                }
            }
        }
        console.log(visited)
    }
    reconstructPath (visited, start, end) {
        let path = []
        let current = end
        while (current !== null) {
            path.push(current.value)
            current = visited[current.value]
        }
        return path.reverse()
    }
}

const Mary = new Node('Mary')
const Hannah = new Node('Hannah')
const Mel = new Node('Mel')
const Max = new Node('Max')
const Dan = new Node('Dan')
const Nis = new Node('Nis')
const Chris = new Node('Chris')
const Nicolette = new Node('Nicolette')
const Yair = new Node('Yair')
const Mabel = new Node('Mabel')
const Liz = new Node('Liz')

const graph = new Graph([Mary,Hannah,Mel,Max,Dan,Nis,Chris,Nicolette,Yair,Mabel,Liz])

Mary.connect(Hannah)
Hannah.connect(Nis)
Hannah.connect(Liz)
Hannah.connect(Max)
Hannah.connect(Mel)
Mel.connect(Max)
Dan.connect(Nis)
Nis.connect(Chris)
Nis.connect(Yair)
Chris.connect(Nicolette)
Yair.connect(Liz)
Yair.connect(Mabel)
Mabel.connect(Liz)

// Mabel -- Yair -- Nais
// Mabel -- Liz -- Yair -- Nais
//console.log(graph.breadthFirstTraversal(Mabel, Nis))
console.log(graph.getSmallestDistance(Hannah, Mabel))

