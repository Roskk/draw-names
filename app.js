var express = require('express'),
    app = express(),
    server = require('http').createServer(app),

server.listen(process.env.PORT || 3000);
console.log('Server Running...');

app.use(express.static(__dirname + '/public'));