require('./lib/definition.js');
require('./lib/word.js');



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

var word_holder = word();


var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
bodyParser = require('body-parser');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('public'));

app.get('/', function(request, response){
  response.render("index");
});

app.get('/word_form', function(request, response){
  response.render("word_form");
});

app.post('/add_word', function(request, response){
  var phrase =request.body;
  new_word = word(phrase.word);
  word_holder.save(new_word);
  response.redirect("/words");
});

app.get('/words', function(request, response){
  var words = word_holder.all()
  response.render("words", {words: words});
});

app.get('word/:id/def_form', function(request, response){
  var word = word_holder.find(request.params.id);
  response.render("def_form", {word : word});
});

app.listen(4567, function(request, response){
  console.log('listening on port 4567');
});

module.exports = app;
