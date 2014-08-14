var express = require('express'),
    server  = express();

var port    = process.env.PORT || 3000;

server.use('/', express.static(__dirname+"/public/"));

server.listen(port, function(){
    console.log('Up and running on port '+ port);
});

