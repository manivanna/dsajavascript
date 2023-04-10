// Common Applications of Tries : Autocomplete Words, Spell-Checking, Searching for a Phone Contact,
// Properties of a Trie
// Tries are similar to graphs as they are a combination of nodes where each node represents a unique alphabet
// The size of a trie depends upon the number of alphabets. For example, in English, there are 26 letters so the number of unique nodes cannot
// exceed 26.
// The depth of a trie depends on the longest word that it stores.
const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  // Case 1: No Common Prefix
  // Case 2: Common Prefix
  // Case 3: Word Exists
  insert(key, value) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase(); //Keys are stored in lowercase
    let currentNode = this.root;
    let index = 0; //To store the character index

    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (var level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(key[level]);
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
    return null;
  }

  // Case 1: Non-Existent Word
  // Case 2: Word Exists as a Substring
  // Case 3: Word Exists
  search(key) {
    if (key == null) {
      return false; //null key
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    //Iterate the Trie with given character index,
    //If it is null at any point then we stop and return false
    //We will return true only if we reach leafNode and have traversed the
    //Trie based on the length of the key

    for (var level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode != null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }

  hasNoChildren(currentNode) {
    for (var i = 0; i < currentNode.children.length; i++) {
      if (currentNode.children[i] != null) return false;
    }
    return true;
  }

  //Recursive function to delete given key
  deleteHelper(key, currentNode, length, level) {
    let deletedSelf = false;

    if (currentNode == null) {
      console.log("Key does not exist");
      return deletedSelf;
    }

    //Base Case: If we have reached at the node which points to the alphabet at the end of the key.
    if (level == length) {
      //If there are no nodes ahead of this node in this path
      //Then we can delete this node
      if (this.hasNoChildren(currentNode)) {
        currentNode = null;
        deletedSelf = true;
      }

      //If there are nodes ahead of currentNode in this path
      //Then we cannot delete currentNode. We simply unmark this as leaf
      else {
        currentNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    } else {
      let childNode = currentNode.children[this.getIndex(key[level])];
      let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
      if (childDeleted) {
        //Making children pointer also None: since child is deleted
        currentNode.children[this.getIndex(key[level])] = null;
        //If currentNode is leaf node that means currentNode is part of another key
        //and hence we can not delete this node and it's parent path nodes
        if (currentNode.isEndWord) deletedSelf = false;
        //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
        //So, we cannot delete currenNode
        else if (this.hasNoChildren(currentNode) == false) deletedSelf = false;
        //Else we can delete currentNode
        else {
          currentNode = null;
          deletedSelf = true;
        }
      } else deletedSelf = false;
    }
    return deletedSelf;
  }

  //Case 1: Word with No Suffix or Prefix
  // Case 2: Word is a Prefix
  // Case 3: Word Has a Common Prefix
  delete(key) {
    if (this.root == null || key == null) {
      console.log("None key or empty trie error");
      return;
    }

    this.deleteHelper(key, this.root, key.length, 0);
  }
}

let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);

//Construct Trie
for (var i = 0; i < keys.length; i++) {
  t.insert(keys[i]);
}
console.log(t);
