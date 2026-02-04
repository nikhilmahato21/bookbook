import WebSocket, { WebSocketServer } from 'ws';
import {prisma} from "@repo/db/client"

const ws = new WebSocketServer({
    port:3001
});

ws.on('error', console.error);

ws.on('connection', (socket)=> {
  socket.send('connected to the server!');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});