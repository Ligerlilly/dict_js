require('./lib/definition.js');
require('./lib/word.js');

var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
bodyParser = require('body-parser');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
