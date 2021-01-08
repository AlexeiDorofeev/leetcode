class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
    } else {
      const searchNode = function (current) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            return searchNode(current.left);
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            return searchNode(current.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(this.root);
    }
  }

  search(val) {}
  remove(val) {}
}

const rangeSumBST = function (root, L, R) {
  const isInBetween = (val) => val >= L && val <= R;

  const add = (val, sum) => (isInBetween(val) ? (sum += val) : sum);

  const preorder = (root, sum) => {
    if (!root) return sum;
    return (
      add(root.val, sum) + preorder(root.left, sum) + preorder(root.right, sum)
    );
  };
  return preorder(root, 0);
};

const tree = new BST();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(null);
tree.add(18);
tree.add(13);
tree.add(1);
tree.add(6);

console.log(rangeSumBST(tree.root, 6, 10));
