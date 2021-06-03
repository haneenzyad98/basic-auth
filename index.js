'use strict';


const mongoose = require('mongoose');
const server = require('./server');


require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(()=> console.log('conntected to mongoDB'))
.catch((err)=> console.log(err));



// start server
server.listen(3000);