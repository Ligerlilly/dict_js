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
    return word_array = [];

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
