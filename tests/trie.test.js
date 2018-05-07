const { expect } = require('chai');
const { Trie } = require('../index');

describe('Trie', () => {
  describe('constructor', () => {

  });

  describe('addWord', () => {
    it('makes a tree of nodes for one word', () => {
      const trie = new Trie();
      trie.addWord('star');
      const nodeS = trie.children.get('s');
      expect(nodeS.data).to.eql('s');
      const nodeT = nodeS.children.get('t');
      expect(nodeT.data).to.eql('t');
      const nodeA = nodeT.children.get('a');
      expect(nodeA.data).to.eql('a');
      const nodeR = nodeA.children.get('r');
      expect(nodeR.data).to.eql('r');
      expect(nodeR.isComplete).to.be.true;

    });

    it('adds two words - reusing the same path', () => {
      const trie = new Trie();
      trie.addWord('star');
      trie.addWord('start');
      const nodeS = trie.children.get('s');
      expect(nodeS.data).to.eql('s');
      const nodeT = nodeS.children.get('t');
      expect(nodeT.data).to.eql('t');
      const nodeA = nodeT.children.get('a');
      expect(nodeA.data).to.eql('a');
      const nodeR = nodeA.children.get('r');
      expect(nodeR.data).to.eql('r');
      expect(nodeR.isComplete).to.be.true;
      // Is start also here and complete ?
      const nodeT2 = nodeR.children.get('t');
      expect(nodeT2.data).to.eql('t');
      expect(nodeT2.isComplete).to.be.true;
    });
  });

  describe('letterExits', () => {
    let trie;
    beforeEach (() => {
      trie = new Trie();
      trie.addWord('star');
      trie.addWord('start');
      trie.addWord('indeed');
      trie.addWord('starting');
      trie.addWord('in');

    })

    it('finds valid word', () => {
      expect(trie.wordExists('star')).to.be.true;
      expect(trie.wordExists('start')).to.be.true;
      expect(trie.wordExists('starting')).to.be.true;
      expect(trie.wordExists('indeed')).to.be.true;
      expect(trie.wordExists('in')).to.be.true;
    });
    it('does not find invalid word', () => {
      expect(trie.wordExists('matt')).to.be.false;
    });
    it('does not find invalid word that is partial of another', () => {
      expect(trie.wordExists('sta')).to.be.false;
    });
  });
});