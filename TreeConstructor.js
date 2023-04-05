class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function TreeConstructor(strArr) { 
    let nodes = []

    for (str of strArr) {
        const trimmed = str.substring(1, str.length-1)
        const numArr = trimmed.split(",")
        const child = parseInt(numArr[0])
        const parent = parseInt(numArr[1])

        console.log('child: ' + child + ' parent: ' + parent)

        if (nodes.find(node => node.left === child)) {
            return "false"
        }
        parentNode = nodes.find(node => node.value === parent)
        if (!parentNode) {
            temp = new Node(parent)
            if (child < parent) {
                temp.left = child
            } else {
                temp.right = child
            }
            nodes.push(temp)
        } else {
            if (child < parent) {
                if (parentNode.left === -1) {
                    parentNode.left = child
                }
                else return "false"
            } else  {
                if (parentNode.right === -1)
                parentNode.right = child
                else return "false"
            }
        }
        //console.log(nodes)
    }
    return "true";
  }

  function TreeConstructor2(strArr) { 
    let nodes = []

    for (str of strArr) {
        const trimmed = str.substring(1, str.length-1)
        const numArr = trimmed.split(",")
        const child = parseInt(numArr[0])
        const parent = parseInt(numArr[1])

        if (nodes.find(x => ))
        parentNode = nodes.find(node => node.value === parent)

        if (!parentNode) {
            nodes.push(createNewNode(parent, child))
        } else if (child < parent) {
            if (!parentNode.left) {
                parentNode.left = child
            }
            else return "false"
        } else if (!parentNode.right) {
            parentNode.right = child
        } else return "false"
        //console.log(nodes)
    }
    return "true";
  }

  function createNewNode(parent, child) {
    const temp = new Node(parent)
    if (child < parent) {
        temp.left = child
    } else {
        temp.right = child
    }
    return temp
  }

     
  // keep this function call here 
  const strArrayT = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
  const strArrayF = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
  const small = ["(2,5)", "(2,6)"]
  //const strArrayF = ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
  console.log(TreeConstructor2(small));