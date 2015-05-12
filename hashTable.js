expect = require('chai').expect;

/*
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key);
    var bucket = storage[index] || [];
    var stored = false;

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        stored = true;
      }
    }

    if (!stored) {
      bucket.push([key, value]);
    }

    storage[index] = bucket;
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i] && bucket[i][0] === key) return bucket[i][1];
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) delete bucket[i];
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between  0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

describe('hashTable', function() {
  it('should be able to insert values', function() {
    var hash = makeHashTable();
    hash.insert('key', 'value');
    expect(hash.retrieve('key')).to.equal('value');
  });
  it('should be able to retrieve values', function() {
    var hash = makeHashTable();
    hash.insert('key', 'value');
    expect(hash.retrieve('key')).to.equal('value');
  });
  it('should be able to remove values', function() {
    var hash = makeHashTable();
    hash.insert('key', 'value');
    hash.insert('key2', 'value2');
    hash.remove('key');
    expect(hash.retrieve('key')).to.not.exist;
  });
});