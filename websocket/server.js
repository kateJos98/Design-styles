const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3003 });

server.on('connection', socket => {
  console.log('Cliente conectado');
  socket.send('Connected to WebSocket');
  socket.on('message', msg => console.log('Received:', msg));
});

console.log('WebSocket escuchando en ws://localhost:3003');
