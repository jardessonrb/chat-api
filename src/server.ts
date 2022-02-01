import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const portRunningServer = 3333;
const appExpress    = express();
const serverHttp    = http.createServer(appExpress);
const ioSocket      = new Server(serverHttp);

appExpress.get('/', (_, response) => {
    response.send("<h1>Sejam bem-vindos ao chat-api</h1>")
});

ioSocket.on("connection", clientSocket => {
    console.log(`Client connected with id ${clientSocket.id}`);
})

appExpress.listen(portRunningServer, () => {
    console.log("Server is running in port: ", portRunningServer)
});
