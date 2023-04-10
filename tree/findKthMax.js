"use strict";
const BinarySearchTree = require("./BinarySearchTree.js");

function findKthMax(rootNode, k) {
  var tree = [];
  tree = inOrderTraverse(rootNode, tree);
  console.log(tree);
  if (tree.length - k >= 0 && k > 0) {
    return tree[tree.length - k];
  }
  return null;
}
//Helper recursive function to traverse the tree inorder
function inOrderTraverse(rootNode, tree) {
  if (rootNode !== null) {
    tree = inOrderTraverse(rootNode.leftChild, tree);
    tree.push(rootNode.val);
    tree = inOrderTraverse(rootNode.rightChild, tree);
  }

  return tree;
}

var BST = new BinarySearchTree(6);
BST.insertBST(1);
BST.insertBST(133);
BST.insertBST(12);
console.log(findKthMax(BST.root, 3));
