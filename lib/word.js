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
