const db = require('./config/mongoose');
const router = require('./routes/url');
const express = require('express');
const app = require('express')();
require('dotenv').config();
const port = process.env.PORT || 8000;

db()
app.use(express.json())
app.use('/', router);

app.listen(port, () => {
    console.log('connect to port : ' + port)
})

