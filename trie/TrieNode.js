const NUM_OF_ALPHABETS = 26;
module.exports = class TrieNode {
  constructor(char) {
    this.children = [];
    for (let i = 0; i < NUM_OF_ALPHABETS; i++) {
      this.children[i] = null;
    }
    this.isEndWord = false;
    this.char = char;
  }
  markAsLeaf() {
    this.isEndWord = true;
  }
  unmarkAsLeaf() {
    this.isEndWord = false;
  }
};
