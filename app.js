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

var definition = function(){
  var add_def, def_objects, definitions, defs, all, save, id, find, set_id;
  def_objects = [];
  definitions = [];

  set_id = function(word_id){
    this.id = word_id;
  };

  defs = function(){
    return definitions;
  };

  add_def = function(string){
    definitions.push(string);
    return definitions;
  };

  all = function(){
    return def_objects;
  };

  save = function(object){
    def_objects.push(object);
    return def_objects;
  };

  find = function(id){
    var d_obs = this.all();
    found_def = null;
    for (var i = 0; i < d_obs.length; i++){
      if (d_obs[i].id === id){
        found_def = d_obs[i];
      }
    }
    return found_def;
  };

  return { add_def : add_def,
           all     : all,
           save    : save,
           id      : id,
           find    : find,
           defs    : defs,
           set_id  : set_id };
};


var word_holder = word();
var def_holder = definition();

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
//var router = express.Router();
var bodyParser = require('body-parser');

//app.use('/', router);

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
  var words = word_holder.all();
  response.render("words", {words: words});
});

app.get('/words/:id/def_form', function(request, response){


  response.render("def_form", {word_id : request.params.id});
});

app.post('/add_def', function(request, response){
  var def = null;
  //console.log(request.body.word_id);
  var word = word_holder.find(request.body.word_id);
  if (def_holder.find(request.body.word_id)){
    def = def_holder.find(request.body.word_id);
    def.add_def(request.body.def);
    return def;
  }
  else {
    def = definition();
    def.set_id(request.body.word_id);
    def.add_def(request.body.def);
    def_holder.save(def);
    return def;
  }
  response.redirect("/words",{word: word, def : def});

});

app.listen(4567, function(request, response){
  console.log('listening on port 4567');
});

module.exports = app;
