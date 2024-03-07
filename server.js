const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const core = require('cors');
const app = express()
const cookie_parser = require('cookie-parser');
const cloudinary = require('cloudinary');
const connectDB = require('./db/db');
require('dotenv').config();


///middlewire//
app.use(core());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookie_parser());

connectDB();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.get('/', (req, res) => {
        res.send({
            message: "wellcome to oyo api"
        });
    })
    ///route//////////

app.listen(process.env.PORT, () => {
    console.log(`server is starting on port http://localhost:${process.env.PORT}`.bgMagenta)
})