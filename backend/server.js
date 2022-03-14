const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const URI = 'mongodb://localhost:27017/MessagingApp';

// SETTING UP CONNECTION WITH THE DATABASE
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology : true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(err => console.log(err))

app.listen(3000, () => {
    console.log("listening to port 3000");
})