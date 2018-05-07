/**
 * Trie is a tree data structure where each path represents a word
 * Same time as a HashMap but more efficiant storage.
 * 
 * Most operations are O(k) where k is the length of a word. 
 * A HashMap is often expressed as O(1) but it also has to read each character of the key, also making it a O(k) operation.
 */
class TrieNode {
  constructor(data) {
    this.data = data; // A character ...
    this.isComplete = false;
    this.children = new Map(); // Keyed on character -> TrieNode.
  }

  // Determins if word exists in O(K) where k is the length of the string.
  wordExists(word) {
    let recentNode = this;
    for(let i = 0; i < word.length; i++) {
      recentNode = recentNode ? recentNode.letterExists(word[i]) : null;
      if(recentNode && i == word.length - 1 && recentNode.isComplete) {
        // Last letter is at the end of a loop
        return true;
      }
      // return false
    }
    return false;
  }

  // Look up a letter in O(1)
  letterExists(letter) {
    return this.children.get(letter);
  }
  // Can add words in O(k) where k is the length of the string.
  addWord(word) {
    let recentNode = this;
    for(let i = 0; i < word.length; i++) {
      const isEndNode = i == word.length - 1;
      recentNode = recentNode._addLetter(word[i], isEndNode);
    }
    
  }

  _addLetter(letter, isEndNode) {
    //Check if node exists at map, if it does cool - otherwise add a letter node to map
    let letterNode;
    if(this.children.get(letter)) {
      letterNode = this.children.get(letter);
    }
    else {
      letterNode = new TrieNode(letter);
      letterNode.isComplete = isEndNode;
      this.children.set(letter, letterNode);
    }
    if(isEndNode) {
      // Do not omodify value if it already exists on this node ...
      letterNode.isComplete = true;
    }
    return letterNode;
  }
}

module.exports = TrieNode;