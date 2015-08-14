
var assert = require('assert');
var expect = require('chai').expect;

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}


var word = function(phrase){
  var term, word_array, save, all, clear;
  term = phrase;
  word_array = [];

  save = function(object){
    word_array.push(object);
    return word_array;
  };

  all = function(){
    return word_array;
  };

  clear = function(){
    return word_array = [];

  };
  return { term  : term,
           save  : save,
           all   : all,
           clear : clear};
};


describe('Word', function(){
  describe('#term', function(){
    it('returns the string word was initialized with', function(){
      var new_word = word('Homer');
      assert.equal(new_word.term, "Homer");
    });
  });

  describe('#save', function(){
    it('returns array containing this', function(){
      var new_word = word('Homer');
      var word_holder = word();
      var test = word_holder.save(new_word);
      expect(isEquivalent(test, [new_word])).to.equal(true);
    });
  });

  describe('#all', function(){
    it('returns word_array', function(){
      var word_holder = word();
      expect(isEquivalent(word_holder.all(), [])).to.equal(true);
    });
  });

  describe('#clear', function(){
    it('returns empty word_array', function(){
      var word_holder = word();
      test = word_holder.clear();
      expect(isEquivalent(test, [])).to.equal(true);
    });
  });
});
