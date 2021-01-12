class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (currentNode) => {
        if (data < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = new Node(data);
            return;
          } else if (currentNode.left !== null) {
            return searchTree(currentNode.left);
          }
        } else if (data >= currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = new Node(data);
            return;
          } else if (currentNode.right !== null) {
            return searchTree(currentNode.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  addArray(arr) {
    arr.forEach((node) => {
      return this.add(node);
    });
  }
}

// const a = new BST();
// a.add(10);
// a.add(5);
// a.add(15);
// a.add(3);
// a.add(7);
// a.add(18);
