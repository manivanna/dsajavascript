const BinarySearchTree = require("./BinarySearchTree.js");

function findMin(rootNode) {
  if (rootNode == null) {
    return null;
  }
  while (rootNode.leftChild) {
    rootNode = rootNode.leftChild;
  }
  return rootNode.val;
}

var BST = new BinarySearchTree(6);
BST.insertBST(20);
BST.insertBST(-1);

console.log(findMin(BST.root));
