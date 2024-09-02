const io = require('socket.io')(3000);

exports.notify = (event) => {
    io.emit('event', event);
};
