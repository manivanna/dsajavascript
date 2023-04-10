"use strict";
const TrieNode = require("./TrieNode.js");
const Trie = require("./Trie.js");

//Recursive Function to generate all words
function getWords(root, result, level, string) {
  //Leaf denotes end of a word
  if (root.isEndWord) {
    //current word is stored till the 'level' in the character array
    let temp = "";
    for (var x = 0; x < level; x++) {
      temp += String(string[x]);
    }
    result.push(temp);
  }
  for (var i = 0; i < 26; i++) {
    if (root.children[i] != null) {
      //Non-None child, so add that index to the character array
      string[level] = String.fromCharCode(i + "a".charCodeAt(0));
      getWords(root.children[i], result, level + 1, string);
    }
  }
}

function findWords(root) {
  let result = [];
  let chararr = [];
  for (var i = 0; i < 20; i++) {
    chararr.push(null);
  }
  getWords(root, result, 0, chararr);
  return result;
}

let tr = new Trie();
let keys = ["This", "is", "our", "first", "trie"];

for (var x = 0; x < keys.length; x++) {
  tr.insert(keys[x], x);
}

console.log(findWords(tr.root));
