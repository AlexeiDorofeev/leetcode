class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
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
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = new Node(data);
            return;
          } else if (currentNode.left !== null) {
            return searchTree(currentNode.left);
          }
        } else if (data > currentNode.data) {
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
}

const a = new BST();
a.add(17);
a.add(5);
a.add(32);
a.add(108);
a.add(108);
a.add(106);
a.add(1);

console.log(a);
