const mongoose = require('mongoose');
const { mongoURL } = require('./config');

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});


mongoose.connect("mongodb://0.0.0.0:27017", {
    useNewUrlParser: true,
});