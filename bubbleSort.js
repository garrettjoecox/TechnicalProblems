expect = require('chai').expect;

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * Example usage:
 *
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 */

var bubbleSort = function(array) {
  for (var i = 0; i < array.length; i++) {
    var left = array[i];
    var right = array[i + 1];

    if (left > right) {
      array[i] = right;
      array[i + 1] = left;
    }
  }
  if (!isSorted(array)) return bubbleSort(array);
  else return array;

};

var isSorted = function(array) {
  var result = true;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) result = false;
  }

  return result;
};

describe('bubbleSort', function() {
  it('should sort the given array', function() {
    var array = [4,2,1,6,5,3];
    expect(bubbleSort(array)).to.eql([1,2,3,4,5,6]);
  });
});
