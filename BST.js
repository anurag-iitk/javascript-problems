// Binary Search Tree operations

// class node
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

// class Binary Search tree
class BST {
  constructor() {
    this.root = null;
  }

  // Create a tree
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Insert a node into the tree
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // Search element
  searchElement(root, val) {
    if (root == null) {
      return false;
    } else if (root.value == val) {
      return true;
    } else if (root.value > val) {
      return this.searchElement(root.left, val);
    } else {
      return this.searchElement(root.right, val);
    }
  }

// Depth First Search

// Pre-order depth first search operation
  preOrder(root){
    if(root){
        console.log(root);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
  }

// In-order depth first search operation
  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root);
        this.inOrder(root.right);
    }
  }

// Post-order depth first search operation
  postOrder(root){
    if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root);
    } 
  }

// Breadth first search
  breadthFirstSearch(){
    let queue = [];
    queue.push(this.root);
    while(queue.length){
        let current = queue.shift();
        if(current.left){
            queue.push(current.left);
        } 
        if(current.right){
            queue.push(current.right);
        }
        console.log(current.value);
    }
  }

// Find minimum value
  minValue(root){
    if(!root.left){
        return root.value;
    } else {
        return this.minValue(root.left);
    }
  }

// Find maximum value
  maxValue(root){
    if(!root.right){
        return root.value;
    } else {
        return this.maxValue(root.right);
    }
  }

// Delete data
  removeData(value){
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value){
    if(root == null){
        return null;
    } 
    if(value < root.value){
        root.left = this.deleteNode(root.left, value);
    } else if(value > root.value){
        root.right = this.deleteNode(root.right, value);
    } else {
        if(!root.left && !root.right){
            return null;
        } else if(!root.left){
            return root.right;
        } else if(!root.right){
            return root.left;
        }
        root.value = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BST();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);
const searchValue = bst.searchElement(bst.root, 2);
console.log(searchValue);
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
bst.breadthFirstSearch();
bst.minValue(bst.root);
bst.maxValue(bst.root);
bst.removeData(20);
console.log(bst.root);