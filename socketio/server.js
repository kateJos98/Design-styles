const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer();
const io = new Server(server);

io.on('connection', socket => {
  socket.emit('message', 'Connected to Socket.IO');
  socket.on('message', msg => console.log('Received:', msg));
});

server.listen(3004, () => console.log('Socket.IO server on port 3004'));
