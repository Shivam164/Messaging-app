require("dotenv").config({path : "./config.env"});

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const errorHandler = require("./middleware/error");

const app = express();


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

app.listen(PORT, () => {
    console.log(`listening to PORT : ${PORT}`);
})