
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
  save = function(){
    word_array.push(this);
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
  before(function(){
    new_word = word('Homer');
    new_word.clear();
  });
  describe('#word', function(){
    it('returns the string word was initialized with', function(){
      assert.equal(new_word.term, "Homer");
    });
  });

  describe('#save', function(){
    it('returns array containing this', function(){
      var test = new_word.save();
      expect(test[0].term).to.equal(new_word.term);
    });
  });

  describe('#all', function(){
    it('returns word_array', function(){
      //new_word.clear();
      expect(isEquivalent(new_word.all(), [])).to.equal(true);
    });
  });

  describe('#clear', function(){
    it('returns empty word_array', function(){
      test = new_word.clear();
      expect(isEquivalent(test, [])).to.equal(true);
    });
  });
});
