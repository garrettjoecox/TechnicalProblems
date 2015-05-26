expect = require('chai').expect;

/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 */

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  var newNode = this.makeNode(value);
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function(){
  var oldHead = this.head;
  this.head = this.head.next;
  return oldHead.value;
};

LinkedList.prototype.contains = function(target){
  var result = false;
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === target) result = true;
    currentNode = currentNode.next;
  };

  return result;
};

LinkedList.prototype.makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

describe('LinkedList', function() {

  it('should be start with no head/tail', function() {
    var list = new LinkedList();
    expect(list.head).to.not.exist;
    expect(list.tail).to.not.exist;
  });

  it('should be able to add to tail of list', function() {
    var list = new LinkedList();
    list.addToTail('first');
    list.addToTail('second');
    expect(list.head.value).to.equal('first');
    expect(list.tail.value).to.equal('second');
  });

  it('should be able to remove from the head of the list', function() {
    var list = new LinkedList();
    list.addToTail('first');
    list.addToTail('second');
    expect(list.head.value).to.equal('first');
    expect(list.removeHead()).to.equal('first');
    expect(list.head.value).to.equal('second');
  });

  it('should be able to search for a target value in the list', function() {
    var list = new LinkedList();
    list.addToTail('first');
    list.addToTail('second');
    list.addToTail('third');
    list.addToTail('fourth');
    list.addToTail('fifth');
    expect(list.contains('third')).to.be.true;
    list.removeHead();
    expect(list.contains('first')).to.be.false;
  });

});
