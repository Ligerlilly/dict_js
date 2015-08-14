var word = function(phrase){
  var term, talk;
  term = phrase;
  talk = function(){
    return term;
  };

  return { talk : term };
};

module.exports = word;
