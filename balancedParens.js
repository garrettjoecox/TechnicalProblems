expect = require('chai').expect;

/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 */

var balancedParens = function(input){

  var stack = [];
  var closers = {')': '(', '}': '{', ']': '['};

  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (closers[char]){
      if (stack.pop() !== closers[char]) return false;
    } else if (char === '(' || char === '{' || char === '[') stack.push(char);
  }

  return stack.length === 0;

};

describe('balancedParens', function() {

  it('should correctly return whether the given string has balanced parentheses', function() {
    expect(balancedParens('(')).to.be.false;
    expect(balancedParens('()')).to.be.true;
    expect(balancedParens(')(')).to.be.false;
    expect(balancedParens('(())')).to.be.true;
  });

  it('should work for all bracket types', function() {
    expect(balancedParens('[](){}')).to.be.true;
    expect(balancedParens('[({})]')).to.be.true;
    expect(balancedParens('[(]{)}')).to.be.false;
  });

  it('should ignore non-bracket characters', function() {
    expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.be.true;
    expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.be.false;
  });

});
