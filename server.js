var io = require('socket.io').listen(8003);


var socket = io.sockets.on('connection', function(socket) {

    socket.on('set nickname', function(name) {
        socket.set('nickname', name);
    });

    socket.on('broadcastMessage', function(message) {
        socket.get('nickname', function(err, name) {
            socket.broadcast.emit('clientMessage', { data: name + ": " + message.data});
        })
    });


 });