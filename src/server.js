const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const USERMONGO = process.env.USERMONGO;
const PASSMONGO = process.env.PASSMONGO;
const DBNAME = process.env.DBNAME;

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(`mongodb+srv://${USERMONGO}:${PASSMONGO}@${DBNAME}?retryWrites=true&w=majority`,
   { useNewUrlParser: true, useUnifiedTopology: true })

const connectedUsers = {};

io.on('connection', socket => {
   const { user_id } = socket.handshake.query;
   connectedUsers[user_id] = socket.id;
})

app.use((req, res, next) => {
   req.io = io;
   req.connectedUsers = connectedUsers;
   return next();
})

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333, () => {
   console.log("Backend online...");
});