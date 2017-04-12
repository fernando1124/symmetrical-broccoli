var express = require('express');
var helmet = require('helmet');
var engines = require('consolidate');
var routes = require('./routes');

var server = express();
server.use(helmet());

server.set('views', './src/public_html/');
server.engine('html', engines.mustache);
server.set('view engine', 'html');

routes(server);

server.listen(8080, function() {
	console.log('Initialised on 8080');
});