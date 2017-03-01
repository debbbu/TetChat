var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(process.env.PORT);
var io = require('socket.io').listen(server);

users = [];
connections = [];

// server.listen(process.env.PORT, function() {
// 	console.log("Server is now running on port..." + process.env.PORT);
// });

io.sockets.on('connection', function(socket) {
	console.log("Connected");
});
