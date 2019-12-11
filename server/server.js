const express = require('express');
const app = express();

const soketIO = require('socket.io');
const http = require('http');

const path = require('path');

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// IO esta es la cpmunicacion del backend 
let io = soketIO(server);

module.exports = io;

require('./sokets/sockets');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
});