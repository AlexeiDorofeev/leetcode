import { BST } from "../standard/BinaryTree";

const rangeSumBST = (root, L, R) => {
  let sum = 0;
  const traverse = (root) => {
    if (root.data >= L && root.data <= R) sum += root.data;
    if (root.left !== null) traverse(root.left);
    if (root.right !== null) traverse(root.right);
  };
  traverse(root);
  return sum;
};

const a = new BST();
a.addArray([10, 5, 15, 3, 7, 18]);

console.log(rangeSumBST(a.root, 7, 15));
