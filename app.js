var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/app', express.static('app'));

app.use('/api/sq', require('./controller/api/smart-question/smart-question.api'));

app.use('/api', require('./controller/api/default.api'));

// app.use('/ie', express.static('/home/fzl/ie'));
// //app.use('/is4301', express.static('/home/fzl/is4301'));
// app.use('/is4301-admin', express.static('/home/fzl/is4301-admin'));
// app.use('/is4301', express.static('/home/fzl/is4301'));
app.get('/', function (req, res) {
    return res.redirect('/app');
});

global.__base = __dirname + '/';

module.exports = app;
