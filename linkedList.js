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


var list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4)
list.addToTail(5)
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4'
console.log(list.tail.value);   //yields '5';
