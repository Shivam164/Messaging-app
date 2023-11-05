require("dotenv").config({path : "./config.env"});

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const errorHandler = require("./middleware/error");
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));


// SETTING UP CONNECTION WITH THE DATABASE
connectDB()
    .then(() => console.log("Connected to database"))
    .catch(error => console.log(`Error while connecting ${error.message}`))

app.use(express.json());

// MIDDLEWARE FOR ROUTES
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/chat', require('./routes/chat'));

// THIS MIDDLEWARE WILL TAKE CARE OF ALL THE ERROS
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`listening to PORT : ${PORT}`);
})

const io = require('socket.io')(server,{
    pingTimeout : 120000,
    cors : {
        origin : "*"
    }
});

io.on("connection", (socket) => {
    console.log("here");
    console.log('connected to socket.io');
    socket.on('setup', (userData) => {
        socket.join(userData._id);
        console.log(userData._id);
        socket.emit("connected");
    });

    socket.on("join chat", room => {
        socket.join(room);
        console.log("user joined room ", room);
    });

    socket.on("new message", (newMessageReceived) => {
        var chat = newMessageReceived.group;
        if(!chat.users)return console.log("Users not defined :| ");
        
        chat.users.forEach(user => {
            if(user._id === newMessageReceived.sender._id)return;
            
            socket.in(user._id).emit("message received", newMessageReceived);
        })
    })
})