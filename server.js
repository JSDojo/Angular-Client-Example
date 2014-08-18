var express = require('express'),
    server  = express();

var conf    = require('./server/conf');

var mongoose= require('mongoose');
mongoose.connect(conf.db.url);

var bodyParser  = require('body-parser'),
    morgan      = require('morgan');
    cors        = require('./server/cors');

server.use(bodyParser.urlencoded({ extended: true }));


server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(cors);

require('./server/APIs/ContactsApi')(server);

server.use('/', express.static(__dirname+"/public/"));

server.listen(conf.serv.port, conf.serv.host, function(){
    console.log('Up and running on port '+ conf.serv.port);
});