function totalWords(rootN) {
  let result = 0;

  // Leaf denotes end of a word
  if (rootN.isEndWord) {
    result += 1;
  }

  for (var i = 0; i < 26; i++) {
    if (rootN.children[i] != null) {
      result += totalWords(rootN.children[i]);
    }
  }
  return result;
}

let t = new Trie();
t.insert("data", 0);
t.insert("structures", 1);
console.log(totalWords(t.root));
