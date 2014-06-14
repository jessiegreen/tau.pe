'use strict';

var express = require('express'),
    cons = require('consolidate'),
    path = require('path'),
    routes = require('./routes'),
    app = express();

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

app.get('/', routes.index);

app.get('/url/:id', api.getUrl);
app.post('/url', api.addUrl);

app.get('*', routes.index);

app.listen(3000);
console.dir('Started tau.pe');