'use strict'

var app = require('./app.js');

//Server configuration.
var port = process.env.PORT | 3004;

var server = app.listen(port,()=>{
    console.log(`Listening on : ${server.address().port}`);
    // debugger;
});