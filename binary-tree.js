/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0
    let node = [this.root]
    let count = 1;
    let shift = 1
    let currentNode = this.root
    
    while(node[0].right !== null || node[0].left !== null){
      currentNode = node.shift()
      if(!currentNode.right || !currentNode.left){
        node = (currentNode.right) ? [(currentNode.right)] : [(currentNode.left)]
        count++
      } else {
        node.push(currentNode.right)
        node.push(currentNode.left)
        shift++;
        if(shift === 2){
          count++
          shift = 0
        }
      }
    }

    return count
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0
    let node = [this.root]
    let count = 1;
    let arr = []
    
    while(node.length !== 0){
      for(let child of node){
        if(child.right) arr.push(child.right)
        if(child.left) arr.push(child.left)
      }

      if(arr.length) count++
      node = [...arr]
      arr = []
    }

    return count
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = this.root.val
    let node = [this.root]
    let arr = []

    while(node.length !== 0){
      for(let child of node){
        if(child.right) arr.push(child.right)
        if(child.left) arr.push(child.left)
      }

      let max = 0
      node = []
      if(arr.length){
        arr.map(item => {
          if(item.val > max){
            max = item.val
            node[0] = item
          }
        })
      }
      sum += max
      arr = []
    }
    return sum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null
    let node = [this.root]
    let arr = []
    let currNode;
    let max;

    while(node.length !== 0){
      currNode = node.shift()
      arr.push(currNode.val)
      if(currNode.right){
        node.push(currNode.right)
      }

      if(currNode.left){
        node.push(currNode.left)
      }
    }

    for(let val of arr){
      if(val > lowerBound){
        if(max){
          max = (max > val) ? val : max
        } else {
          max = val
        }
      }
    }

    max = (max) ? max : null
    console.log(max)
    return max

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


// let bTree = new BinaryTree()
// let oak =  new BinaryTreeNode(7)
// bTree.root = oak
// let birch = new BinaryTreeNode(12)
// let fern = new BinaryTreeNode(3)
// let willow = new BinaryTreeNode(8)
// oak.left = birch
// oak.right = fern
// fern.left = willow
// bTree.maxDepth()
// bTree.minDepth()
// bTree.nextLarger()
// bTree.maxSum()
module.exports = { BinaryTree, BinaryTreeNode };
