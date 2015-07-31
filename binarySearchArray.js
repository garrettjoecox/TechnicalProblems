expect = require('chai').expect;

/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

function binarySearch(array, target) {

  var center = Math.floor(array.length/2);
  var left = array.slice(0, center);
  var right = array.slice(center, array.length);

  if (target <= center) return binarySearch(right, target);
  else return binarySearch(left, target);

}

describe('binarySearchArray', function() {
  it('should return the index of the target in the array', function() {
    var array = [1,2,3,4,5];
    expect(binarySearch(array, 4)).to.equal(3);
  });
});
