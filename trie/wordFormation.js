"use strict";
const TrieNode = require("./TrieNode.js");
const Trie = require("./Trie.js");

function isFormationPossible(dict, word) {
  // Insert all the words from dict in the trie
  let trie = new Trie();
  for (var i = 0; i < dict.length; i++) {
    trie.insert(dict[i]);
  }
  // Get the pointer to the root of the trie
  let currentNode = trie.root;
  // iterate over the word
  for (var i = 0; i < word.length; i++) {
    let char = trie.getIndex(word[i]);
    // if the prefix of word does not exist, word would not either
    if (currentNode.children[char] == null) {
      return false;
    }
    // if the substring of the word exists as a word in trie, check whether rest of the word also exists, if it does return true
    else if (
      currentNode.children[char].isEndWord == true &&
      trie.search(word.substring(i + 1))
    ) {
      return true;
    }
    currentNode = currentNode.children[char];
  }
}

let keys = [
  "the",
  "hello",
  "there",
  "answer",
  "any",
  "educative",
  "world",
  "their",
  "abc",
];
console.log(isFormationPossible(keys, "helloworld"));
