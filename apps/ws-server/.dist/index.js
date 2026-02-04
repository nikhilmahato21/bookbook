"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({
    port: 3001
});
ws.on('error', console.error);
ws.on('connection', (socket) => {
    socket.send('connected to the server!');
});
ws.on('message', function message(data) {
    console.log('received: %s', data);
});
