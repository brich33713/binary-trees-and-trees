/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0
    let node = [this.root]
    let sum = 0;
    let arr = []
    
    while(node.length !== 0){
      for(let child of node){
        sum += child.val
        if(child.children) child.children.map(child => arr.push(child))
      }
      node = [...arr]
      arr = []
    }

    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0
    let node = [this.root]
    let count = 0;
    let arr = []
    
    while(node.length !== 0){
      for(let child of node){
        if(child.val % 2 === 0) count++
        if(child.children) child.children.map(child => arr.push(child))
      }
      node = [...arr]
      arr = []
    }

    return count

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0
    let node = [this.root]
    let count = 0;
    let arr = []
    
    while(node.length !== 0){
      for(let child of node){
        if(child.val > lowerBound) count++
        if(child.children) child.children.map(child => arr.push(child))
      }
      node = [...arr]
      arr = []
    }

    return count
  }
}

module.exports = { Tree, TreeNode };

// let node1 = new TreeNode(1)
// let node2 = new TreeNode(2)
// let node3 = new TreeNode(3)
// let node4 = new TreeNode(4,[node1,node2,node3])
// let tree = new Tree(node4)
