'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const routes=require('./auth/router');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(users);




app.use('*', notFoundHandler);
app.use(errorHandler);

function listen(port) {
    const Port=process.env.PORT
    app.listen(port, ()=>console.log(`runing on port ${port}`) )
}

module.exports = {
    app,
    listen
}