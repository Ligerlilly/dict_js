
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
  var term, word_array, save, all, clear, id, find;
  term = phrase;
  word_array = [];
  id = word_array.length + 1;

  save = function(object){
    word_array.push(object);
    return word_array;
  };

  all = function(){
    return word_array;
  };

  clear = function(){
    word_array = [];
    return word_array;

  };

  find = function(id){
    var words = this.all();
    found_word = null;
    for (var i = 0; i < words.length; i++){
      if (words[i].id === id){
        found_word = words[i];
      }
    }
    return found_word;
  };

  return { term  : term,
           save  : save,
           all   : all,
           clear : clear,
           id    : id,
           find  : find };
};

var definition = function(){
  var add_def, defs;
  defs = [];
  add_def = function(string){
    defs.push(string);
    return defs;
  };

  return { add_def : add_def };
};

describe("Definition", function(){
  describe("#add definition", function(){
    it("returns an array of definitions", function(){
      var def = definition();

      expect(isEquivalent(def.add_def('blah blah'), ['blah blah'])).to.equal(true);
    });
  });
});

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

  describe('#id', function(){
    it('returns id number', function(){
      var new_word = word('Hi');
      expect(new_word.id).to.equal(1);
    });
  });

  describe("#find", function(){
    it("returns object given id argument", function(){
      var new_word = word('Homer');
      var word_holder = word();
      word_holder.save(new_word);
      expect(word_holder.find(1)).to.equal(new_word);
    });
  });
});
