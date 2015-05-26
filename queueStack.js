expect = require('chai').expect;

/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

var Stack = function() {
  var storage = [];
  var size = 0;

  this.push = function(value){
    size++;
    storage.push(value);
  };

  this.pop = function(){
    size--;
    return storage.pop();
  };

  this.size = function(){
    return size;
  };

};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    var count = inbox.size();
    for (var i = 0; i < count; i++) {
      outbox.push(inbox.pop());
    }
    var dequeued = outbox.pop();
    for (var j = 0; j < count - 1; j++) {
      inbox.push(outbox.pop());
    }
    return dequeued;
  };

  this.size = function(){
    return inbox.size();
  };

};

describe('Stack', function() {

  it('should be able to add things to top of stack', function() {
    var stack = new Stack();
    stack.push('first');
    stack.push('second');
    expect(stack.pop()).to.equal('second');
  });

  it('should be able to remove from the top of the stack', function() {
    var stack = new Stack();
    stack.push('first');
    stack.push('second');
    expect(stack.pop()).to.equal('second');
    expect(stack.pop()).to.equal('first');
  });

  it('should be able to track the size of the stack', function() {
    var stack = new Stack();
    stack.push('first');
    stack.push('second');
    expect(stack.size()).to.equal(2);
    stack.pop();
    expect(stack.size()).to.equal(1);
  });

});

describe('Queue', function() {

  it('should be able to add things to the back of the queue', function() {
    var queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.dequeue()).to.equal('first');
  });

  it('should be able to remove from the front of the queue', function() {
    var queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.dequeue()).to.equal('first');
    expect(queue.dequeue()).to.equal('second');
  });

  it('should be able to track the size of the queue', function() {
    var queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.size()).to.equal(2);
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

});
