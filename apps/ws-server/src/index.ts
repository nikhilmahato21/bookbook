import { WebSocketServer } from 'ws';

const ws = new WebSocketServer({ port: 3001 });

ws.on('error', console.error);

ws.on('connection', (socket) => {
  console.log('Client connected');

  socket.send('connected to the server!');

  socket.on('message', (data) => {
    console.log('received:', data.toString());
  });
});
