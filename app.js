var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var data = require('./routes/class');
app.use('/api', data);
app.listen(port);
console.log("Listen on port" + port);
